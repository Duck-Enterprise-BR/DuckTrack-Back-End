import { BaseController } from "@expressots/core";
import { controller, httpGet, response } from "inversify-express-utils";
import { StatusUseCase } from "./status.usecase";

@controller("/status")
class StatusController extends BaseController {
    constructor() {
        super("status-controller");
    }

    @httpGet("/")
    async execute(@response() res: any) {
        const statusUserCases = new StatusUseCase();
        const data = await statusUserCases.list();
        return res.send(data);
    }
}

export { StatusController };
