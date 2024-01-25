import {ErrorsEnum} from "../error.enum";
import {ErrorBase} from "../errors.class";

/**
 * El servidor no está listo para manejar la petición. Causas comunes puede ser que el servidor está caído por mantenimiento o está sobrecargado. Hay que tomar en cuenta que junto con esta respuesta, una página usuario-amigable explicando el problema debe ser enviada. Estas respuestas deben ser usadas para condiciones temporales y el encabezado HTTP Retry-After: debería, si es posible, contener el tiempo estimado antes de la recuperación del servicio. El webmaster debe también cuidar los encabezados relacionados al caché que son enviados junto a esta respuesta, ya que estas respuestas de condición temporal deben usualmente no estar en el caché.
 * @public
 * @class ServiceUnavailableException
 * @extends ErrorBase
 * @typedef {ServiceUnavailableException}
 * @author Victor R. Jose
 */
export class ServiceUnavailableException extends  ErrorBase{
    /**
     * @param {string} message - Descripción del error que se le enviara al usuario
     */
    constructor(message: string) {
        super(ErrorsEnum.ServiceUnavailableException, message);
    }
}
