const FormError = require('./FormError.js');
const CODE = "FORM.HEADER_VERTICAL_SPACE_IS_INVALID";
const MESSAGE = "Вертикальный внутренний отступ заголовка формы должен быть задан с помощью микса на него элемента формы item со значением модификатора space-v, равным эталонному размеру";

class FormHeaderVerticalSpaceError extends FormError {
    /**
     * @param {string} obj
     * @param {number} positionStart
     */
    constructor(obj, positionStart) {
        super(obj, positionStart, CODE, MESSAGE);
    }
}

module.exports = FormHeaderVerticalSpaceError;
