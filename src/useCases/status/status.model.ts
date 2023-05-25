import { Schema, model } from "mongoose";
import { defaultSchema } from "../../base/database/default-schema";
import { DefaultSchemaConfig } from "../../base/database/default-schema-config";

const StatusSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },
        icon: {
            type: String,
            require: true,
        },
        ...defaultSchema,
    },
    {
        ...DefaultSchemaConfig,
    },
);

export default model("Status", StatusSchema, "status");
