const {FORM_ELEMENTS, ELEMENTS, factoryElement, jsonParser, getModValue, getBlock} = require('./tools.js');
const FormSizeError = require('../Errors/FormSizeError.js');
/**
 * @param {string} originalBlockStr
 * @param {number} startPositionFormBlock
 * @return {string|null}
 */
module.exports = function (originalBlockStr, startPositionFormBlock) {
    let blockStr = getBlock(originalBlockStr, startPositionFormBlock);
    return find(jsonParser(blockStr), originalBlockStr, startPositionFormBlock);
};
/**
 * @param {{block: string, content: Array|undefined, mods: Object|undefined}} blockObj
 * @param {string} originalBlockStr
 * @param {number} startPositionFormBlock
 * @return {string|null}
 */
const find = function (blockObj, originalBlockStr, startPositionFormBlock) {
    let size = null;
    if (blockObj.content) {
        for (let i = 0, l = blockObj.content.length; i < l; i++) {
            let size = find(blockObj.content[i], originalBlockStr, startPositionFormBlock);
            if (size) {
                return size;
            }
        }
    }
    if (FORM_ELEMENTS.indexOf(factoryElement(blockObj)) !== -1) {
        size = getSize(blockObj);
        if (!size) {
            throw new FormSizeError(originalBlockStr, startPositionFormBlock);
        }
    }
    return size;
};
/**
 * @param {{block: string, elem: string|undefined, content: Array, mods:Object}} blockObj
 * @return {string|null}
 */
const getSize = function (blockObj) {
    let size = null;
    if (factoryElement(blockObj) === ELEMENTS.LABEL) {
        for (let i = 0, l = blockObj.content.length; i < l; i++) {
            if (factoryElement(blockObj.content[i]) === ELEMENTS.TEXT) {
                size = getSize(blockObj.content[i]);
                if (size) {
                    break;
                }
            }
        }
    } else {
        size = getModValue(blockObj, 'size');
    }
    return size;
};
