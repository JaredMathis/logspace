
const u = require("wlj-utilities");
const forEachEdge = require("./forEachEdge");

module.exports = forEachVertex;

/**
 * Loops over each vertex, possibly more than once, 
 * but no more than |V|-1 times.
 * @param {*} graph 
 * @param {*} lambda 
 */
function forEachVertex(graph, lambda) {
    let result;
    u.scope(forEachVertex.name, x => {
        u.assertIsArray(() => graph);
        forEachEdge(graph, e => {
            u.assertIsArray(() => e);
            u.assert(() => e.length === 2);

            lambda(e[0]);
            lambda(e[1]);
        })
    });
    return result;
}
