
const u = require("wlj-utilities");

const isPrime = require("../../library/isPrime.js");
const index = require("../../index.js");

u.scope(__filename, x => {
    u.assert(() => isPrime(2) === true);
    u.assert(() => isPrime(3) === true);
    u.assert(() => isPrime(4) === false);
    u.assert(() => isPrime(5) === true);
    u.assert(() => isPrime(6) === false);
    u.assert(() => isPrime(7) === true);
    u.assert(() => isPrime(8) === false);
    u.assert(() => isPrime(9) === false);
    u.assert(() => isPrime(10) === false);
    u.assert(() => isPrime(11) === true);
    u.assert(() => isPrime(12) === false);
    u.assert(() => isPrime(13) === true);
});
