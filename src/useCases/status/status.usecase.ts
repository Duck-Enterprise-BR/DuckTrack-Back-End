import { provide } from "inversify-binding-decorators";
import { IStatus } from "./status.dto";
import statusModel from "./status.model";
import { IStatusProps } from "./status.dto";
import { ErrorsMessage, IErrors } from "./../../base/errors/errors.dto";
import { Validator } from "../../base/utils/Validator";
import { IResponse, StatusCode } from "../../base/response/response";
import { ObjectId } from "mongodb";

@provide(StatusUseCase)
class StatusUseCase {
    async list(): Promise<IStatus[]> {
        return await statusModel.find({
            enabled: true,
        });
    }

    async create(props: IStatusProps): Promise<IResponse<IStatus>> {
        const response: IResponse<IStatus> = {
            statusCode: 200,
            errors: [],
        };

        const validateFields = await this.validate(props);

        if (validateFields.length) {
            response.statusCode = StatusCode.badRequest;
            response.errors = validateFields;
        }

        if (response.errors.length) {
            return response;
        }

        const item = <IStatus>(<unknown>await statusModel.create({
            name: props.name,
            icon: props.icon,
        }));

        response.success = item;

        return response;
    }

    async updateById(
        props: IStatusProps,
        id: string,
    ): Promise<IResponse<IStatus>> {
        const response: IResponse<IStatus> = {
            statusCode: 200,
            errors: [],
        };

        const validateFields = await this.validate(props, id);

        if (validateFields.length) {
            response.statusCode = StatusCode.badRequest;
            response.errors = validateFields;
        }

        if (response.errors.length) {
            return response;
        }

        const item = <IStatus>(<unknown>await statusModel.updateOne(
            { _id: id },
            {
                icon: props.icon,
                name: props.name,
            },
        ));

        response.success = item;

        return response;
    }

    async delete(id: string): Promise<IResponse<void>> {
        const response: IResponse<void> = {
            statusCode: 200,
            errors: [],
        };

        const validateId = Validator.isId("id", id);

        if (validateId.errors.length) {
            response.errors.push(validateId);
        } else {
            const checkExistsId = await statusModel.count({
                _id: new ObjectId(id),
            });

            if (!checkExistsId) {
                response.errors.push({
                    field: "id",
                    errors: [ErrorsMessage.notFound],
                });
            }
        }

        if (response.errors.length) {
            response.statusCode = StatusCode.badRequest;
            return response;
        }

        await statusModel.updateOne(
            {
                _id: new ObjectId(id),
            },
            {
                enabled: false,
            },
        );

        return response;
    }

    async validate(props: IStatusProps, id?: string): Promise<IErrors[]> {
        const errors: IErrors[] = [];
        const validateName = Validator.isString("name", props.name, 1);
        const validateIcon = Validator.isString("icon", props.icon, 1);

        if (validateName.errors.length) {
            errors.push(validateName);
        }

        if (validateIcon.errors.length) {
            errors.push(validateIcon);
        }

        if (id) {
            const checkIfValidId = Validator.isId("id", id);

            if (!checkIfValidId.errors.length) {
                const checkIfExistId = await statusModel.count({
                    _id: new ObjectId(id),
                });

                console.log(checkIfExistId);

                if (!checkIfExistId) {
                    errors.push({
                        field: "id",
                        errors: [ErrorsMessage.notFound],
                    });
                }
            } else {
                errors.push(checkIfValidId);
            }
        }

        return errors;
    }
}

export { StatusUseCase };
