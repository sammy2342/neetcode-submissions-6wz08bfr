class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // i is my middle 
    // first thing let me sort the numbers 
    // lets check if left + right is a negative then we must move left ++ 
    // if its  apostive number then we have to move right -- 
    // and we check for each i 
    threeSum(nums) {
        let arr = []
        nums.sort((a, b) => a - b);
        for(let i = 0; i < nums.length; i++){ 
            let left = i + 1
            let right = nums.length - 1; 
            // console.log(left, i, right)
            while(left < right){ 
                let sum = nums[i] + nums[left] + nums[right]

                if(sum === 0){
                    arr.push([nums[i], nums[left], nums[right]])
                    left++ 
                    right--
                } else if(sum < 0){
                    left++
                }else {
                    right--
                }
            }
        }
        let seen = new Set();
        let newArr = []
        for(let j = 0; j < arr.length; j++){ 
            let key = JSON.stringify(arr[j])


            if(!seen.has(key)){
                seen.add(key)
                newArr.push([arr[j]])
            }
        }
        return newArr
    }
}
