import {ErrorsEnum} from "../error.enum";
import {ErrorBase} from "../errors.class";

/**
 * La petición estaba bien formada pero no se pudo seguir debido a errores de semántica.
 * @public
 * @class UnprocessableEntityException
 * @extends ErrorBase
 * @typedef {UnprocessableEntityException}
 * @author Victor R. Jose
 */
export class UnprocessableEntityException extends  ErrorBase{
    /**
     * @param {string} message - Descripción del error que se le enviara al usuario
     */
    constructor(message: string) {
        super(ErrorsEnum.UnprocessableEntityException, message);
    }
}
