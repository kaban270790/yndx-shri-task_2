const VALIDATORS = [
    require('./Validators/formValidator.js'),
    require('./Validators/textValidator.js'),
];
/**
 * @param {string} obj
 * @return {{code: string, error: string, location: {start: {line: number, column: number}, end: {line: number, column: number}}}[]}
 */
module.exports = function (obj) {
    return VALIDATORS.reduce((errors, validator) => {
        return errors.concat(validator(obj))
    }, [])
};
