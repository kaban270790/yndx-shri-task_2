const TextError = require('./TextError.js');
const CODE = "TEXT.SEVERAL_H1";
const MESSAGE = "Заголовок первого уровня (блок text с модификатором type h1) должен быть один на странице";

class TextSeveralH1Error extends TextError {
    /**
     * @param {string} obj
     * @param {number} positionStart
     */
    constructor(obj, positionStart) {
        super(obj, positionStart, CODE, MESSAGE);
    }
}

module.exports = TextSeveralH1Error;
