
const u = require("wlj-utilities");
const math = require("wlj-math");

const traverse = require("../../library/traverse.js");
const index = require("../../index.js");
const assert = require("wlj-utilities/library/assert");

u.scope(__filename, x => {
    let log = true;
    let verbose = false;

    test([[0, 1]]);
    test([[0, 1], [1, 2]]);
    test([[0, 1], [0, 3], [1, 3], [2, 3]])
    test([[0, 1], [0, 3], [1, 2], [1, 3]])
    test([[0, 1], [0, 2], [0, 3], [1, 3], [2, 3]])
    test([[0, 1], [1, 5], [2, 4], [0, 4], [2, 5], [4, 5], [1, 2], [0, 3]])
    test([[0, 1], [0, 2], [3, 6], [2, 6], [0, 3], [1, 3], [5, 6], [2, 5], [4, 5], [1, 4]])
    test([[0, 1], [2, 3], [3, 4], [1, 4], [2, 4], [0, 5], [2, 6], [0, 6], [1, 6], [3, 5]])
    test([[0, 1], [5, 6], [0, 4], [2, 4], [1, 2], [0, 6], [1, 4], [3, 6], [3, 5], [2, 3]])
    test([
        [0, 1], [7, 16], [4, 7],
        [8, 15], [8, 9], [8, 10],
        [2, 16], [1, 12], [2, 14],
        [11, 14], [2, 12], [4, 13],
        [4, 12], [1, 11], [6, 10],
        [3, 7], [6, 15], [13, 16],
        [6, 9], [3, 10], [13, 14],
        [3, 11], [0, 5], [9, 15]
    ]);
    //test([[0,2],[0,5],[1,3],[1,4],[4,5]])
    //test([[0,1],[0,2],[0,3],[1,3]])

    let min = 3;
    let max = 50;
    u.loop(u.range(max - min + 1, min), vertexCount => {
        if (log) console.log(__filename, { vertexCount });
        let trials = 100;
        u.loop(u.range(trials), trial => {
            let graph = math.generateGraphMax3(vertexCount);
            test(graph);
        });
    });

    function test(graph) {
        u.merge(x, { graph });
        if (graph.length < 1) {
            return;
        }
        if (!math.isGraphConnected(graph)) {
            return;
        }

        let vertices = math.getGraphVertices(graph);
        let traversed = [];
        let start = vertices[0];
        let previous = index.largestNeighbor(graph, start);
        traverse(graph, previous, start, v => {
            if (!traversed.includes(v)) {
                traversed.push(v);

                // Exit early if we find all
                traversed.sort((a, b) => a - b);
                if (u.arraySequenceEquals(vertices, traversed)) {
                    return true;
                }
            }
        });
        u.merge(x, { traversed });

        try {
            u.assert(() => u.arraySequenceEquals(vertices, traversed));
        } catch (e) {
            console.log({ graph });
            throw e;
        }

        if (verbose)
            if (log) console.log(__filename, { graph, traversed });
    }
});
