const OBJ_START = "{";
const OBJ_END = "}";
const SIZES = ['xxxxs', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl'];
const ELEMENTS = {
    HEADER: 'form__header',
    CONTENT: 'form__content',
    LABEL: 'form__label',
    INPUT: 'input',
    BUTTON: 'button',
    TEXT: 'text',
};
const FORM_ELEMENTS = [ELEMENTS.LABEL, ELEMENTS.INPUT, ELEMENTS.BUTTON];

/**
 * Считает накой по счету символ с начала строки
 * @param {string} obj
 * @param {number} position
 * @return {number}
 */
const countColumn = function (obj, position) {
    return obj.substring(0, position).split("\n").pop().length + 1; //поправка что бы учитывался символ на указанной позиции
};

/**
 * Находит начало блока относительно указанного символа
 * @param {string} json
 * @param {number} position
 * @return {number}
 */
const findStartBlock = function (json, position) {
    let substr = json.substring(0, position);
    return substr.lastIndexOf(OBJ_START);
};

/**
 * Считает на какой строке указанный символ
 * @param {string} json
 * @param {number} position
 * @return {number}
 */
const findLineStart = function (json, position) {
    return countLines(json.substring(0, findStartBlock(json, position)));
};

/**
 * Получить весь блок с указанного символа
 * @param {string} json
 * @param {number} position
 * @return {string}
 */
const getBlock = function (json, position) {
    let substr = json.substring(position);
    let cntObjStart = 0;
    for (let symbolIndex = 1, length = substr.length; symbolIndex < length; symbolIndex++) {
        let symbol = substr[symbolIndex];
        if (symbol === OBJ_START) {
            cntObjStart++;
        } else if (symbol === OBJ_END) {
            if (cntObjStart === 0) {
                substr = substr.substring(0, symbolIndex + 1);
                break;
            }
            cntObjStart--;
        }
    }
    return substr;
};

/**
 * Считает сколько строк в строке
 * @param {string} json
 * @return {number}
 */
const countLines = function (json) {
    return json.split("\n").length;
};

/**
 * Считает сколько строк в строке
 * @param {string} size
 * @return {number}
 */
const findSize = function (size) {
    return SIZES.indexOf(size);
};
/**
 * @param string
 * @return Object
 */
const jsonParser = function (string) {
    return JSON.parse(string, (key, value) => {
        if (key === 'content') {
            if (value instanceof Array) {
            } else {
                value = [value];
            }
        }
        return value;
    })
};

/**
 * @param {{block: string, elem: string|undefined}} blockObj
 */
const factoryElement = function (blockObj) {
    let name = blockObj.block;
    if (blockObj.elem) {
        name += '__' + blockObj.elem;
    }
    return name;
};

module.exports = {
    OBJ_START,
    OBJ_END,
    SIZES,
    FORM_ELEMENTS,
    ELEMENTS: ELEMENTS,
    countColumn,
    findStartBlock,
    findLineStart,
    getBlock,
    countLines,
    findSize,
    jsonParser,
    factoryElement,
};
