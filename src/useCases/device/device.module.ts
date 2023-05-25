import { CreateModule } from "@expressots/core";
import { DeviceController } from ".//device.controller";

const DeviceModule = CreateModule([DeviceController]);

export { DeviceModule };
