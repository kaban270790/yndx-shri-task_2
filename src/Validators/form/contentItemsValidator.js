const FormContentItemIndentError = require('../../Errors/FormContentItemIndentError.js');
const {getBlock, findSize, jsonParser, findStartBlock} = require('../tools.js');

/**
 * @param {string} blockStr
 * @param {string} referenceSize
 * @param {string} originalBlockStr
 * @param {number} blockStartPosition
 *
 * @throws FormSizeError
 */
module.exports = function (blockStr, referenceSize, originalBlockStr, blockStartPosition) {

    let regExpForm = /"elem"(\s){0,}:(\s){0,}"content-item"/g;
    let positionContentItems = [];
    let errors = [];
    while (true) {
        let regExpResult = regExpForm.exec(blockStr);
        if (!regExpResult) {
            break;
        }
        positionContentItems.push(blockStartPosition + findStartBlock(blockStr, regExpResult.index));
    }
    positionContentItems.forEach(function (position, index) {
        let block = getBlock(originalBlockStr, position);
        try {
            validate(jsonParser(block), referenceSize, originalBlockStr, position, (index + 1) < positionContentItems.length)
        } catch (e) {
            if (e instanceof FormContentItemIndentError) {
                errors.push(e.getError());
            } else {
                throw e;
            }
        }
    });
    return errors;
};
/**
 * @param {{block: string, elem: string|undefined, content: Array|undefined, mix: Object|undefined}} blockObj
 * @param {string} referenceSize
 * @param {string} originalBlockStr
 * @param {number} blockStartPosition
 * @param {boolean} isRequire
 *
 * @throws FormContentItemIndentError
 */
const validate = function (blockObj, referenceSize, originalBlockStr, blockStartPosition, isRequire) {
    if (blockObj.mix) {
        blockObj.mix.forEach((mix) => {
            if (!validateMix(mix, referenceSize, isRequire)) {
                throw new FormContentItemIndentError(originalBlockStr, blockStartPosition);
            }
        });
    } else if (isRequire) {
        throw new FormContentItemIndentError(originalBlockStr, blockStartPosition);
    }
};

/**
 * @param {{block: string, elem: string|undefined, content: Array|undefined, mods: Object|undefined}} mix
 * @param {string} referenceSize
 * @param {boolean} isRequire
 *
 * @return {boolean}
 */
const validateMix = function (mix, referenceSize, isRequire) {
    if (mix.block === 'form' && mix.elem === 'item' && mix.mods['indent-b'] && isRequire) {
        return ((findSize(mix.mods['indent-b']) - findSize(referenceSize)) === 1);
    }
    return !isRequire;
};