import { ObjectId } from "mongodb";
import { ErrorsMessage, IErrors } from "../errors/errors.dto";

export class Validator {
    static isString(field: string, value?: any, min?: number): IErrors {
        const errors: string[] = [];

        if (!value) {
            errors.push(ErrorsMessage.needString);
        }

        if (min && String(value).length < min) {
            errors.push(`${ErrorsMessage.needMin} ${min}`);
        }

        return {
            field,
            errors,
        };
    }

    static isId(field: string, value: string): IErrors {
        const errors: string[] = [];

        try {
            new ObjectId(value);
        } catch (err: any) {
            errors.push(ErrorsMessage.needId);
        }

        return {
            field,
            errors,
        };
    }

    static isOrderCode(field: string, code: string): IErrors {
        const errors: string[] = [];
        const regCode = /^[A-Z]{2}\d{9}[A-Z]{2}$/;
        const test = regCode.test(code);

        if (!test) {
            errors.push(ErrorsMessage.notValidCode);
        }

        return {
            field,
            errors,
        };
    }
}
