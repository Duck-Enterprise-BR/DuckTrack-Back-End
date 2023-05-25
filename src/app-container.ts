import { AppContainer } from "@expressots/core";
import { AppModule } from "./app.module";
import { StatusModule } from "./useCases/status/status.module";
import { OrderModule } from "./useCases/order/order.module";
import { DeviceModule } from "./useCases/device/device.module";

const appContainer = new AppContainer();

const container = appContainer.create([
    OrderModule,
    AppModule,
    DeviceModule,
    StatusModule,
    DeviceModule,
]);

export { container };
