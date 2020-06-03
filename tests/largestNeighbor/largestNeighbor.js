
const u = require("wlj-utilities");

const largestNeighbor = require("../../library/largestNeighbor.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let g;

    g = [[1,2],[2,3],[3,4]]
    u.assertIsEqualJson(() => largestNeighbor(g, 1), 2);
    u.assertIsEqualJson(() => largestNeighbor(g, 2), 3);
    u.assertIsEqualJson(() => largestNeighbor(g, 3), 4);
});
