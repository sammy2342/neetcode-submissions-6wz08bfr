class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = 0; 
        details.forEach(detail => {
            if(detail.split("").splice(11, 2).join("") > 60){
                count++
            }
        })
        return count
    }
}
