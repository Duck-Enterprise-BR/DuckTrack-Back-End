import { AppContainer } from "@expressots/core";
import { AppModule } from "./app.module";
import { ObjectModule } from "./useCases/object/object.module";
import { DeviceModule } from "./useCases/device/device.module";
import { StatusModule } from "./useCases/status/status.module";

const appContainer = new AppContainer();

const container = appContainer.create([
    ObjectModule,
    AppModule,
    DeviceModule,
    StatusModule,
]);

export { container };
