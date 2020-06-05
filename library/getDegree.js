
const u = require("wlj-utilities");
const forEachNeighbor = require("./forEachNeighbor");

module.exports = getDegree;

function getDegree(graph, vertex) {
    let result;
    u.scope(getDegree.name, x => {
        let degree = 0;
        forEachNeighbor(graph, vertex, n => {
            degree++;
        });
        result = degree;
    });
    return result;
}
