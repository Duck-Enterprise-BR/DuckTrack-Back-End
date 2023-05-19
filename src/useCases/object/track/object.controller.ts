import { BaseController } from "@expressots/core";
import { controller, httpPost, response, requestBody } from "inversify-express-utils";
import { TrackingJob } from "../../../jobs/tracking/tracking.job";
import { AxiosResponse } from "axios";

@controller("/object/track")
class ObjectController extends BaseController {
  constructor() {
    super("object-controller");
  }

  @httpPost("/")
  async track(@requestBody() body: { code: string }, @response() res: any) {
    try {
      let response: AxiosResponse = await TrackingJob.Track(body.code);
      return res.send(response.data);
    } catch (error: any) {
      return res.status(500).send('Internal Server Error');
    }
  }
}

export { ObjectController };
