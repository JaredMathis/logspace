
const u = require("wlj-utilities");
const treeTraverse = require("./treeTraverse");
const largestNeighbor = require("./largestNeighbor");
const getDegree = require("./getDegree");

module.exports = isHeavyEdge;

function isHeavyEdge(graph, previous, current) {
    let result;
    u.scope(isHeavyEdge.name, x => {
        let log = false;
        let currentDegree = getDegree(graph, current);
        if (currentDegree === 1) {
            result = false;
            return;
        }
        if (log) console.log(isHeavyEdge.name + ' entered', {previous,current});
        let largestCurrentNeighbor = largestNeighbor(graph, current);
        let largestPreviousNeighbor = largestNeighbor(graph, previous);
        if (log) console.log(isHeavyEdge.name, {largestCurrentNeighbor,largestPreviousNeighbor});
        if (largestCurrentNeighbor !== previous) {
            result = false;
            return;
        }
        let found = false;
        let largest;
        let degreeCount = 0;
        let vertexCount = 0;
        treeTraverse(graph, previous, current, (c, p) => {
            if (u.isUndefined(largest) || c > largest) {
                largest = c;
            }
            if (vertexCount > 1 && current === c && previous === p) {
                found = true;
                return true;
            }
            vertexCount++;
            let degree = getDegree(graph, c);
            degreeCount += degree;
        });

        if (log) console.log(isHeavyEdge.name, {largest, degreeCount, vertexCount});

        let currentIsHeavy = largestCurrentNeighbor === previous && largest === current;
        let previousIsHeavy = largestPreviousNeighbor === current && largest === previous;
        if (!currentIsHeavy && !previousIsHeavy) {
            result = false;
            return;
        }

        let isTree = degreeCount === (vertexCount - 1) * 2;
        let hasCycle = !isTree;

        if (!hasCycle) {
            result = false;
            return;
        }

        result = true; 
    });
    return result;
}
