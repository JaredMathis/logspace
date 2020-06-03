
const u = require("wlj-utilities");
const nextNeighbor = require("./nextNeighbor");
const largestNeighbor = require("./largestNeighbor");

module.exports = treeTraverse;

function treeTraverse(graph, start, lambda) {
    let result;
    u.scope(treeTraverse.name, x => {
        let previous = largestNeighbor(graph, start);
        let current = start;
        lambda(current);
        let max = graph.length * graph.length;
        for (let i = 0; i < max; i++) {
            let next = nextNeighbor(graph, current, previous);
            previous = current;
            current = next;
            lambda(current);
        }
    });
    return result;
}
