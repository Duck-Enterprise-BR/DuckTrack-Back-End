interface IErrors {
    field: string;
    errors: string[];
}

enum ErrorsMessage {
    notFound = "not found",
    needString = "need string",
    needMin = "need min:",
}

export { IErrors, ErrorsMessage };
