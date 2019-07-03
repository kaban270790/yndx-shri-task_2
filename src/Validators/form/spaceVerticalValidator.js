const FormVerticalSpaceError = require('../../Errors/FormVerticalSpaceError.js');
const {jsonParser, factoryElement, ELEMENTS, checkSize} = require('../tools.js');

/**
 * @param {string} blockStr
 * @param {string} referenceSize
 * @param {string} originalBlockStr
 * @param {number} blockStartPosition
 *
 * @throws FormSizeError
 */
module.exports = function (blockStr, referenceSize, originalBlockStr, blockStartPosition) {
    validate(jsonParser(blockStr), referenceSize, originalBlockStr, blockStartPosition);
};
/**
 * @param {{block: string, elem: string|undefined, content: Array|undefined, mix: Object|undefined}} blockObj
 * @param {string} referenceSize
 * @param {string} originalBlockStr
 * @param {number} blockStartPosition
 *
 * @throws FormSizeError
 */
const validate = function (blockObj, referenceSize, originalBlockStr, blockStartPosition) {
    if (blockObj.content) {
        blockObj.content.map(blockObj => {
            validate(blockObj, referenceSize, originalBlockStr, blockStartPosition)
        });
    }
    if (factoryElement(blockObj) === ELEMENTS.CONTENT) {
        let hasElementItem = false;
        if (blockObj.mix) {
            for (let i = 0, l = blockObj.mix.length; i < l; i++) {
                let mix = blockObj.mix[i];
                if (factoryElement(mix) === ELEMENTS.ITEM) {
                    hasElementItem = true;
                    if (!checkSize(mix, referenceSize, 'space-v', 2)) {
                        throw new FormVerticalSpaceError(originalBlockStr, blockStartPosition);
                    }
                    break;
                }
            }
        }
        if (!hasElementItem) {
            throw new FormVerticalSpaceError(originalBlockStr, blockStartPosition);
        }
    }
};
