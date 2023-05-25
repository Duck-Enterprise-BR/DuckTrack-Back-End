import { CreateModule } from "@expressots/core";
import { OrderController } from ".//order.controller";

const OrderModule = CreateModule([OrderController]);

export { OrderModule };
