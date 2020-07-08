
const u = require("wlj-utilities");
const forEachVertexUnique = require("./forEachVertexUnique");

module.exports = vertexCount;

function vertexCount(graph) {
    let result;
    u.scope(vertexCount.name, x => {
        result = 0;
        forEachVertexUnique(graph, v => {
            result++;
        });
    });
    return result;
}
