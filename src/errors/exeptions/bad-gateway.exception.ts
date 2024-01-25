import {ErrorsEnum} from "../error.enum";
import {ErrorBase} from "../errors.class";

/**
 * Esta respuesta de error significa que el servidor, mientras trabaja como una puerta de enlace para obtener una respuesta necesaria para manejar la petición, obtuvo una respuesta inválida.
 * @public
 * @class BadGatewayException
 * @extends ErrorBase
 * @typedef {BadGatewayException}
 * @author Victor R. Jose
 */
export class BadGatewayException extends ErrorBase{
    /**
     * @param {string} message - Descripción del error que se le enviara al usuario
     */
    constructor(message: string) {
        super(ErrorsEnum.BadGatewayException, message);
    }
}

