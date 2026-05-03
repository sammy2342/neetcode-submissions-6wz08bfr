class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let str1 = s.split('').reverse().sort().join('');
        let str2 = t.split('').reverse().sort().join('');
        
        if(str1 === str2){
            return true
        }

        return false
    }
}
