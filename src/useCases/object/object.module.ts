import { CreateModule } from "@expressots/core";
import { ObjectController } from "./track/object.controller";

const ObjectModule = CreateModule([ObjectController]);

export { ObjectModule };