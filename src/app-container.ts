import { AppContainer } from "@expressots/core";
import { AppModule } from "./app.module";
import { ObjectModule } from "./useCases/object/object.module";

const appContainer = new AppContainer();

const container = appContainer.create([
    ObjectModule,
    AppModule,
]);

export { container };
