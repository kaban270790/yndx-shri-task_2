const FormError = require('./FormError.js');
const CODE = "FORM.HEADER_TEXT_SIZE_IS_INVALID";
const MESSAGE = "Все текстовые блоки в заголовке формы (элемент header) должны быть со значением модификатора size на 2 шага больше эталонного размера";

class FormContentItemIndentError extends FormError {
    /**
     * @param {string} obj
     * @param {number} positionStart
     */
    constructor(obj, positionStart) {
        super(obj, positionStart, CODE, MESSAGE);
    }
}

module.exports = FormContentItemIndentError;
