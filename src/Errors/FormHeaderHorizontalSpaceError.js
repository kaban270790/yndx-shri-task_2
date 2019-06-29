const FormError = require('./FormError.js');
const CODE = "FORM.HEADER_HORIZONTAL_SPACE_IS_INVALID";
const MESSAGE = "Горизонтальный внутренний отступ должен быть на 1 шаг больше эталонного размера";

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
