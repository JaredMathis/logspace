
const u = require("wlj-utilities");
const forEachVertex = require("./forEachVertex");

module.exports = forEachVertexUnique;

function forEachVertexUnique(graph, lambda) {
    let result;
    u.scope(forEachVertexUnique.name, x => {
        u.assertIsArray(() => graph);
        let i = 0;
        forEachVertex(graph, v => {
            let duplicate = false;
            let j = 0;
            forEachVertex(graph, w => {
                if (w === v && j < i) {
                    duplicate = true;
                }
                j++;
            });
            i++;
            if (!duplicate) {
                lambda(v);
            }
        })
    });
    return result;
}
