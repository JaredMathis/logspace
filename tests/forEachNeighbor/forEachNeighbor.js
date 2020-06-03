
const u = require("wlj-utilities");

const forEachNeighbor = require("../../library/forEachNeighbor.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let g = [[1,2],[2,3],[3,4]];

    let actual;
    actual = [];
    forEachNeighbor(g, 2, n => {
        actual.push(n);
    });
    
    u.assertIsEqualJson(() => actual, () => [1,3]);
});
