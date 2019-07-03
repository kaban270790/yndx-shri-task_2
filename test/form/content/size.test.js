const assert = require("assert");
const lint = require("./../../../src/linter.js");
const {describe, it} = require("mocha");

describe("form content size", function () {
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
        it("Missing parameter mods or mods.size 2", function () {
            assert.deepStrictEqual(lint(
                `{"block": "form","content": [{"block": "form","elem": "label","content": {"block": "text","mods": {}}},{"block": "input"}]}`
            ), [
                {
                    "code": "FORM.INPUT_AND_LABEL_SIZES_SHOULD_BE_EQUAL",
                    "error": "Подписи и поля в форме должны быть одного размера",
                    "location": {
                        "start": {"column": 1, "line": 1},
                        "end": {"column": 124, "line": 1}
                    }
                }
            ]);
        });
        describe("Multi-form", function () {
            it("Valid", function () {
                assert.deepStrictEqual(lint(
                    `{
    "block":"payment",
    "content":[
        {"block": "form","content": [{"block": "form","elem": "label","content": {"block": "text","mods": {"size": "xxl"}}},{"block": "input","mods": {"size": "xxl"}}]},
        {"block": "form","content": [{"block": "form","elem": "label","content": {"block": "text","mods": {"size": "xxl"}}},{"block": "input","mods": {"size": "xxl"}}]}
    ]
}`
                ), []);
            });
            it("error size", function () {
                assert.deepStrictEqual(lint(
                    `{
    "block":"payment",
    "content":[
        {"block": "form","content": [{"block": "form","elem": "label","content": {"block": "text","mods": {"size": "xxl"}}},{"block": "input","mods": {"size": "xxl"}}]},
        {"block": "form","content": [{"block": "form","elem": "label","content": {"block": "text","mods": {"size": "xxl"}}},{"block": "input","mods": {"size": "xl"}}]}
    ]
}`
                ), [
                    {
                        "code": "FORM.INPUT_AND_LABEL_SIZES_SHOULD_BE_EQUAL",
                        "error": "Подписи и поля в форме должны быть одного размера",
                        "location": {
                            "start": {"column": 9, "line": 5},
                            "end": {"column": 168, "line": 5}
                        }
                    }
                ]);
            });
            it("two errors in size", function () {
                assert.deepStrictEqual(lint(
                    `{
    "block":"payment",
    "content":[
        {"block": "form","content": [{"block": "form","elem": "label","content": {"block": "text","mods": {"size": "xxl"}}},{"block": "input","mods": {"size": "xxxl"}}]},
        {"block": "form","content": [{"block": "form","elem": "label","content": {"block": "text","mods": {"size": "xxl"}}},{"block": "input","mods": {"size": "xl"}}]}
    ]
}`
                ), [
                    {
                        "code": "FORM.INPUT_AND_LABEL_SIZES_SHOULD_BE_EQUAL",
                        "error": "Подписи и поля в форме должны быть одного размера",
                        "location": {
                            "start": {"column": 9, "line": 4},
                            "end": {"column": 170, "line": 4}
                        }
                    }, {
                        "code": "FORM.INPUT_AND_LABEL_SIZES_SHOULD_BE_EQUAL",
                        "error": "Подписи и поля в форме должны быть одного размера",
                        "location": {
                            "start": {"column": 9, "line": 5},
                            "end": {"column": 168, "line": 5}
                        }
                    }
                ]);
            });
        });
    });
