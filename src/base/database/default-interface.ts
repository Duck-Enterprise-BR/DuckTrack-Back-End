import { ObjectId } from "mongoose";

export interface IBase {
    _id: ObjectId;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}
