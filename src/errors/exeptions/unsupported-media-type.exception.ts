import {ErrorsEnum} from "../error.enum";
import {ErrorBase} from "../errors.class";


/**
 * El formato multimedia de los datos solicitados no está soportado por el servidor, por lo cual el servidor rechaza la solicitud.
 * @public
 * @class UnsupportedMediaTypeException
 * @extends ErrorBase
 * @typedef {UnsupportedMediaTypeException}
 * @author Victor R. Jose
 */
export class UnsupportedMediaTypeException extends ErrorBase{
    /**
     * @param {string} message - Descripción del error que se le enviara al usuario
     */
    constructor(message: string) {
        super(ErrorsEnum.UnsupportedMediaTypeException, message);
    }
}
