import { BaseController } from "@expressots/core";
import { controller, httpGet, response } from "inversify-express-utils";
import { OrderUseCase } from "./order.usecase";

@controller("/order")
class OrderController extends BaseController {
    constructor() {
        super("order-controller");
    }

    @httpGet("/")
    execute(@response() res: any) {
        const orderUseCase = new OrderUseCase();
        const data = orderUseCase.list();
        return res.send(data);
    }
}

export { OrderController };
