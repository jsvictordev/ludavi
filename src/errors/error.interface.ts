import {ErrorsEnum} from "./error.enum";



export interface ErrorHandleInterface{
    message?: string
    error: string
    statusCode: ErrorsEnum
}
