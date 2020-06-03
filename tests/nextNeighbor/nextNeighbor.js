
const u = require("wlj-utilities");

const nextNeighbor = require("../../library/nextNeighbor.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let g = [[1,2],[2,3],[2,4],[3,4]]
    u.assert(() => nextNeighbor(g, 1, 2) === 2);
    u.assert(() => nextNeighbor(g, 2, 1) === 3);
    u.assert(() => nextNeighbor(g, 2, 3) === 4);
    u.assert(() => nextNeighbor(g, 2, 4) === 1);
    u.assert(() => nextNeighbor(g, 3, 4) === 2);
    u.assert(() => nextNeighbor(g, 3, 2) === 4);
});
