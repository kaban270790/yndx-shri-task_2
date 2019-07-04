const TextH2PositionError = require('../../Errors/TextH2PositionError.js');
const TextH3PositionError = require('../../Errors/TextH3PositionError.js');
const TextError = require('../../Errors/TextError.js');
const {findStartBlock, getBlock, getModValue, jsonParser} = require('../tools.js');

const HEADER_SIZES = ['h1', 'h2', 'h3',];

/**
 * @param {string} originalBlockStr
 * @return {Array|{code: string, message: string, locality: {start: {line: number, column: number}, end: {line: number, column: number}}}[]}
 */
module.exports = function (originalBlockStr) {
    let regExpForm = /"block"(\s){0,}:(\s){0,}"text"/g;
    let errors = [];
    let prevHeaders = [];
    while (true) {
        let regExpFormResult = regExpForm.exec(originalBlockStr);
        if (!regExpFormResult) {
            break;
        }
        let startPositionBlock = findStartBlock(originalBlockStr, regExpFormResult.index);

        let blockObj = jsonParser(getBlock(originalBlockStr, startPositionBlock));
        let modValue = getModValue(blockObj, 'type');
        if (modValue) {
            let headerSize = HEADER_SIZES.indexOf(modValue);
            if (headerSize !== -1) {
                prevHeaders.forEach(function (header) {
                    try {
                        validateHeader(header, originalBlockStr, headerSize);
                    } catch (e) {
                        if (e instanceof TextError) {
                            errors.push(e.getError());
                        } else {
                            throw e;
                        }
                    }
                });
                prevHeaders.push({
                    position: startPositionBlock,
                    size: headerSize
                });
            }
        }
    }
    return errors;
};

/**
 * @param {{position:number, size: number}}header
 * @param {string} originalBlockStr
 * @param {number} currentHeaderSize
 */
const validateHeader = function (header, originalBlockStr, currentHeaderSize) {
    if (header.size > currentHeaderSize) {
        switch (HEADER_SIZES[header.size]) {
            case 'h2':
                throw new TextH2PositionError(originalBlockStr, header.position);
            case 'h3':
                throw new TextH3PositionError(originalBlockStr, header.position);
        }
    }
};