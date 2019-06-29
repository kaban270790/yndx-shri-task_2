const FormError = require('./FormError.js');
const CODE = "FORM.CONTENT_HORIZONTAL_SPACE_IS_INVALID";
const MESSAGE = "Горизонтальный внутренний отступ контентного элемента должен задаваться с помощью модификатора space-h элемента формы item на 1 шаг больше эталонного размера";

class FormSizeError extends FormError {
    /**
     * @param {string} obj
     * @param {number} positionStart
     */
    constructor(obj, positionStart) {
        super(obj, positionStart, CODE, MESSAGE);
    }
}

module.exports = FormSizeError;