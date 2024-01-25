import {ErrorsEnum} from "./error.enum";
import {errorsAvailable} from "./errors.const";
import {ErrorHandleInterface} from "./error.interface";

/**
 * Base principal desde la que se derivan las clases de errores.
 * @public
 * @abstract
 * @class ErrorBase
 * @typedef {ErrorBase}
 * @author Victor R. Jose
 */
export abstract class ErrorBase {
    message: string
    error?: string| null
    statusCode: ErrorsEnum

    /**
     *
     * @param statusCode Código del error solicitado
     * @param {string} message - Descripción del error que se le enviara al usuario
     * @protected
     */
    protected constructor(statusCode: ErrorsEnum, message: string, ) {
        this.message = message;
        this.statusCode = statusCode;
        let errorFind: ErrorHandleInterface | undefined = errorsAvailable.find( (error: ErrorHandleInterface ) => error.statusCode == statusCode)
        if(errorFind) this.error = errorFind.error;
    }
}






























