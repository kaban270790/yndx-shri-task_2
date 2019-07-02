const LinterError = require('../Errors/LinterError.js');
const ReferenceSizeError = require('../Errors/ReferenceSizeError.js');
const FormSizeError = require('../Errors/FormSizeError.js');
const {findStartBlock, getBlock, jsonParser, factoryElement, ELEMENTS} = require('./tools.js');
const getReferenceSize = require('./getReferenceSize.js');
const sizeValidator = require('./form/sizeValidator.js');
const contentValidator = require('./form/contentValidator.js');
const headerValidator = require('./form/headerValidator.js');
const footerValidator = require('./form/footerValidator.js');

/**
 * @param {string} originalBlockStr
 * @return {Array|{code: string, message: string, locality: {start: {line: number, column: number}, end: {line: number, column: number}}}[]}
 */
module.exports = function (originalBlockStr) {
    let regExpForm = /"block"(\s){0,}:(\s){0,}"form"/g;
    let errors = [];
    while (true) {
        let regExpFormResult = regExpForm.exec(originalBlockStr);
        if (!regExpFormResult) {
            break;
        }
        let startPositionBlock = findStartBlock(originalBlockStr, regExpFormResult.index);
        errors = errors.concat(validate(originalBlockStr, startPositionBlock));
    }
    return errors;
};

/**
 *
 * @param {string} originalBlockStr
 * @param {number} startPositionFormBlock
 * @return {[{code:string,message:string,locality:{start:{line:number,column:number},end:{line:number,column:number}}}]}
 */
const validate = function (originalBlockStr, startPositionFormBlock) {
    let errors = [];
    let formBlockStr = getBlock(originalBlockStr, startPositionFormBlock);
    let referenceSize;
    let blockObj = jsonParser(formBlockStr);
    if (blockObj.elem) {
        return errors;
    }
    try {
        referenceSize = getReferenceSize(originalBlockStr, startPositionFormBlock);
        if (!referenceSize) {
            return errors;
        }
        sizeValidator(formBlockStr, referenceSize, originalBlockStr, startPositionFormBlock);
    } catch (e) {
        if (e instanceof LinterError) {
            errors.push(e.getError());
        } else {
            throw e;
        }
    }

    let regExpForm = /"elem"(\s){0,}:(\s){0,}"(header|content|footer)"/g;
    while (true) {
        let regExpFormResult = regExpForm.exec(formBlockStr);
        if (!regExpFormResult) {
            break;
        }
        let startPositionBlock = startPositionFormBlock + findStartBlock(formBlockStr, regExpFormResult.index);
        let blockStr = getBlock(originalBlockStr, startPositionBlock);
        let blockObj = jsonParser(blockStr);
        switch (factoryElement(blockObj)) {
            case ELEMENTS.CONTENT:
                errors = errors.concat(contentValidator(blockStr, referenceSize, originalBlockStr, startPositionBlock));
                break;
            case ELEMENTS.HEADER:
                errors = errors.concat(headerValidator(blockStr, referenceSize, originalBlockStr, startPositionBlock));
                break;
            case ELEMENTS.FOOTER:
                errors = errors.concat(footerValidator(blockStr, referenceSize, originalBlockStr, startPositionBlock));
                break;
        }
    }
    return errors;
};
