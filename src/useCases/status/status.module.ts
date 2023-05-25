import { CreateModule } from "@expressots/core";
import { StatusController } from ".//status.controller";

const StatusModule = CreateModule([StatusController]);

export { StatusModule };
