import {ErrorBase} from "../errors.class";
import {ErrorsEnum} from "../error.enum";

/**
 * La versión de HTTP usada en la petición no está soportada por el servidor.
 * @public
 * @class HttpVersionNotSupportedException
 * @extends ErrorBase
 * @typedef {HttpVersionNotSupportedException}
 * @author Victor R. Jose
 */
export class HttpVersionNotSupportedException extends  ErrorBase{
    /**
     * @param {string} message - Descripción del error que se le enviara al usuario
     */
    constructor(message: string) {
        super(ErrorsEnum.HttpVersionNotSupportedException, message);
    }
}
