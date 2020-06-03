
const u = require("wlj-utilities");
const forEachEdge = require("./forEachEdge");

module.exports = forEachNeighbor;

function forEachNeighbor(graph, vertex, lambda) {
    let result;
    u.scope(forEachNeighbor.name, x => {
        let log = false;
        if (log) console.log(forEachNeighbor.name,{vertex,graph});
        forEachEdge(graph, e => {
            if (log) console.log(forEachNeighbor.name,{e});
            if (vertex === e[0]) {
                if (log) console.log(forEachNeighbor.name + ' match');
                lambda(e[1]);
            }
            if (vertex === e[1]) {
                if (log) console.log(forEachNeighbor.name + ' match');
                lambda(e[0]);
            }
        })
    });
    return result;
}
