const u = require("wlj-utilities");
const math = require("wlj-math");

const traverse = require("../../library/traverse.js");
const index = require("../../index.js");
const assert = require("wlj-utilities/library/assert");
const test= require('./test');

let log = true;

u.scope(__filename, x => {
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

});