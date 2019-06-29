const assert = require("assert");
require("./../build/linter.js");
const {describe} = require("mocha");

describe("validation size modifier", function () {
    it("Multi-line", function () {
        let jsonString = `{
    "block": "form",
    "content": [
        {
            "block": "form",
            "elem": "label",
            "content": {
                "block": "text",
                "mods": {"size": "xl"}
            }
        },
        {
            "block": "input",
            "mods": {"size": "xxl"}
        }
    ]
}`;
        assert.deepStrictEqual(lint(
            jsonString
        ), [
            {
                "code": "FORM.INPUT_AND_LABEL_SIZES_SHOULD_BE_EQUAL",
                "error": "Подписи и поля в форме должны быть одного размера",
                "location": {
                    "start": {"column": 1, "line": 1},
                    "end": {"column": 2, "line": 17}
                }
            }
        ]);
    });
    it("Single-line", function () {
        let jsonString = `{"block": "form","content": [{"block": "form","elem": "label","content": {"block": "text","mods": {"size": "xl"}}},{"block": "input","mods": {"size": "xxl"}}]}`;
        assert.deepStrictEqual(lint(
            jsonString
        ), [
            {
                "code": "FORM.INPUT_AND_LABEL_SIZES_SHOULD_BE_EQUAL",
                "error": "Подписи и поля в форме должны быть одного размера",
                "location": {
                    "start": {"column": 1, "line": 1},
                    "end": {"column": 160, "line": 1}
                }
            }
        ]);
    });
    it("Valid", function () {
        assert.deepStrictEqual(lint(
            `{"block": "form","content": [{"block": "form","elem": "label","content": {"block": "text","mods": {"size": "xxl"}}},{"block": "input","mods": {"size": "xxl"}}]}`
        ), []);
    });
    it("Missing parameter mods or mods.size", function () {
        assert.deepStrictEqual(lint(
            `{"block": "form","content": [{"block": "form","elem": "label","content": {"block": "text","mods": {"size": "xxl"}}},{"block": "input"}]}`
        ), [
            {
                "code": "FORM.INPUT_AND_LABEL_SIZES_SHOULD_BE_EQUAL",
                "error": "Подписи и поля в форме должны быть одного размера",
                "location": {
                    "start": {"column": 1, "line": 1},
                    "end": {"column": 137, "line": 1}
                }
            }]);
    });
});
describe("validation spaces", function () {
    describe("horizontal", function () {
        it("valid", function () {
            let json = `{
                    "block": "form",
                    "content": {
                        "block": "form",
                        "elem": "content",
                        "content": { "block": "input", "mods": { "size": "l" } },
                        "mix": [{ "block": "form", "elem": "item", "mods": {  "space-h": "xl" } }]
                    }
                }`;
            assert.deepStrictEqual(lint(
                json
            ), []);
        });
        it("invalid", function () {
            let json = `{
    "block": "form",
    "content": {
        "block": "form",
        "elem": "content",
        "content": { "block": "input", "mods": { "size": "l" } },
        "mix": [{ "block": "form", "elem": "item", "mods": {  "space-h": "xxl" } }]
    }
}`;
            assert.deepStrictEqual(lint(
                json
            ), [
                {
                    "code": "FORM.CONTENT_HORIZONTAL_SPACE_IS_INVALID",
                    "error": "Горизонтальный внутренний отступ контентного элемента должен задаваться с помощью модификатора space-h элемента формы item на 1 шаг больше эталонного размера",
                    "location": {
                        "start": {"column": 16, "line": 3},
                        "end": {"column": 6, "line": 8}
                    }
                }
            ]);
        })
    });
    describe("vertical", function () {
        it("valid", function () {
            let json = `{
                "block": "form",
                "content": {
                    "block": "form",
                    "elem": "content",
                    "content": { "block": "input", "mods": { "size": "l" } },
                    "mix": [{ "block": "form", "elem": "item", "mods": {  "space-v": "xxl" } }]
                }
            }`;
            assert.deepStrictEqual(lint(json), []);
        });
        it("invalid", function () {
            let json = `{
    "block": "form",
    "content": {
        "block": "form",
        "elem": "content",
        "content": { "block": "input", "mods": { "size": "l" } },
        "mix": [{ "block": "form", "elem": "item", "mods": {  "space-v": "xl" } }]
    }
}`;
            assert.deepStrictEqual(lint(
                json
            ), [
                {
                    "code": "FORM.CONTENT_VERTICAL_SPACE_IS_INVALID",
                    "error": "Вертикальный внутренний отступ контентного элемента формы content должен задаваться с помощью микса на него элемента формы item со значением модификатора space-v на 2 шага больше эталонного размера",
                    "location": {
                        "start": {"column": 16, "line": 3},
                        "end": {"column": 6, "line": 8}
                    }
                }
            ]);
        })
    });
});
