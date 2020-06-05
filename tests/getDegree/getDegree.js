
const u = require("wlj-utilities");

const getDegree = require("../../library/getDegree.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    u.assertIsEqualJson(() => getDegree([[1, 2], [2, 3]], 1), () => 1);
    u.assertIsEqualJson(() => getDegree([[1, 2], [2, 3]], 2), () => 2);
    u.assertIsEqualJson(() => getDegree([[1, 2], [2, 3]], 1), () => 1);
    u.assertIsEqualJson(() => getDegree([[0, 1], [0, 2]], 0), () => 2);
});
