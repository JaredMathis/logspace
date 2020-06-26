
const u = require("wlj-utilities");
const forEachNeighbor = require('./forEachNeighbor');

module.exports = forEachMax3;

function forEachMax3(graph, lambda) {
    let result;
    u.scope(forEachMax3.name, x => {
        forEachVertex(graph, v => {
            let i = 0;
            forEachNeighbor(graph, v, n => {
                i++;
            })
        })

        /**
         * 12
         * 13
         * 14
         * 15
         * 21
         * 26
         * 27
         * 28
         * 31
         * 32
         * 39
         * 30
         * 41
         * 42
         * 43
         * 4a
         */
        forEachNeighbor(graph, v, n => {

        })
    });
    return result;
}
