import {ErrorBase} from "../errors.class";
import {ErrorsEnum} from "../error.enum";

/**
 * Esta respuesta es enviada en una conexión inactiva en algunos servidores, incluso sin alguna petición previa por el cliente. Significa que el servidor quiere desconectar esta conexión sin usar. Esta respuesta es muy usada desde algunos navegadores, como Chrome, Firefox 27+, o IE9, usa mecanismos de pre-conexión HTTP para acelerar la navegación. También hay que tener en cuenta que algunos servidores simplemente desconecta la conexión sin enviar este mensaje.
 * @public
 * @class RequestTimeoutException
 * @extends ErrorBase
 * @typedef {RequestTimeoutException}
 * @author Victor R. Jose
 */
export class RequestTimeoutException extends ErrorBase{
    /**
     * @param {string} message - Descripción del error que se le enviara al usuario
     */
    constructor(message: string) {
        super(ErrorsEnum.RequestTimeoutException, message);
    }
}
