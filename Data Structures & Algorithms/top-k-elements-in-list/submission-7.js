class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {}; 
        for(let num of nums){
            if(count[num] === undefined){
                count[num] = 1
            } else {
                count[num] += 1
            }
        }
        
        let entries = Object.entries(count);
        entries.sort(function(a, b){
            let valueA = a[1]
            let valueB = b[1]

            return valueB - valueA;
        })
        console.log(entries);
        let arr = []
        for(let i = 0; i < entries.length; i++){ 
            if(i < k){
                arr.push(entries[i][0]);
            }
        }
        return arr
        
    }
}
