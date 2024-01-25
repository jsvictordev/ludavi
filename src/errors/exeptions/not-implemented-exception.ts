import {ErrorsEnum} from "../error.enum";
import {ErrorBase} from "../errors.class";

/**
 * El método solicitado no está soportado por el servidor y no puede ser manejado. Los únicos métodos que los servidores requieren soporte (y por lo tanto no deben retornar este código) son GET y HEAD.
 * @public
 * @class NotImplementedException
 * @extends ErrorBase
 * @typedef {NotImplementedException}
 * @author Victor R. Jose
 */
export class NotImplementedException extends ErrorBase{
    /**
     * @param {string} message - Descripción del error que se le enviara al usuario
     */
    constructor(message: string) {
        super(ErrorsEnum.NotImplementedException, message);
    }
}
