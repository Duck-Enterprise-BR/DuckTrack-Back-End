import "reflect-metadata";

import { AppInstance, ServerEnvironment } from "@expressots/core";
import { container } from "./app-container";
import dotenv from "dotenv";

export async function bootstrap() {
    const app = AppInstance.create(container);
    app.listen(3000, ServerEnvironment.Development);
    dotenv.config();
}

bootstrap();
