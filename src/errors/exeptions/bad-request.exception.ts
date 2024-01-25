import {ErrorBase} from "../errors.class";
import {ErrorsEnum} from "../error.enum";

/**
 * Esta respuesta significa que el servidor no pudo interpretar la solicitud dada una sintaxis inválida.
 * @public
 * @class BadRequestException
 * @extends ErrorBase
 * @typedef {BadRequestException}
 * @author Victor R. Jose
 */
export class BadRequestException extends ErrorBase{

    /**
     * @param {string} message - Descripción del error que se le enviara al usuario
     */
    constructor(message: string) {
        super(ErrorsEnum.BadRequestException, message);
    }
}
