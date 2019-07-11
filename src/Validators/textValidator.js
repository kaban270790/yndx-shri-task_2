const unitH1Validator = require('./text/unitH1Validator.js');
const unitPositionValidator = require('./text/positionValidator.js');
/**
 * @param {string} originalBlockStr
 * @return {Array|{code: string, message: string, locality: {start: {line: number, column: number}, end: {line: number, column: number}}}[]}
 */
module.exports = function (originalBlockStr) {
    let errors = [];
    errors = errors.concat(unitH1Validator(originalBlockStr), unitPositionValidator(originalBlockStr));
    return errors;
};
