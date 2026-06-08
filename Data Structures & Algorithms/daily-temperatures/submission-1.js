class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
       let res = new Array(temperatures.length).fill(0);
       let stack = []
       for(let i = 0; i < temperatures.length; i++){ 
            let top = stack[stack.length - 1]; 
            while(stack.length !== 0 && temperatures[stack[stack.length - 1]] < temperatures[i]){ 
                let poppedIndex = stack.pop();                                                                                                                                                      
                res[poppedIndex] =  i - poppedIndex
            } 
            stack.push(i)
       }
       return res
    }                                                                         
}
