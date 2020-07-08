
const u = require("wlj-utilities");

module.exports = isPrime;

function isPrime(n) {
    let result;
    u.scope(isPrime.name, x => {
        u.assert(() => u.isInteger(n));

        if (n < 2) {
            result = false;
            return;
        }
        for (let divisor = 2; divisor < n; divisor++) {
            let divides = (n % divisor) === 0;
            if (divides) {
                result = false;
                return;
            }
        }
        result = true;
    });
    return result;
}
