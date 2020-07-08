
const u = require("wlj-utilities");

const vertexCount = require("../../library/vertexCount.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let actual = vertexCount([[1,2],[2,3]]);
    u.assert(() => actual === 3);
});
