const assert = require("assert");
const lint = require("./../../src/linter.js");
const {describe, it} = require("mocha");
describe("form footer", function () {
    describe("size texts", function () {
        it("valid", function () {
            let json = `{
    "block": "form",
    "content": [
        {
            "block": "form",
            "elem": "footer",
            "mix": [ { "block": "form", "elem": "item", "mods": { "space-v": "l" } } ],
            "content": [
                {
                    "block": "text",
                    "mods": {
                        "size": "l"
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
            "elem": "footer",
            "mix": [ { "block": "form", "elem": "item", "mods": { "space-v": "l" } } ],
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
                    "code": "FORM.FOOTER_TEXT_SIZE_IS_INVALID",
                    "error": "Все текстовые блоки в подвале формы (элемент footer) должны быть со значением модификатора size на 2 шага больше эталонного размера",
                    "location": {
                        "start": {"column": 17, "line": 9},
                        "end": {"column": 18, "line": 14}
                    }
                }
            ]);
        });
    });
    describe("space-v", function () {
        it("valid", function () {
            let json = `{
    "block": "form",
    "content": [
        {
            "block": "form",
            "elem": "footer",
            "mix": [ { "block": "form", "elem": "item", "mods": { "space-v": "l", "space-h": "xl" } } ]
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
            "elem": "footer",
            "mix": [ { "block": "form", "elem": "item", "mods": { "space-v": "s", "space-h": "xl" } } ]
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
                    "code": "FORM.FOOTER_VERTICAL_SPACE_IS_INVALID",
                    "error": "Вертикальный внутренний отступ подвала формы должен быть задан с помощью микса на него элемента формы item со значением модификатора space-v, равным эталонному размеру",
                    "location": {
                        "start": {"column": 9, "line": 4},
                        "end": {"column": 10, "line": 8}
                    }
                }
            ]);
        });
    });
    describe("space-h", function () {
        it("valid", function () {
            let json = `{
    "block": "form",
    "content": [
        {
            "block": "form",
            "elem": "footer",
            "mix": [ { "block": "form", "elem": "item", "mods": { "space-h": "xl" } } ]
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
            "elem": "footer",
            "mix": [ { "block": "form", "elem": "item", "mods": { "space-h": "s" } } ]
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
                    "code": "FORM.FOOTER_HORIZONTAL_SPACE_IS_INVALID",
                    "error": "Горизонтальный внутренний отступ должен быть на 1 шаг больше эталонного размера",
                    "location": {
                        "start": {"column": 9, "line": 4},
                        "end": {"column": 10, "line": 8}
                    }
                }
            ]);
        });
    });
});
