const assert = require("assert");
const lint = require("./../../src/linter.js");
const {describe, it} = require("mocha");

describe("position headers", function () {
    it("h1 h2 h3", function () {
        let json = `[
    {
        "block": "text",
        "mods": { "type": "h1" }
    },
    {
        "block": "text",
        "mods": { "type": "h2" }
    },
    {
        "block": "text",
        "mods": { "type": "h3" }
    }
]`;
        assert.deepStrictEqual(lint(json), []);
    });
    it("h2 h3", function () {
        let json = `[
    {
        "block": "text",
        "mods": { "type": "h2" }
    },
    {
        "block": "text",
        "mods": { "type": "h1" }
    }
]`;
        assert.deepStrictEqual(lint(json), [
            {
                "code": "TEXT.INVALID_H2_POSITION",
                "error": "Заголовок второго уровня (блок text с модификатором type h2) не может следовать перед заголовком первого уровня на одном или более глубоком уровне вложенности.",
                "location": {
                    "start": {"column": 5, "line": 2},
                    "end": {"column": 6, "line": 5}
                }
            }
        ]);
    });
    it("h3 h2", function () {
        let json = `[
    {
        "block": "text",
        "mods": { "type": "h3" }
    },
    {
        "block": "text",
        "mods": { "type": "h2" }
    }
]`;
        assert.deepStrictEqual(lint(json), [
            {
                "code": "TEXT.INVALID_H3_POSITION",
                "error": "Заголовок третьего уровня (блок text с модификатором type h3) не может следовать перед заголовком второго уровня на одном или более глубоком уровне вложенности",
                "location": {
                    "start": {"column": 5, "line": 2},
                    "end": {"column": 6, "line": 5}
                }
            }
        ]);
    });
});
