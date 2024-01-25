import {ErrorsEnum} from "../error.enum";
import {ErrorBase} from "../errors.class";

/**
 * El servidor se rehúsa a intentar hacer café con una tetera.
 * @public
 * @class ImATeapotException
 * @extends ErrorBase
 * @typedef {ImATeapotException}
 * @author Victor R. Jose
 */
export class ImATeapotException extends ErrorBase{
    /**
     * @param {string} message - Descripción del error que se le enviara al usuario
     */
    constructor(message: string) {
        super(ErrorsEnum.ImATeapotException, message);
    }
}

