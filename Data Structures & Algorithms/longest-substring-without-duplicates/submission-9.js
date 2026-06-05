class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
      let newArr = new Set()
      let left = 0; 
      let max = 0;

      for(let i = 0; i < s.length; i++){
        while(newArr.has(s[i])){
          newArr.delete(s[left]);
          left++
        }
        newArr.add(s[i])
        if(max < newArr.size){
          max = newArr.size
        }
      
      }
    return max
    }
}
