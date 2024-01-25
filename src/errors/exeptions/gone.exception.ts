/**
 * Esta respuesta puede ser enviada cuando el contenido solicitado ha sido borrado del servidor.
 * @public
 * @class GoneException
 * @extends ErrorBase
 * @typedef {GoneException}
 * @author Victor R. Jose
 */
import {ErrorBase} from "../errors.class";
import {ErrorsEnum} from "../error.enum";

export class GoneException extends ErrorBase{
    /**
     * @param {string} message - Descripción del error que se le enviara al usuario
     */
    constructor(message: string) {
        super(ErrorsEnum.GoneException, message);
    }
}