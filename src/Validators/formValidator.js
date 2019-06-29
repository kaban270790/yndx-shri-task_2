const LinterError = require('../Errors/LinterError.js');
const {findStartBlock, getBlock, jsonParser} = require('./tools.js');
const getReferenceSize = require('./getReferenceSize.js');
const sizeValidator = require('./form/sizeValidator.js');
const contentValidator = require('./form/contentValidator.js');

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
 * @param {number} startPositionBlock
 * @return {[{code:string,message:string,locality:{start:{line:number,column:number},end:{line:number,column:number}}}]}
 */
const validate = function (originalBlockStr, startPositionBlock) {
    let errors = [];
    let blockStr = getBlock(originalBlockStr, startPositionBlock);
    let referenceSize = getReferenceSize(blockStr);
    if (!referenceSize) {
        return errors;
    }
    try {
        sizeValidator(blockStr, referenceSize, originalBlockStr, startPositionBlock);
    } catch (e) {
        if (e instanceof LinterError) {
            errors.push(e.getError());
        } else {
            throw e;
        }
    }
    let blockObj = jsonParser(blockStr);
    if (blockObj.elem && blockObj.elem === 'content') {
        errors = errors.concat(contentValidator(blockStr, referenceSize, originalBlockStr, startPositionBlock));
    }
    return errors;
};
