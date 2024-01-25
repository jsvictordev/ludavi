import {ErrorsEnum} from "../error.enum";
import {ErrorBase} from "../errors.class";


/**
 * Esta respuesta de error es dada cuando el servidor está actuando como una puerta de enlace y no puede obtener una respuesta a tiempo.
 * @public
 * @class GatewayTimeoutException
 * @extends ErrorBase
 * @typedef {GatewayTimeoutException}
 * @author Victor R. Jose
 */
export class GatewayTimeoutException extends  ErrorBase{
    /**
     * @param {string} message - Descripción del error que se le enviara al usuario
     */
    constructor(message: string) {
        super(ErrorsEnum.GatewayTimeoutException, message);
    }
}



