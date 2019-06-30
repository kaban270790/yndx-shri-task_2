const assert = require("assert");
const lint = require("./../../src/linter.js");
const {describe, it} = require("mocha");

describe("text several h1 ", function () {
    it("valid", function () {
        let json = `[
    {
        "block": "text",
        "mods": { "type": "h1" }
    }
]`;
        assert.deepStrictEqual(lint(json), []);
    });
    it("invalid", function () {
        let json = `[
    {
        "block": "text",
        "mods": { "type": "h1" }
    },

    {
        "block": "text",
        "mods": { "type": "h1" }
    }
]`;
        assert.deepStrictEqual(lint(json), [
            {
                "code": "TEXT.SEVERAL_H1",
                "error": "Заголовок первого уровня (блок text с модификатором type h1) должен быть один на странице",
                "location": {
                    "start": {"column": 5, "line": 7},
                    "end": {"column": 6, "line": 10}
                }
            }
        ]);
    });
});
