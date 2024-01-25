import {ErrorBase} from "../errors.class";
import {ErrorsEnum} from "../error.enum";

/**
 * El cliente no posee los permisos necesarios para cierto contenido, por lo que el servidor está rechazando otorgar una respuesta apropiada.
 * @public
 * @class ForbiddenException
 * @extends ErrorBase
 * @typedef {ForbiddenException}
 * @author Victor R. Jose
 */
export class ForbiddenException extends ErrorBase{
    /**
     * @param {string} message - Descripción del error que se le enviara al usuario
     */
    constructor(message: string) {
        super(ErrorsEnum.ForbiddenException, message);
    }
}