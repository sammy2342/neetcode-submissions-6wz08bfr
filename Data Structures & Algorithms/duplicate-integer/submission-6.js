class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueNumbers = new Set(nums)
        if(uniqueNumbers.size === nums.length){
            return false
        }
        return true
    }
}
