const assert = require("assert");
const lint = require("./../../../src/linter.js");
const {describe, it} = require("mocha");

describe("form content space", function () {
    describe("horizontal", function () {
        it("valid", function () {
            let json = `{
                    "block": "form",
                    "content": {
                        "block": "form",
                        "elem": "content",
                        "content": { "block": "input", "mods": { "size": "l" } },
                        "mix": [{ "block": "form", "elem": "item", "mods": {  "space-h": "xl", "space-v": "xxl" } }]
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
        "mix": [{ "block": "form", "elem": "item", "mods": {  "space-h": "xxl", "space-v": "xxl" } }]
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
        });
    });
    describe("vertical", function () {
        it("valid", function () {
            let json = `{
                "block": "form",
                "content": {
                    "block": "form",
                    "elem": "content",
                    "content": { "block": "input", "mods": { "size": "l" } },
                    "mix": [{ "block": "form", "elem": "item", "mods": {  "space-v": "xxl", "space-h": "xl" } }]
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
        "mix": [{ "block": "form", "elem": "item", "mods": {  "space-v": "xl", "space-h": "xl" } }]
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
        });
    });

    it("missing mods value", function () {
        let json = `{
    "block": "form",
    "content": {
        "block": "form",
        "elem": "content",
        "content": { "block": "input", "mods": { "size": "l" } },
        "mix": [{ "block": "form", "elem": "item", "mods": {} }]
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
            },
            {
                "code": "FORM.CONTENT_VERTICAL_SPACE_IS_INVALID",
                "error": "Вертикальный внутренний отступ контентного элемента формы content должен задаваться с помощью микса на него элемента формы item со значением модификатора space-v на 2 шага больше эталонного размера",
                "location": {
                    "start": {"column": 16, "line": 3},
                    "end": {"column": 6, "line": 8}
                }
            }
        ]);
    });
    it("no mix elements", function () {
        let json = `{
    "block": "form",
    "content": {
        "block": "form",
        "elem": "content",
        "content": { "block": "input", "mods": { "size": "l" } }
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
                    "end": {"column": 6, "line": 7}
                }
            },
            {
                "code": "FORM.CONTENT_VERTICAL_SPACE_IS_INVALID",
                "error": "Вертикальный внутренний отступ контентного элемента формы content должен задаваться с помощью микса на него элемента формы item со значением модификатора space-v на 2 шага больше эталонного размера",
                "location": {
                    "start": {"column": 16, "line": 3},
                    "end": {"column": 6, "line": 7}
                }
            }
        ]);
    });
});
