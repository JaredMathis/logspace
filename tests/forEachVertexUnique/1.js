
const u = require("wlj-utilities");

const forEachVertexUnique = require("../../library/forEachVertexUnique.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let vertices = [];
    forEachVertexUnique([[1,2],[1,3]], v => {
        vertices.push(v);
    })

    u.assertIsEqualJson(vertices, [1,2,3]);
});
