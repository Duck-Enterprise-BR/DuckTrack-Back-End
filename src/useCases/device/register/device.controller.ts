import { BaseController } from "@expressots/core";
import { controller, response, httpPost, requestBody } from "inversify-express-utils";
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
    try {
      await DBJob.Insert(device);
      res.send(device);
    } catch (error: any) {
      return res.status(500).send('Internal Server Error');
    }
  }
}

export { DeviceController };
