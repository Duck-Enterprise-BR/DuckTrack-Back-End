import { provide } from "inversify-binding-decorators";
import { IDevice } from "./device.dto";
import deviceModel from "./device.model";

@provide(DeviceUseCase)
class DeviceUseCase {
    async list(): Promise<IDevice[]> {
        return await deviceModel.find({
            enabled: true,
        });
    }
}

export { DeviceUseCase };
