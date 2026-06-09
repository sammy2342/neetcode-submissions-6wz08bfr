class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0; 
        let r = matrix.length - 1
        let exactArray = -1;
        while(l <= r){ 
            let mid = Math.floor((r + l) / 2)
            if(matrix[mid][0] <= target && matrix[mid][matrix[mid].length - 1] >= target){ 
                exactArray = mid
                break
            } else if(matrix[mid][0] < target && matrix[mid][matrix[mid].length - 1] < target){
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        console.log(exactArray)
        if(exactArray === -1) return false
        let arrL = 0; 
        let arrR = matrix[exactArray].length - 1;
        while(arrL <= arrR){ 
            let middle = Math.floor((arrL + arrR) / 2)
            if(matrix[exactArray][middle] === target){
                console.log(matrix[exactArray][middle])
                return true
            } else if(matrix[exactArray][middle] < target){
                arrL = middle + 1
            } else if(matrix[exactArray][middle] > target){ 
                arrR = middle - 1
            }
        }
        return false
    }
}
