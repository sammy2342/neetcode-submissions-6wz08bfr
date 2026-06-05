class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0; 
        let right = left + 1;
        let maxSum = 0

        while(right !== prices.length){
            let price = prices[right] - prices[left] 
            if(prices[left] > prices[right]){ 
                left++
            }else { 
                right++
            }

            if(price > maxSum){
                console.log(price)
                maxSum = price
            }
        }
        return maxSum
    }
}
