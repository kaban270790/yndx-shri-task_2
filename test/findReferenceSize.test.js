const assert = require("assert");
const findReferenceSize = require("../src/Validators/getReferenceSize.js");
const {it} = require("mocha");
it('get reference size xl', function () {
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
it('get reference size l', function () {
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
    assert.strictEqual(findReferenceSize(json), "l");
});
