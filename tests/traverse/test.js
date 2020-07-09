
const u = require("wlj-utilities");
const math = require("wlj-math");

const traverse = require("../../library/traverse.js");
const index = require("../../index.js");
const assert = require("wlj-utilities/library/assert");

let log = true;
let verbose = false;

module.exports = test;

function test(graph) {
    u.scope(test.name, x => {
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
    });
}