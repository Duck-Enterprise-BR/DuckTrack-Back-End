import { BaseController } from "@expressots/core";
import { controller, httpGet, response } from "inversify-express-utils";

@controller("/device")
class DeviceController extends BaseController {
    constructor() {
        super("device-controller");
    }

    @httpGet("/")
    execute(@response() res: any) {
        return res.send("Hello Expresso TS");
    }
}

export { DeviceController };
