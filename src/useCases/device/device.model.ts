import { Schema, model } from "mongoose";
import { DefaultSchemaConfig } from "../../base/database/default-schema-config";
import { defaultSchema } from "../../base/database/default-schema";

const DeviceSchema = new Schema(
    {
        userCode: {
            type: String,
            require: true,
            unique: true,
        },
        notificationToken: {
            type: String,
            require: true,
        },
        ...defaultSchema,
    },
    {
        ...DefaultSchemaConfig,
    },
);

export default model("Device", DeviceSchema, "device");
