import {ErrorBase} from "../errors.class";
import {ErrorsEnum} from "../error.enum";


/**
 * Esta respuesta es enviada cuando el servidor, después de aplicar una negociación de contenido servidor-impulsado (en-US), no encuentra ningún contenido seguido por la criteria dada por el usuario.
 * @public
 * @class NotAcceptableException
 * @extends ErrorBase
 * @typedef {NotAcceptableException}
 * @author Victor R. Jose
 */
export class NotAcceptableException extends ErrorBase{
    /**
     * @param {string} message - Descripción del error que se le enviara al usuario
     */
    constructor(message: string) {
        super(ErrorsEnum.NotAcceptableException, message);
    }
}