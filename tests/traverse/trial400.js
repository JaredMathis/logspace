const u = require("wlj-utilities");
const math = require("wlj-math");

const traverse = require("../../library/traverse.js");
const index = require("../../index.js");
const assert = require("wlj-utilities/library/assert");
const test= require('./test');

let log = true;

u.scope(__filename, x => {
    let counts = [400];
    u.loop(counts, vertexCount => {
        if (log) console.log(__filename, { vertexCount });
        let graph = math.generateGraphMax3(vertexCount);
        test(graph);
    });

});