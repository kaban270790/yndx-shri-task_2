const assert = require("assert");
const findReferenceSize = require("../src/Validators/getReferenceSize.js");
it('Calculate lines', function () {
    const json = `{
        "block": "form",
        "content": [
            {
                "block": "form",
                "elem": "label",
                "content": {
                    "block": "text",
                    "mods": { "size": "xl" }
                }
            },
            {
                "block": "input",
                "mods": { "size": "xxl" }
            }
        ]
    }`;
    assert.strictEqual(findReferenceSize(json), "xl");
});
