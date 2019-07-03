// const assert = require("assert");
// const lint = require("./../../../src/linter.js");
// const {describe, it, } = require("mocha");
//
// describe("form content more blocks", function () {
//
//     it("test 1", function () {
//         let json = `{
//   "block": "payment",
//   "content": [
//     {
//       "block": "form",
//       "content": {
//         "block": "form",
//         "elem": "content",
//         "content": [
//           {
//             "block": "form",
//             "elem": "content-item",
//             "mix": [
//               {"block": "form","elem": "item","mods": {"indent-b": "xl"}}
//             ],
//             "content": {"block": "input","mods": {"size": "xxl"}}
//           },
//           {
//             "block": "form",
//             "elem": "content-item",
//             "mix": [
//               {"block": "form","elem": "item","mods": {"indent-b": "xl"}}
//             ],
//             "content": {"block": "input","mods": {"size": "xl"}}
//           },
//           {
//             "block": "form",
//             "elem": "content-item",
//             "content": {"block": "input","mods": {"size": "xl"}}
//           }
//         ]
//       }
//     }
//   ]
// }`;
//         assert.deepStrictEqual(lint(
//             json
//         ), [
//             {
//                 "code": "FORM.INPUT_AND_LABEL_SIZES_SHOULD_BE_EQUAL",
//                 "error": "",
//                 "location": {
//                     "start": {"column": 5, "line": 4},
//                     "end": {"column": 6, "line": 33}
//                 }
//             },
//             {
//                 "code": "FORM.CONTENT_ITEM_INDENT_IS_INVALID",
//                 "error": "",
//                 "location": {
//                     "start": {"column": 11, "line": 10},
//                     "end": {"column": 12, "line": 17}
//                 }
//             },
//             {
//                 "code": "FORM.CONTENT_ITEM_INDENT_IS_INVALID",
//                 "error": "",
//                 "location": {
//                     "start": {"column": 11, "line": 18},
//                     "end": {"column": 12, "line": 25}
//                 }
//             }
//         ]);
//
//     });
// });
