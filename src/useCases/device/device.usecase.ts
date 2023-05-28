import { provide } from "inversify-binding-decorators";
import deviceModel from "./device.model";
import { IRequestResponse } from "../../base/interface/request-response.interface";
import { IDevice } from "./device.dto";
import { StatusCode } from "@expressots/core";
import { Validator } from "../../base/utils/Validator";

@provide(DeviceUseCase)
class DeviceUseCase {
    async register(device: IDevice): Promise<IRequestResponse> {
        const response: IRequestResponse = {
            errors: [],
            statusCode: StatusCode.OK,
        };

        const validateUserCode = Validator.isString(
            "userCode",
            device.userCode,
            1,
        );
        const validateToken = Validator.isString(
            "notificationToken",
            device.notificationToken,
            1,
        );

        if (validateUserCode.errors.length) {
            response.errors.push(validateUserCode);
        }

        if (validateToken.errors.length) {
            response.errors.push(validateToken);
        }

        if (response.errors.length) {
            response.statusCode = StatusCode.BadRequest;
            return response;
        }

        const checkExistsUserCode = await deviceModel
            .findOne({
                userCode: device.userCode,
            })
            .lean();

        if (checkExistsUserCode) {
            checkExistsUserCode.notificationToken = device.notificationToken;

            await deviceModel.updateOne(
                {
                    _id: checkExistsUserCode._id!,
                },
                {
                    notificationToken: device.notificationToken,
                },
            );

            response.success = checkExistsUserCode;
        } else {
            const data = await deviceModel.create(device);
            response.success = data;
        }

        return response;
    }
}

export { DeviceUseCase };
