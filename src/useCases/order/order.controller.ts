import { BaseController } from "@expressots/core";
import {
    controller,
    httpPost,
    requestBody,
    response,
} from "inversify-express-utils";
import { OrderUseCase } from "./order.usecase";
import { IOrder } from "./order.dto";

@controller("/order")
class OrderController extends BaseController {
    constructor() {
        super("order-controller");
    }

    @httpPost("/register")
    async execute(@requestBody() body: IOrder, @response() res: any) {
        const useCase = new OrderUseCase();
        const response = await useCase.Register(body);
        return res.status(response.statusCode).send(response);
    }
}

export { OrderController };
