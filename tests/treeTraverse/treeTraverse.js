
const u = require("wlj-utilities");
const math = require("wlj-math");

const treeTraverse = require("../../library/treeTraverse.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    let log = true;
    let verbose = false;

    let min = 3;
    let max = 50;
    u.loop(u.range(max - min + 1, min), vertexCount => {
        if (log) console.log(__filename, { vertexCount });
        let trials = 100;
        u.loop(u.range(trials), trial => {
            let tree = math.generateGraphTree(vertexCount);
    
            let traversed = [];
            treeTraverse(tree, 0, v => {
                if (!traversed.includes(v)) {
                    traversed.push(v);
                }
            });
            traversed.sort((a, b) => a - b);
    
            let vertices = u.range(vertexCount);
            u.assert(() => u.arraySequenceEquals(vertices, traversed));
    
            if (verbose)
            if (log) console.log(__filename, {tree});
        });
    });
});
