import { provide } from "inversify-binding-decorators";
import { IOrder } from "./order.dto";
import OrderModel from "./order.model";
import { IRequestResponse } from "../../base/interface/request-response.interface";
import { StatusCode } from "@expressots/core";
import { Validator } from "../../base/utils/validator";

@provide(OrderUseCase)
class OrderUseCase {
    async Register(order: IOrder): Promise<IRequestResponse> {
        const response: IRequestResponse = {
            errors: [],
            statusCode: StatusCode.OK,
        };

        const validateName = Validator.isString("name", order.name);
        const validateCode = Validator.isOrderCode("code", order.code);

        if (validateName.errors.length) {
            response.errors.push(validateName);
        }

        if (validateCode.errors.length) {
            response.errors.push(validateCode);
        }

        if (response.errors.length) {
            response.statusCode = StatusCode.BadRequest;
            return response;
        }

        const data = await OrderModel.create(order);
        response.success = data;
        return response;
    }
}

export { OrderUseCase };
