const FormSizeError = require('../../Errors/FormSizeError.js');
const {FORM_ELEMENTS, ELEMENTS, jsonParser, factoryElement} = require('../tools.js');

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
 * @param {{block: string, content: Array|undefined, mods: Object|undefined}} blockObj
 * @param {string} referenceSize
 * @param {string} originalBlockStr
 * @param {number} blockStartPosition
 *
 * @throws FormSizeError
 */
const validate = function (blockObj, referenceSize, originalBlockStr, blockStartPosition) {
    if (blockObj.content) {
        blockObj.content.forEach(blockObj => {
            validate(blockObj, referenceSize, originalBlockStr, blockStartPosition)
        });
    }
    if (FORM_ELEMENTS.indexOf(factoryElement(blockObj)) !== -1) {
        if (!validateBlock(blockObj, referenceSize)) {
            throw new FormSizeError(originalBlockStr, blockStartPosition);
        }
    }
};
/**
 * @param {{block: string, content: Array|undefined, mods: Object|undefined}} blockObj
 * @param {string} referenceSize
 * @return {boolean}
 */
const validateBlock = function (blockObj, referenceSize) {
    if (factoryElement(blockObj) === ELEMENTS.LABEL) {
        for (let i = 0, l = blockObj.content.length; i < l; i++) {
            if (blockObj.content[i].block === ELEMENTS.TEXT &&
                !validateBlock(blockObj.content[i], referenceSize)) {
                return false;
            }
        }
    } else {
        return blockObj.mods && blockObj.mods.size && blockObj.mods.size === referenceSize;
    }
    return true;
};
