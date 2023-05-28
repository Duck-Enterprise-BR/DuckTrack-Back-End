import { BaseController } from "@expressots/core";
import {
    controller,
    httpGet,
    httpPost,
    response,
    request,
    httpPut,
    httpDelete,
} from "inversify-express-utils";
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

    @httpPost("/")
    async create(@request() req: any, @response() res: any) {
        const statusUserCases = new StatusUseCase();
        const data = await statusUserCases.create(req.body);
        return res.status(data.statusCode).send(data);
    }

    @httpPut("/:id")
    async update(@request() req: any, @response() res: any) {
        const statusUserCases = new StatusUseCase();
        const data = await statusUserCases.updateById(req.body, req.params.id);
        return res.status(data.statusCode).send(data);
    }

    @httpDelete("/:id")
    async delete(@request() req: any, @response() res: any) {
        const statusUserCases = new StatusUseCase();
        const data = await statusUserCases.delete(req.params.id);
        return res.status(data.statusCode).send(data);
    }
}

export { StatusController };
