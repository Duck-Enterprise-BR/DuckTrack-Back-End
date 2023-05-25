import {
    controller,
    response,
    httpPost,
    requestBody,
    httpGet,
} from "inversify-express-utils";
import { BaseController } from "@expressots/core";
import { Device } from "../../../models/model.device";
import { Order } from "../../../models/model.order";
import { DBJob } from "../../../jobs/db/db.job";

@controller("/device/register")
class DeviceController extends BaseController {
    constructor() {
        super("device-controller");
    }

    @httpPost("/")
    async register(@requestBody() body: Device, @response() res: any) {
        const device: Device = new Device(body.name, body.notificationToken);
        const collection: string = process.env.C_DEVICE || "";

        try {
            await DBJob.insert(device, collection);
            res.send(device);
        } catch (error: any) {
            return res.status(500).send("Internal Server Error");
        }
    }

    @httpPost("/order")
    async order(@requestBody() body: Order, @response() res: any) {
        const order: Order = new Order(body.name, body.code, body.device);
        const collection: string = process.env.C_ORDER || "";

        try {
            await DBJob.insert(order, collection);
            res.send(order);
        } catch (error: any) {
            return res.status(500).send("Internal Server Error");
        }
    }

    @httpGet("/teste")
    async execute(@response() res: any) {
        const querytest: Device = new Device("teste", "000000000000");

        const collection: string = process.env.C_DEVICE || "";
        const result = await DBJob.get(collection, querytest);
        res.send(result);
    }
}

export { DeviceController };
