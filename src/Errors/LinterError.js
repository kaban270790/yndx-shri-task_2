const {getBlock, findLineStart, countLines, countColumn} = require('../Validators/tools.js');

class LinterError extends Error {
    /**
     * @param {string} obj
     * @param {number} positionStart
     * @param {string} code
     * @param {string} message
     */
    constructor(obj, positionStart, code, message) {
        super();
        let block = getBlock(obj, positionStart);
        let startLine = countLines(obj.substring(0, positionStart));
        let startColumn = countColumn(obj, positionStart);
        let endLine = startLine + countLines(block) - 1;//-1 потому что не учитываем 1-ю строку
        let endColumn = countColumn(obj, (positionStart + block.length));
        this.startLine = startLine;
        this.startColumn = startColumn;
        this.endLine = endLine;
        this.endColumn = endColumn;
        this.code = code;
        this.message = message;
    }

    /**
     * @return {{code: string, location: {start: {line: number, column: number}, end: {line: number, column: number}}, error: string}}
     */
    getError() {
        return {
            code: this.code,
            error: this.message,
            location: {
                start: {line: this.startLine, column: this.startColumn},
                end: {line: this.endLine, column: this.endColumn}
            }
        };
    }
}

module.exports = LinterError;