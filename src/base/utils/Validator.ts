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

    static isOrderCode(code: string): IErrors {
        const errors: string[] = [];
        const regCode = /^[A-Z]{2}\d{9}[A-Z]{2}$/;
        const test = regCode.test(code);

        if (!test) {
            errors.push(ErrorsMessage.notValidCode);
        }

        return {
            errors,
            valid: test,
        };
    }
}
