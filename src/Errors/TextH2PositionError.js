const TextError = require('./TextError.js');
const CODE = "TEXT.INVALID_H2_POSITION";
const MESSAGE = "Заголовок второго уровня (блок text с модификатором type h2) не может следовать перед заголовком первого уровня на одном или более глубоком уровне вложенности.";

class TextH2PositionError extends TextError {
    /**
     * @param {string} obj
     * @param {number} positionStart
     */
    constructor(obj, positionStart) {
        super(obj, positionStart, CODE, MESSAGE);
    }
}

module.exports = TextH2PositionError;
