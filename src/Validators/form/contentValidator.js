const LinterError = require('../../Errors/LinterError.js');
const spaceHorizontalValidator = require('./contentSpaceHorizontalValidator.js');
const spaceVerticalValidator = require('./contentSpaceVerticalValidator.js');
const contentItemsValidator = require('./contentItemsValidator.js');

/**
 * @param {string} blockStr
 * @param {string} referenceSize
 * @param {string} originalBlockStr
 * @param {number} startPositionBlock
 * @return {[{code:string,message:string,locality:{start:{line:number,column:number},end:{line:number,column:number}}}]}
 */
module.exports = function (blockStr, referenceSize, originalBlockStr, startPositionBlock) {
    let errors = [];
    try {
        spaceHorizontalValidator(blockStr, referenceSize, originalBlockStr, startPositionBlock);
    } catch (e) {
        if (e instanceof LinterError) {
            errors.push(e.getError());
        } else {
            throw e;
        }
    }
    try {
        spaceVerticalValidator(blockStr, referenceSize, originalBlockStr, startPositionBlock);
    } catch (e) {
        if (e instanceof LinterError) {
            errors.push(e.getError());
        } else {
            throw e;
        }
    }
    errors = errors.concat(contentItemsValidator(blockStr, referenceSize, originalBlockStr, startPositionBlock));
    return errors;
};
