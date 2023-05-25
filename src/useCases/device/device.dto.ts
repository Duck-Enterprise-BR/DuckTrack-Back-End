import { IBase } from "../../base/database/default-interface";

interface IDevice extends IBase {
    name: string;
    notificationToken: string;
}

export { IDevice };
