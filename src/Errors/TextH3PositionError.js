const TextError = require('./TextError.js');
const CODE = "TEXT.INVALID_H3_POSITION";
const MESSAGE = "Заголовок третьего уровня (блок text с модификатором type h3) не может следовать перед заголовком второго уровня на одном или более глубоком уровне вложенности";

class TextH3PositionError extends TextError {
    /**
     * @param {string} obj
     * @param {number} positionStart
     */
    constructor(obj, positionStart) {
        super(obj, positionStart, CODE, MESSAGE);
    }
}

module.exports = TextH3PositionError;
