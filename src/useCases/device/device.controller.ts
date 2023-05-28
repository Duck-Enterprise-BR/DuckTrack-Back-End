import { BaseController } from "@expressots/core";
import {
    controller,
    httpPost,
    requestBody,
    response,
} from "inversify-express-utils";
import { DeviceUseCase } from "./device.usecase";
import { IDevice } from "./device.dto";

@controller("/device")
class DeviceController extends BaseController {
    constructor() {
        super("device-controller");
    }

    @httpPost("/register")
    async execute(@requestBody() body: IDevice, @response() res: any) {
        const useCase = new DeviceUseCase();
        const response = await useCase.register(body);
        return res.status(response.statusCode).send(response);
    }
}

export { DeviceController };
