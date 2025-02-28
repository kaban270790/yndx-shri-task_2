const OBJ_START = "{";
const OBJ_END = "}";
const SIZES = ['xxxxs', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl'];
const ELEMENTS = {
    FOOTER: 'form__footer',
    HEADER: 'form__header',
    CONTENT: 'form__content',
    ITEM: 'form__item',
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
 * Считает номер строки на которой начинается блок
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
 * Считает сколько строк в строке(блоке)
 * @param {string} json
 * @return {number}
 */
const countLines = function (json) {
    return json.split("\n").length;
};

/**
 * Возвращает порядковый номер размера
 * @param {string} size
 * @return {number}
 */
const findSize = function (size) {
    return SIZES.indexOf(size);
};
/**
 * Парсер json с преобразованием объекта content в массив, для простоты работы,
 * т.к. периодически приходит массив, периодически как объект
 * @param string
 * @return Object
 */
const jsonParser = function (string) {
    return JSON.parse(string, (key, value) => {
        if (key === 'content' && !(value instanceof Array)) {
            value = [value];
        }
        return value;
    })
};

/**
 * Из блока получаем имя элемента
 * @param {{block: string, elem: string|undefined}} blockObj
 */
const factoryElement = function (blockObj) {
    let name = blockObj.block;
    if (blockObj.elem) {
        name += '__' + blockObj.elem;
    }
    return name;
};

/**
 * Получить значение модификатора
 * @param {{mods: Object}} blockObj
 * @param {string} name
 *
 * @return string|undefined
 */
const getModValue = function (blockObj, name) {
    if (blockObj.mods && blockObj.mods[name]) {
        return blockObj.mods[name];
    }
    return undefined;
};
/**
 * Проверяет указанный модификатор как размер относительно указанного с указанным шагом
 * @param {{mods: Object}} blockObj
 * @param {string} referenceSize
 * @param {string} modName
 * @param {number} step
 * @return {boolean}
 */
const checkSize = function (blockObj, referenceSize, modName, step) {
    let value = getModValue(blockObj, modName);
    return value && (findSize(value) - findSize(referenceSize)) === step;
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
    getModValue,
    checkSize,
};
