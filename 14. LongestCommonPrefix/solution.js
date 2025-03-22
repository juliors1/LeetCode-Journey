/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // Checks if input is empty
    if(!strs.length){
        return "";
    }
    // Set prefix to start at first index
    let prefix = strs[0];

    // Start from the second string to compare current prefix with string in array
    for(let i = 1; i < strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if(!prefix) return "";
        }
    }

    return prefix;
};