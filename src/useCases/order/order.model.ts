import { Schema, model } from "mongoose";
import { DefaultSchemaConfig } from "../../base/database/default-schema-config";
import { defaultSchema } from "../../base/database/default-schema";

const OrderSchema = new Schema(
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

export default model("Order", OrderSchema, "order");
