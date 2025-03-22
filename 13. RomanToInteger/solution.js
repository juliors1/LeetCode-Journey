/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let currValue = getRomanNum(s[i]);
        let nextValue = getRomanNum(s[i + 1]);

        if (nextValue > currValue) {
            result += nextValue - currValue;
            i++;
        } else {
            result += currValue;
        }

    }
    return result;
};

const getRomanNum = (char) => {
    switch (char) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0;
    }
};