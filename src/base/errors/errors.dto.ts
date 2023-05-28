interface IErrors {
    field?: string;
    errors: string[];
    valid?: boolean;
}

enum ErrorsMessage {
    notFound = "not found",
    needString = "need string",
    needMin = "need min:",
    notValidCode = "not a valid code",
}

export { IErrors, ErrorsMessage };
