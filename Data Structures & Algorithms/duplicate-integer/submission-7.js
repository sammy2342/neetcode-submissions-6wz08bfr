class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // 1, 2 , 3, 3 
        // 1 -> 2, 1 -> 3, 2 -> 3 
        for(let i = 0; i < nums.length; i++){
            for(let j = i + 1; j < nums.length; j++){ 
                if(nums[j] === nums[i]){
                    return true
                }
            }
        }
        return false
    }
}
