import { BaseController } from "@expressots/core";
import { controller, response, httpPost, requestBody, httpGet } from "inversify-express-utils";
import { Device } from "../../../models/model.device";
import { DBJob } from "../../../jobs/db/db.job";

@controller("/device/register")
class DeviceController extends BaseController {
  constructor() {
    super("device-controller")
  }

  @httpPost("/")
  async register(@requestBody() body: Device, @response() res: any) {
    let device = new Device(body.name, body.notificationToken);
    let collection: string = process.env.C_DEVICE || "";

    try {
      await DBJob.insert(device, collection);
      res.send(device);
    } catch (error: any) {
      return res.status(500).send('Internal Server Error');
    }
  }

  @httpGet("/teste")
  async execute(@response() res: any) {
    let collection: string = process.env.C_DEVICE || "";
    let result = await DBJob.get(collection);
    res.send(result);
  }
}

export { DeviceController };
