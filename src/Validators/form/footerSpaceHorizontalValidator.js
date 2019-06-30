const FormFooterHorizontalSpaceError = require('../../Errors/FormFooterHorizontalSpaceError.js');
const {findSize, jsonParser} = require('../tools.js');

/**
 * @param {string} blockStr
 * @param {string} referenceSize
 * @param {string} originalBlockStr
 * @param {number} blockStartPosition
 *
 * @throws FormFooterHorizontalSpaceError
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
 * @throws FormFooterHorizontalSpaceError
 */
const validate = function (blockObj, referenceSize, originalBlockStr, blockStartPosition) {
    if (blockObj.mix) {
        blockObj.mix.forEach((mix) => {
            if (!validateMix(mix, referenceSize)) {
                throw new FormFooterHorizontalSpaceError(originalBlockStr, blockStartPosition);
            }
        });
    } else {
        throw new FormFooterHorizontalSpaceError(originalBlockStr, blockStartPosition);
    }
};

/**
 * @param {{block: string, elem: string|undefined, content: Array|undefined, mods: Object|undefined}} mix
 * @param {string} referenceSize
 *
 */
const validateMix = function (mix, referenceSize) {
    if (mix.block === 'form' && mix.elem === 'item' && mix.mods['space-h']) {
        return (findSize(mix.mods['space-h']) - findSize(referenceSize)) === 1;
    }
    return true;
};
