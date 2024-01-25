import {ErrorsEnum} from "../error.enum";
import {ErrorBase} from "../errors.class";

/**
 * El servidor origen requiere que la solicitud sea condicional. Tiene la intención de prevenir problemas de 'actualización perdida', donde un cliente OBTIENE un estado del recurso, lo modifica, y lo PONE devuelta al servidor, cuando mientras un tercero ha modificado el estado del servidor, llevando a un conflicto.
 * @public
 * @class NotFoundException
 * @extends ErrorBase
 * @typedef {NotFoundException}
 * @author Victor R. Jose
 */
export class PreconditionFailedException extends ErrorBase {
    constructor(message: string) {
        super(ErrorsEnum.PreconditionFailedException, message);
    }
}