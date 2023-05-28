import { provide } from "inversify-binding-decorators";
import deviceModel from "./device.model";
import { Validator } from "../../base/utils/validator";
import { IRequestResponse } from "../../base/interface/request-response.interface";
import { IDevice } from "./device.dto";
import { StatusCode } from "@expressots/core";

@provide(DeviceUseCase)
class DeviceUseCase {
    public static async register(device: IDevice): Promise<IRequestResponse> {
        const response: IRequestResponse = {
            errors: [],
            statusCode: StatusCode.OK,
        };

        const validateName = Validator.isString("name", device.name);
        const validateToken = Validator.isString(
            "notificationToken",
            device.notificationToken,
        );

        if (validateName.errors.length) {
            response.errors.push(validateName);
        }

        if (validateToken.errors.length) {
            response.errors.push(validateToken);
        }

        if (response.errors.length) {
            response.statusCode = 400;
            return response;
        }

        const data = await deviceModel.create(device);
        response.success = data;

        return response;
    }
}

export { DeviceUseCase };
