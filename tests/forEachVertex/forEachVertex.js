
const u = require("wlj-utilities");

const forEachVertex = require("../../library/forEachVertex.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let g = [[0,1],[1,2],[2,3]];

    let actual = [];
    forEachVertex(g, v => {
        actual.push(v);
    });
    u.assertIsEqualJson(actual, [0,1,1,2,2,3]);
});
