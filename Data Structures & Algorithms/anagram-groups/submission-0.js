class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // 
        const map = new Map()
        let arr = [];

        for(let i = 0; i < strs.length; i++){ 
            let placeHolder = strs[i].split('').sort().join('');
            if(!map.has(placeHolder)){
                map.set(placeHolder, [strs[i]])
            } else {
                map.get(placeHolder).push(strs[i])
            }
        }
        return [...map.values()]
    }
}
