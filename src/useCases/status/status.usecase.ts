import { provide } from "inversify-binding-decorators";
import { IStatus } from "./status.dto";
import statusModel from "./status.model";

@provide(StatusUseCase)
class StatusUseCase {
    async list(): Promise<IStatus[]> {
        return await statusModel.find({
            enabled: true,
        });
    }
}

export { StatusUseCase };
