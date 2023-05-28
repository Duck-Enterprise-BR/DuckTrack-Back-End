interface IErrors {
    field: string;
    errors: string[];
}

enum ErrorsMessage {
    notFound = "not found",
    needString = "need string",
    needMin = "need min:",
    needId = "need valid id",
}

export { IErrors, ErrorsMessage };
