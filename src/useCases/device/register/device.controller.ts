import { controller, response, httpPost, requestBody, httpGet } from "inversify-express-utils";
import { BaseController } from "@expressots/core";
import { Device } from "../../../models/model.device";
import { Order } from "../../../models/model.order";
import { DBJob } from "../../../jobs/db/db.job";

@controller("/device/register")
class DeviceController extends BaseController {
  constructor() {
    super("device-controller")
  }

  @httpPost("/")
  async register(@requestBody() body: Device, @response() res: any) {
    let device: Device = new Device(body.name, body.notificationToken);
    let collection: string = process.env.C_DEVICE || "";

    try {
      await DBJob.insert(device, collection);
      res.send(device);
    } catch (error: any) {
      return res.status(500).send('Internal Server Error');
    }
  }

  @httpPost("/order")
  async order(@requestBody() body: Order, @response() res: any) {
    let order: Order = new Order(body.name, body.code, body.device);
    let collection: string = process.env.C_ORDER || "";

    try {
      await DBJob.insert(order, collection);
      res.send(order);
    } catch (error: any) {
      return res.status(500).send('Internal Server Error');
    }
  }

  @httpGet("/teste")
  async execute(@response() res: any) {
    let querytest: Device = new Device("teste", "000000000000");

    let collection: string = process.env.C_DEVICE || "";
    let result = await DBJob.get(collection, querytest);
    res.send(result);
  }
}

export { DeviceController };
