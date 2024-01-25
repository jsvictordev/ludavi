import {ErrorHandleInterface} from "./error.interface";

export const errorsAvailable : ErrorHandleInterface[] = [
    {statusCode:400, error: "Bad Request "},
    {statusCode:401, error: "Unauthorized "},
    {statusCode:404, error: "Not Found "},
    {statusCode:403, error: "Forbidden "},
    {statusCode:406, error: "Not Acceptable "},
    {statusCode:408, error: "Request Timeout "},
    {statusCode:409, error: "Conflict "},
    {statusCode:410, error: "Gone "},
    {statusCode:505, error: "Http Version NotSupported "},
    {statusCode:413, error: "Payload Too Large "},
    {statusCode:415, error: "Unsupported Media Type"},
    {statusCode:422, error: "Unprocessable Entity "},
    {statusCode:500, error: "Internal Server Error "},
    {statusCode:501, error: "Not Implemented "},
    {statusCode:418, error: "Im A Teapot "},
    {statusCode:405, error: "Method Not Allowed "},
    {statusCode:502, error: "Bad Gateway"},
    {statusCode:503, error: "Service Unavailable"},
    {statusCode:504, error: "Gateway Timeout"},
    {statusCode:428, error: "Precondition Failed"},
]
