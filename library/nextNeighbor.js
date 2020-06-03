
const u = require("wlj-utilities");
const forEachNeighbor = require("./forEachNeighbor");

module.exports = nextNeighbor;

function nextNeighbor(graph, current, previous) {
    let result;
    u.scope(nextNeighbor.name, x => {
        let smallest;
        let smallestBiggerThanPrevious;
        forEachNeighbor(graph, current, n => {
            if (n > previous) {
                if (u.isUndefined(smallestBiggerThanPrevious)
                    || n < smallestBiggerThanPrevious) {
                    smallestBiggerThanPrevious = n;
                }
            }
            if (u.isUndefined(smallest)
                || n < smallest) {
                smallest = n;
            }
        });

        if (u.isDefined(smallestBiggerThanPrevious)) {
            result = smallestBiggerThanPrevious;
        } else {
            result = smallest;
        }
    });
    return result;
}
