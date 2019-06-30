const TextSeveralH1Error = require('../../Errors/TextSeveralH1Error.js');
const {findStartBlock, getBlock, getModValue, jsonParser} = require('../tools.js');

/**
 * @param {string} originalBlockStr
 * @return {Array|{code: string, message: string, locality: {start: {line: number, column: number}, end: {line: number, column: number}}}[]}
 */
module.exports = function (originalBlockStr) {
    let regExpForm = /"block"(\s){0,}:(\s){0,}"text"/g;
    let errors = [];
    let countH1 = 0;
    while (true) {
        let regExpFormResult = regExpForm.exec(originalBlockStr);
        if (!regExpFormResult) {
            break;
        }
        let startPositionBlock = findStartBlock(originalBlockStr, regExpFormResult.index);

        try {
            let blockObj = jsonParser(getBlock(originalBlockStr, startPositionBlock));
            if (getModValue(blockObj, 'type') === 'h1') {
                if (countH1 >= 1) {
                    throw new TextSeveralH1Error(originalBlockStr, startPositionBlock);
                }
                countH1++;
            }
        } catch (e) {
            if (e instanceof TextSeveralH1Error) {
                errors.push(e.getError());
            } else {
                throw e;
            }
        }
    }
    return errors;
};
