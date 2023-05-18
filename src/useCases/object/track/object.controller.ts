import { BaseController } from "@expressots/core";
import { controller, httpGet, httpPost, response, requestBody } from "inversify-express-utils";
import axios from "axios";
import axiosRateLimit from 'axios-rate-limit';

const api = axiosRateLimit(axios.create(), {
  maxRequests: 1, 
  perMilliseconds: 1000 
});

@controller("/object/track")
class ObjectController extends BaseController {
  constructor() {
    super("object-controller")
  }

  @httpGet("/")
  execute(@response() res: any) {
    return res.send("track");
  }

  @httpPost("/")
  async create(@requestBody() body: { code: string }, @response() res: any) {
    try {
      let { code } = body;
      let url = process.env.API_URL;
      let response = await api.get(`${url}${code}`);
      return res.send(response.data);
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return this.create(body, res);
      } else {
        return res.status(500).send('Internal Server Error');
      }
    }
  }
}

export { ObjectController };
