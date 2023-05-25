import { IBase } from "../../base/database/default-interface";

interface IOrder extends IBase {
    name: string;
    code: string;
}

export { IOrder };
