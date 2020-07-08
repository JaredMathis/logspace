
const u = require("wlj-utilities");

const nextPrime = require("../../library/nextPrime.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    u.assert(() => nextPrime(2) === 2);
    u.assert(() => nextPrime(3) === 3);
    u.assert(() => nextPrime(4) === 5);
    u.assert(() => nextPrime(5) === 5);
    u.assert(() => nextPrime(6) === 7);
});
