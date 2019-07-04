const assert = require("assert");
const lint = require("./../../../src/linter.js");
const {describe, it,} = require("mocha");

describe("form content more blocks", function () {

    it("test 1", function () {
        let json = `{
  "block": "payment",
  "content": [
    {
      "block": "form",
      "content": {
        "block": "form",
        "elem": "content",
        "mix": [{ "block": "form", "elem": "item", "mods": {  "space-v": "xxxl", "space-h": "xxl" } }],
        "content": [
          {
            "block": "form",
            "elem": "content-item",
            "mix": [
              {"block": "form","elem": "item","mods": {"indent-b": "xxl"}}
            ],
            "content": {"block": "input","mods": {"size": "xl"}}
          },
          {
            "block": "form",
            "elem": "content-item",
            "content": {"block": "input","mods": {"size": "xl"}}
          }
        ]
      }
    },
    {
          "block": "form",
          "content": {
            "block": "form",
            "elem": "content",
            "mix": [{ "block": "form", "elem": "item", "mods": {  "space-v": "xxl", "space-h": "xl" } }],
            "content": [
              {
                "block": "form",
                "elem": "content-item",
                "mix": [
                  {"block": "form","elem": "item","mods": {"indent-b": "xl"}}
                ],
                "content": {"block": "input","mods": {"size": "l"}}
              },
              {
                "block": "form",
                "elem": "content-item",
                "content": {"block": "input","mods": {"size": "l"}}
              }
            ]
          }
        }
  ]
}`;
        assert.deepStrictEqual(lint(
            json
        ), []);

    });

    it("test 2", function () {
        let json = `{
  "block": "payment",
  "content": [
    {
      "block": "form",
      "content": {
        "block": "form",
        "elem": "content",
        "mix": [{ "block": "form", "elem": "item", "mods": {  "space-v": "xxxl", "space-h": "xxl" } }],
        "content": [
          {
            "block": "form",
            "elem": "content-item",
            "mix": [
              {"block": "form","elem": "item","mods": {"indent-b": "xxl"}}
            ],
            "content": {"block": "input","mods": {"size": "xl"}}
          },
          {
            "block": "form",
            "elem": "content-item",
            "content": {"block": "input","mods": {"size": "xl"}}
          }
        ]
      }
    },
    {
      "block": "form",
      "content": {
        "block": "form",
        "elem": "content",
        "mix": [{ "block": "form", "elem": "item", "mods": {  "space-v": "xl", "space-h": "l" } }],
        "content": [
          {
            "block": "form",
            "elem": "content-item",
            "mix": [
              {"block": "form","elem": "item","mods": {"indent-b": "l"}}
            ],
            "content": {"block": "input","mods": {"size": "l"}}
          },
          {
            "block": "form",
            "elem": "content-item",
            "content": {"block": "input","mods": {"size": "xl"}}
          }
        ]
      }
    }
  ]
}`;
        assert.deepStrictEqual(lint(
            json
        ), [
            {
                "code": "FORM.INPUT_AND_LABEL_SIZES_SHOULD_BE_EQUAL",
                "error": "Подписи и поля в форме должны быть одного размера",
                "location": {
                    "start": {"column": 5, "line": 27},
                    "end": {"column": 6, "line": 49}
                }
            },
            {
                "code": "FORM.CONTENT_HORIZONTAL_SPACE_IS_INVALID",
                "error": "Горизонтальный внутренний отступ контентного элемента должен задаваться с помощью модификатора space-h элемента формы item на 1 шаг больше эталонного размера",
                "location": {
                    "start": {"column": 18, "line": 29},
                    "end": {"column": 8, "line": 48}
                }
            },
            {
                "code": "FORM.CONTENT_VERTICAL_SPACE_IS_INVALID",
                "error": "Вертикальный внутренний отступ контентного элемента формы content должен задаваться с помощью микса на него элемента формы item со значением модификатора space-v на 2 шага больше эталонного размера",
                "location": {
                    "start": {"column": 18, "line": 29},
                    "end": {"column": 8, "line": 48}
                }
            },
            {
                "code": "FORM.CONTENT_ITEM_INDENT_IS_INVALID",
                "error": "Строки формы (в которые складываются лейбл и инпут) помечаются элементом формы content-item и должны отбиваться между собой с помощью модификатора нижнего отступа со значением модификатора indent-b элемента формы item на 1 шаг больше эталонного размера",
                "location": {
                    "start": {"column": 11, "line": 34},
                    "end": {"column": 12, "line": 41}
                }
            }
        ]);

    });
});
