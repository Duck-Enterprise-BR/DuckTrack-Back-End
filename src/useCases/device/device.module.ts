import { CreateModule } from "@expressots/core";
import { DeviceController } from "./register/device.controller";

const DeviceModule = CreateModule([DeviceController]);

export { DeviceModule };
