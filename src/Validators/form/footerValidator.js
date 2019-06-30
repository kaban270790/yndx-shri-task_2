const FormFooterSizeError = require('../../Errors/FormFooterSizeError.js');
const FormFooterVerticalSpaceError = require('../../Errors/FormFooterVerticalSpaceError.js');
const FormFooterHorizontalSpaceError = require('../../Errors/FormFooterHorizontalSpaceError.js');
const {getBlock, findSize, jsonParser, findStartBlock} = require('../tools.js');
const footerSpaceVerticalValidator = require('./footerSpaceVerticalValidator.js');
const footerSpaceHorizontalValidator = require('./footerSpaceHorizontalValidator.js');

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

    errors = errors.concat(validateSpace(blockStr, referenceSize, originalBlockStr, blockStartPosition));

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
            if (e instanceof FormFooterSizeError) {
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
        if ((findSize(blockObj.mods.size) - findSize(referenceSize)) !== 0) {
            throw new FormFooterSizeError(originalBlockStr, blockStartPosition);
        }
    } else {
        throw new FormFooterSizeError(originalBlockStr, blockStartPosition);
    }
};

const validateSpace = function (blockStr, referenceSize, originalBlockStr, blockStartPosition) {
    let errors = [];
    try {
        footerSpaceVerticalValidator(blockStr, referenceSize, originalBlockStr, blockStartPosition);
    } catch (e) {
        if (e instanceof FormFooterVerticalSpaceError) {
            errors.push(e.getError());
        } else {
            throw e;
        }
    }
    try {
        footerSpaceHorizontalValidator(blockStr, referenceSize, originalBlockStr, blockStartPosition);
    } catch (e) {
        if (e instanceof FormFooterHorizontalSpaceError) {
            errors.push(e.getError());
        } else {
            throw e;
        }
    }
    return errors;
};
