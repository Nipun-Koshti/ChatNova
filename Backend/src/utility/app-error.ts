import { HTTPSTATUS, HttpStatusCodeType} from "../config/http.config";

export const ErrorCodes = {
    ERR_INTERNAL:"ERR_INTERNAL",
    ERR_BAD_REQUEST:"ERR_BAD_REQUEST",
    ERR_UNAUTHORIZED:"ERR_UNAUTHORIZED",
    ERR_FORBIDDEN:"ERR_FORBIDDEN",
    ERR_NOT_FOUND:"ERR_NOT_FOUND",
} as const;

export type ErrorCodeTypes = (typeof ErrorCodes)[keyof typeof ErrorCodes]

export class AppError extends Error {
        constructor(
            message:string,
            public statusCode:HttpStatusCodeType = HTTPSTATUS.INTERNAL_SERVER_ERROR,
            public errorCode:ErrorCodeTypes=ErrorCodes.ERR_INTERNAL
        ){
            super(message);
            Error.captureStackTrace(this);

        }
}


export class InternalServerException extends AppError{
    constructor(message:string = "Intrernal server error"){
        super(message, HTTPSTATUS.INTERNAL_SERVER_ERROR, ErrorCodes.ERR_INTERNAL);
    }
}


export class NotFoundException extends AppError {
  constructor(message = "Resource Not Found") {
    super(message, HTTPSTATUS.NOT_FOUND, ErrorCodes.ERR_NOT_FOUND);
  }
}
export class BadRequestException extends AppError {
  constructor(message = "Bad Request") {
    super(message, HTTPSTATUS.BAD_REQUEST, ErrorCodes.ERR_BAD_REQUEST);
  }
}
export class UnauthorizedException extends AppError {
  constructor(message = "Unauthorized Access") {
    super(message, HTTPSTATUS.UNAUTHORIZED, ErrorCodes.ERR_UNAUTHORIZED);
  }
}