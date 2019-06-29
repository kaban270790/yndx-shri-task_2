const {FORM_ELEMENTS, ELEMENTS, factoryElement, jsonParser} = require('./tools.js');

/**
 * @param {string} blockStr
 * @return {string|null}
 */
module.exports = function (blockStr) {
    return find(jsonParser(blockStr));//todo в идеале бы кидать ошибку если размер не найден в форме, а элементы присутствуют
};
/**
 * @param {{block: string, content: Array|undefined, mods: Object|undefined}} blockObj
 * @return {string|null}
 */
const find = function (blockObj) {
    let size = null;
    if (blockObj.content) {
        for (let i = 0, l = blockObj.content.length; i < l; i++) {
            let size = find(blockObj.content[i]);
            if (size) {
                return size;
            }
        }
    }
    if (FORM_ELEMENTS.indexOf(factoryElement(blockObj)) !== -1) {
        size = getSize(blockObj);
    }
    return size;
};
/**
 * @param {{block: string, elem: string|undefined, content: Array, mods:Object}} blockObj
 * @return {string|null}
 */
const getSize = function (blockObj) {
    let size = null;
    if (factoryElement(blockObj) === ELEMENTS.LABEL) {
        for (let i = 0, l = blockObj.content.length; i < l; i++) {
            if (blockObj.content[i].block === ELEMENTS.TEXT) {
                size = getSize(blockObj.content[i]);
                if (size) {
                    break;
                }
            }
        }
    } else if (blockObj.mods && blockObj.mods.size) {
        size = blockObj.mods.size
    }
    return size;
};
