const FormError = require('./FormError.js');
const CODE = "FORM.INPUT_AND_LABEL_SIZES_SHOULD_BE_EQUAL";
const MESSAGE = "Подписи и поля в форме должны быть одного размера";

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