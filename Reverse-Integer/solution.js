/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const range = Math.pow(2, 31);
    const sign = x < 0 ? -1 : 1; // If x < 0 then output: -1 if not 1
    const reverse = Math.abs(x).toString().split('').reverse().join('') * sign;

    // Check reversed number if it is in the 32-bit range
    if (reverse < -range || reverse >= range) {
        return 0;
    }

    return reverse;

};