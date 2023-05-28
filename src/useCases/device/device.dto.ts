import { IBase } from "../../base/database/default-interface";

interface IDevice extends IBase {
    userCode: string;
    notificationToken: string;
}

export { IDevice };
