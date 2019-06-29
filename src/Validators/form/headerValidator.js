const FormHeaderSizeError = require('../../Errors/FormHeaderSizeError.js');
const FormHeaderVerticalSpaceError = require('../../Errors/FormHeaderVerticalSpaceError.js');
const {getBlock, findSize, jsonParser, findStartBlock} = require('../tools.js');
const headerSpaceVerticalValidator = require('./headerSpaceVerticalValidator.js');

/**
 * @param {string} blockStr
 * @param {string} referenceSize
 * @param {string} originalBlockStr
 * @param {number} blockStartPosition
 *
 * @throws FormSizeError
 */
module.exports = function (blockStr, referenceSize, originalBlockStr, blockStartPosition) {
    let errors = [];
    try {
        headerSpaceVerticalValidator(blockStr, referenceSize, originalBlockStr, blockStartPosition);
    } catch (e) {
        if (e instanceof FormHeaderVerticalSpaceError) {
            errors.push(e.getError());
        } else {
            throw e;
        }
    }
    let regExpForm = /"block"(\s){0,}:(\s){0,}"text"/g;
    let positionContentItems = [];
    while (true) {
        let regExpResult = regExpForm.exec(blockStr);
        if (!regExpResult) {
            break;
        }
        positionContentItems.push(blockStartPosition + findStartBlock(blockStr, regExpResult.index));
    }
    positionContentItems.forEach(function (position) {
        let block = getBlock(originalBlockStr, position);
        try {
            validate(jsonParser(block), referenceSize, originalBlockStr, position)
        } catch (e) {
            if (e instanceof FormHeaderSizeError) {
                errors.push(e.getError());
            } else {
                throw e;
            }
        }
    });
    return errors;
};
/**
 * @param {{block: string, elem: string|undefined, content: Array|undefined, mods: Object|undefined}} blockObj
 * @param {string} referenceSize
 * @param {string} originalBlockStr
 * @param {number} blockStartPosition
 *
 * @throws FormContentItemIndentError
 */
const validate = function (blockObj, referenceSize, originalBlockStr, blockStartPosition) {
    if (blockObj.mods && blockObj.mods.size) {
        if ((findSize(blockObj.mods.size) - findSize(referenceSize)) !== 2) {
            throw new FormHeaderSizeError(originalBlockStr, blockStartPosition);
        }
    } else {
        throw new FormHeaderSizeError(originalBlockStr, blockStartPosition);
    }
};
