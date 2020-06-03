
const u = require("wlj-utilities");
const forEachNeighbor = require("./forEachNeighbor");

module.exports = largestNeighbor;

function largestNeighbor(graph, vertex) {
    let result;
    u.scope(largestNeighbor.name, x => {
        let log = false;
        let largest;
        forEachNeighbor(graph, vertex, n => {
            if (log) console.log(largestNeighbor.name, {n});
            if (u.isUndefined(largest) || n > largest) {
                largest = n;
            }
        })
        result = largest;
    });
    return result;
}
