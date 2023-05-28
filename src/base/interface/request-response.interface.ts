import { IErrors } from "../errors/errors.dto";

export interface IRequestResponse {
    errors: IErrors[];
    success?: any;
    statusCode: number;
}
