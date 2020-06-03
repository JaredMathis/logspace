
const u = require("wlj-utilities");

const forEachEdge = require("../../library/forEachEdge.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let g = [[0,1],[1,2],[2,3]];

    let result = [];
    forEachEdge(g, e => {
        result.push(e);
    });
    u.assertIsEqualJson(g, result);
});
