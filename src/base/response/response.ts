import { IErrors } from "../errors/errors.dto";

export enum StatusCode {
    ok = 200,
    badRequest = 400,
    notFound = 404,
}

export interface IResponse<T> {
    statusCode: StatusCode;
    success?: T;
    errors: IErrors[];
}
