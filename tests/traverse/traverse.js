
const u = require("wlj-utilities");
const math = require("wlj-math");

const traverse = require("../../library/traverse.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let log = true;
    let verbose = true;

    test([[0, 1]]);
    test([[0, 1], [1, 2]]);
    test([[0, 1], [0, 3], [1, 3], [2, 3]])
    test([[0, 1], [0, 3], [1, 2], [1, 3]])
    test([[0, 1], [0, 2], [0, 3], [1, 3], [2, 3]])




    //test([[0,2],[0,5],[1,3],[1,4],[4,5]])
    //test([[0,1],[0,2],[0,3],[1,3]])

    let min = 3;
    let max = 50;
    u.loop(u.range(max - min + 1, min), vertexCount => {
        if (log) console.log(__filename, { vertexCount });
        let trials = 100;
        u.loop(u.range(trials), trial => {
            let graph = math.generateGraph(vertexCount);
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
        console.log({ start, previous });
        traverse(graph, previous, start, v => {
            if (!traversed.includes(v)) {
                traversed.push(v);
            }
        });
        traversed.sort((a, b) => a - b);
        u.merge(x, { traversed });

        u.assert(() => u.arraySequenceEquals(vertices, traversed));

        if (verbose)
            if (log) console.log(__filename, { graph, traversed });
    }
});
