import { IBase } from "../../base/database/default-interface";

interface IStatus extends IBase {
    name: string;
    icon: string;
}

type IStatusProps = Omit<IStatus, "createdAt" | "updatedAt" | "deletedAt">;

export { IStatus, IStatusProps };
