import {ErrorsEnum} from "../error.enum";
import {ErrorBase} from "../errors.class";

/**
 * El servidor ha encontrado una situación que no sabe cómo manejarla.
 * @public
 * @class InternalServerErrorException
 * @extends ErrorBase
 * @typedef {InternalServerErrorException}
 * @author Victor R. Jose
 */
export class InternalServerErrorException extends  ErrorBase{
    /**
     * @param {string} message - Descripción del error que se le enviara al usuario
     */
    constructor(message: string) {
        super(ErrorsEnum.InternalServerErrorException, message);
    }
}
