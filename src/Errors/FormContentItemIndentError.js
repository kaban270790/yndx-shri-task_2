const FormError = require('./FormError.js');
const CODE = "FORM.CONTENT_ITEM_INDENT_IS_INVALID";
const MESSAGE = "Строки формы (в которые складываются лейбл и инпут) помечаются элементом формы content-item и должны отбиваться между собой с помощью модификатора нижнего отступа со значением модификатора indent-b элемента формы item на 1 шаг больше эталонного размера";

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