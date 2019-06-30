const VALIDATORS = [
    require('./Validators/formValidator.js'),
    require('./Validators/textValidator.js'),
];
/**
 * @param {string} obj
 * @return {(function(string): (Array|{code: string, message: string, locality: {start: {line: number, column: number}, end: {line: number, column: number}}}[]))|*|Array}
 */
module.exports = function (obj) {
    return VALIDATORS.reduce((errors, validator) => {
        return errors.concat(validator(obj))
    }, [])
};
