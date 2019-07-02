const assert = require("assert");
const findReferenceSize = require("../src/Validators/getReferenceSize.js");
const {it} = require("mocha");
const FormSizeError = require("../src/Errors/FormSizeError.js");
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
    assert.strictEqual(findReferenceSize(json, 0), "xl");
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
    assert.strictEqual(findReferenceSize(json, 0), "l");
});
it('no size specified', function () {
    let json = `{
    "block": "form",
    "content": [
        {
            "block": "form",
            "elem": "header",
            "content": [
                {
                    "block": "text",
                    "mods": {}
                }
            ]
        },
        {
            "block": "input"
        }
    ]
}`;
    assert.throws(() => findReferenceSize(json, 0), FormSizeError);
});
it('no blocks to determine size', function () {
    let json = `{
    "block": "form",
    "content": [
        {
            "block": "image",
            "mods": {
                "size": "l"
            }
        }
    ]
}`;
    assert.strictEqual(findReferenceSize(json, 0), null);
});
