/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = x;
    if(x < 0 || (x % 10 === 0 && x !== 0)){
        return false;
    }
    let reversal = 0;

    while(y > reversal) {
        reversal = reversal * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return y === reversal;

};
console.log(isPalindrome(121)); // true