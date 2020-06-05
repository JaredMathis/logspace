
const u = require("wlj-utilities");

const isHeavyEdge = require("../../library/isHeavyEdge.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    u.assert(() => !isHeavyEdge([[0, 1], [0, 2], [1, 2]], 0, 2));
});
