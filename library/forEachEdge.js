
const u = require("wlj-utilities");

module.exports = forEachEdge;

function forEachEdge(graph, lambda) {
    let result;
    u.scope(forEachEdge.name, x => {
        u.assertIsArray(() => graph);
        
        graph.forEach(e => lambda(e));
    });
    return result;
}
