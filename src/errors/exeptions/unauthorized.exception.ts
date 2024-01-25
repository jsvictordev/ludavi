import {ErrorBase} from "../errors.class";
import {ErrorsEnum} from "../error.enum";

/**
 * Es necesario autenticar para obtener la respuesta solicitada. Esta es similar a 403, pero en este caso, la autenticación es posible.
 * @public
 * @class UnauthorizedException
 * @extends ErrorBase
 * @typedef {UnauthorizedException}
 * @author Victor R. Jose
 */
export class UnauthorizedException extends ErrorBase{
    /**
     * @param {string} message - Descripción del error que se le enviara al usuario
     */
    constructor(message: string) {
        super(ErrorsEnum.UnauthorizedException, message);
    }
}