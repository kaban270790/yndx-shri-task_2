const assert = require("assert");
const lint = require("./../src/linter.js");
const {describe, it} = require("mocha");

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
describe("validate indents", function () {
    it("valid", function () {
        let json = `{
    "block": "form",
    "content": {
        "block": "form",
        "elem": "content",
        "content": [
            {
                "block": "form",
                "elem":  "content-item",
                "mix": [{ "block": "form", "elem": "item", "mods": { "indent-b": "xl" } }],
                "content": { "block": "input", "mods": { "size": "l" } }
            },
            {
                "block": "form",
                "elem":  "content-item",
                "content": { "block": "input", "mods": { "size": "l" } }
            }
        ]
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
        "content": [
            {
                "block": "form",
                "elem":  "content-item",
                "mix": [{ "block": "form", "elem": "item", "mods": { "indent-b": "l" } }],
                "content": { "block": "input", "mods": { "size": "l" } }
            },
            {
                "block": "form",
                "elem":  "content-item",
                "content": { "block": "input", "mods": { "size": "l" } }
            }
        ]
    }
}`;
        assert.deepStrictEqual(lint(
            json
        ), [
            {
                "code": "FORM.CONTENT_ITEM_INDENT_IS_INVALID",
                "error": "Строки формы (в которые складываются лейбл и инпут) помечаются элементом формы content-item и должны отбиваться между собой с помощью модификатора нижнего отступа со значением модификатора indent-b элемента формы item на 1 шаг больше эталонного размера",
                "location": {
                    "start": {"column": 13, "line": 7},
                    "end": {"column": 14, "line": 12}
                }
            }
        ]);
    })
});
describe("validate headers", function () {
    it("valid", function () {
        let json = `{
    "block": "form",
    "content": [
        {
            "block": "form",
            "elem": "header",
            "content": [
                {
                    "block": "text",
                    "mods": {
                        "size": "xxl"
                    }
                }
            ]
        },
        {
            "block": "input",
            "mods": {
                "size": "l"
            }
        }
    ]
}`;
        assert.deepStrictEqual(lint(json), []);
    });
    it("invalid", function () {
        let json = `{
    "block": "form",
    "content": [
        {
            "block": "form",
            "elem": "header",
            "content": [
                {
                    "block": "text",
                    "mods": {
                        "size": "xl"
                    }
                }
            ]
        },
        {
            "block": "input",
            "mods": {
                "size": "l"
            }
        }
    ]
}`;
        assert.deepStrictEqual(lint(json), [
            {
                "code": "FORM.HEADER_TEXT_SIZE_IS_INVALID",
                "error": "Все текстовые блоки в заголовке формы (элемент header) должны быть со значением модификатора size на 2 шага больше эталонного размера",
                "location": {
                    "start": {"column": 17, "line": 8},
                    "end": {"column": 18, "line": 13}
                }
            }
        ]);
    });
});
