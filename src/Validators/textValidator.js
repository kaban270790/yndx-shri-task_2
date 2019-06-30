const LinterError = require('../Errors/LinterError.js');
const {findStartBlock, getBlock, jsonParser, factoryElement, ELEMENTS, getModValue} = require('./tools.js');
const unitH1Validator = require('./text/unitH1Validator.js');
/**
 * @param {string} originalBlockStr
 * @return {Array|{code: string, message: string, locality: {start: {line: number, column: number}, end: {line: number, column: number}}}[]}
 */
module.exports = function (originalBlockStr) {
    let regExpForm = /"block"(\s){0,}:(\s){0,}"text"/g;
    let errors = [];
    errors = errors.concat(unitH1Validator(originalBlockStr));
    // while (true) {
    //     let regExpFormResult = regExpForm.exec(originalBlockStr);
    //     if (!regExpFormResult) {
    //         break;
    //     }
    //     // let startPositionBlock = findStartBlock(originalBlockStr, regExpFormResult.index);
    //     // errors = errors.concat(validate(originalBlockStr, startPositionBlock));
    // }
    return errors;
};
