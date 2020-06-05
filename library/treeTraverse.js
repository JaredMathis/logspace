
const u = require("wlj-utilities");
const nextNeighbor = require("./nextNeighbor");
const largestNeighbor = require("./largestNeighbor");

module.exports = treeTraverse;

function treeTraverse(graph, previous, current, lambda) {
    let result;
    u.scope(treeTraverse.name, x => {
        let log = false;
        if (log) console.log(treeTraverse.name + ' entered');
        if (log) console.log(treeTraverse.name, {current,previous});
        if (lambda(current, previous)) {
            return;
        }
        let max = graph.length * graph.length;
        for (let i = 0; i < max; i++) {
            let next = nextNeighbor(graph, current, previous);
            previous = current;
            current = next;
            if (log) console.log(treeTraverse.name, {current,previous});
            if (lambda(current, previous)) {
                return;
            }
        }
    });
    return result;
}
