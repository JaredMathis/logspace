
const u = require("wlj-utilities");
const isPrime = require("./isPrime");

module.exports = nextPrime;

function nextPrime(n) {
    let result;
    u.scope(nextPrime.name, x => {
        while (!isPrime(n)) {
            n++;
        }
        result = n;
    });
    return result;
}
