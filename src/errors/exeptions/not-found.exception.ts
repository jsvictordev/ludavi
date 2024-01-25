import {ErrorsEnum} from "../error.enum";
import {ErrorBase} from "../errors.class";

/**
 * El servidor no pudo encontrar el contenido solicitado. Este código de respuesta es uno de los más famosos dada su alta ocurrencia en la web.
 * @public
 * @class NotFoundException
 * @extends ErrorBase
 * @typedef {NotFoundException}
 * @author Victor R. Jose
 */
export class NotFoundException extends ErrorBase{
    /**
     * @param {string} message - Descripción del error que se le enviara al usuario
     */
    constructor(message: string) {
        super(ErrorsEnum.NotFoundException, message);
    }
}