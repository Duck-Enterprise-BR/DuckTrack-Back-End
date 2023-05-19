import { AppContainer } from "@expressots/core";
import { AppModule } from "./app.module";
import { ObjectModule } from "./useCases/object/object.module";
import { DeviceModule } from "./useCases/device/device.module";

const appContainer = new AppContainer();

const container = appContainer.create([
    ObjectModule,
    AppModule,
    DeviceModule,
]);

export { container };
