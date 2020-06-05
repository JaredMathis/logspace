
const u = require("wlj-utilities");
const nextNeighbor = require("./nextNeighbor");
const isHeavyEdge = require("./isHeavyEdge");

module.exports = traverse;

function traverse(graph, previous, current, lambda) {
    let result;
    u.scope(traverse.name, x => {
        console.log(traverse.name + ' entered', {graph});
        if (lambda(current, previous)) {
            return;
        }
        let max = graph.length * graph.length;
        for (let i = 0; i < max; i++) {
            let next = nextNeighbor(graph, current, previous);
            if (isHeavyEdge(graph, current, next)) {
                console.log(traverse.name + ' isHeavyEdge', {current,next});
                next = nextNeighbor(graph, next, previous);
                next = previous;
            } else {
                console.log(traverse.name, {current,next});
            }

            previous = current;
            current = next;
            if (lambda(current, previous)) {
                return;
            }
        }
    });
    return result;
}
