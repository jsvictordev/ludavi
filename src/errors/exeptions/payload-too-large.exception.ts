import {ErrorsEnum} from "../error.enum";
import {ErrorBase} from "../errors.class";

/**
 * La entidad de petición es más larga que los límites definidos por el servidor; el servidor puede cerrar la conexión o retornar un campo de encabezado Retry-After.
 * @public
 * @class PayloadTooLargeException
 * @extends ErrorBase
 * @typedef {PayloadTooLargeException}
 * @author Victor R. Jose
 */
export class PayloadTooLargeException extends ErrorBase{
    /**
     * @param {string} message - Descripción del error que se le enviara al usuario
     */
    constructor(message: string) {
        super(ErrorsEnum.PayloadTooLargeException, message);
    }
}