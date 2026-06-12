class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let count = 0; 
        let l = 0; 
        let max = 0;
        while(l < nums.length){ 
            if(nums[l] === 0){
                if(count > max){
                    max = count
                }
                count = 0
            } else { 
                count++
                 if(count > max){
                    max = count
                }
            }
            l++ 
            console.log(l)
        }
        return max
    }
}
