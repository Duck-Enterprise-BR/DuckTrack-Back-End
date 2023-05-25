import { provide } from "inversify-binding-decorators";
import { IOrder } from "./order.dto";
import orderModel from "./order.model";

@provide(OrderUseCase)
class OrderUseCase {
    async list(): Promise<IOrder[]> {
        return await orderModel.find({
            enabled: true,
        });
    }
}

export { OrderUseCase };
