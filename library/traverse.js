
const u = require("wlj-utilities");
const nextNeighbor = require("./nextNeighbor");
const vertexCount = require("./vertexCount");
const nextPrime = require("./nextPrime");

module.exports = traverse;

function traverse(graph, previous, current, lambda) {
    let result;
    u.scope(traverse.name, x => {
        let log = false;
        let verbose = false;
        if (log) console.log(traverse.name + ' entered', { graph });
        if (log) console.log(traverse.name, { current, previous });

        let vc = vertexCount(graph);
        let prime = 2;
        if (log) console.log({ prime });
        u.merge(x, { prime });

        if (lambda(current, previous)) {
            return;
        }
        let max = graph.length 
            * graph.length 
            * graph.length 
            * graph.length 
            * graph.length
            * graph.length;
        let j = 0;
        for (let i = 0; i < max; i++, j++) {
            let next = nextNeighbor(graph, current, previous);
            if (j % prime === prime - 1) {
                j = 0;
                if (log) console.log('prime!', { i, prime, next, current, previous });
                next = nextNeighbor(graph, current, next);
                prime = nextPrime(prime + 1);
            }
            previous = current;
            current = next;
            if (verbose) if (log) console.log(traverse.name, { current, previous });
            if (lambda(current, previous)) {
                return;
            }
        }
    });
    return result;
}
