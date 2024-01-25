import {ErrorBase} from "../errors.class";
import {ErrorsEnum} from "../error.enum";

/**
 * El método solicitado es conocido por el servidor pero ha sido deshabilitado y no puede ser utilizado. Los dos métodos obligatorios, GET y HEAD, nunca deben ser deshabilitados y no deberían retornar este código de error.
 * @public
 * @class MethodNotAllowedException
 * @extends ErrorBase
 * @typedef {MethodNotAllowedException}
 * @author Victor R. Jose
 */
export class MethodNotAllowedException extends ErrorBase{
    /**
     * @param {string} message - Descripción del error que se le enviara al usuario
     */
    constructor(message: string) {
        super(ErrorsEnum.MethodNotAllowedException, message);
    }
}
