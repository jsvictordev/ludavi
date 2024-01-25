import {ErrorBase} from "../errors.class";
import {ErrorsEnum} from "../error.enum";

/**
 * Esta respuesta puede ser enviada cuando una petición tiene conflicto con el estado actual del servidor.
 * @public
 * @class ConflictException
 * @extends ErrorBase
 * @typedef {ConflictException}
 * @author Victor R. Jose
 */
export class ConflictException extends ErrorBase{
    /**
     * @param {string} message - Descripción del error que se le enviara al usuario
     */
    constructor(message: string) {
        super(ErrorsEnum.ConflictException, message);
    }
}