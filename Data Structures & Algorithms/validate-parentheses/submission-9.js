class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let arr = [];
        if(s.length === 1 || s.length === 0) return false
        for(let i = 0; i < s.length; i++){ 
            if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
                arr.push(s[i])
            } else { 
                let top = arr[arr.length - 1]
                if(top === "(" && s[i] ===  ")" ||
                top === "{" && s[i] ===  "}" ||
                top === "[" && s[i] ===  "]" 
                ){
                    arr.pop();
                } else {
                    return false
                }
            }
        }
        return arr.length === 0
    }
}
