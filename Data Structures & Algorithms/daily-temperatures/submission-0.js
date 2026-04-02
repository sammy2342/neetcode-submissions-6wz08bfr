class Solution {
    dailyTemperatures(temperatures) {
        let arr = []
        let l = 0; 
        let r = l + 1;
        let sum = 1;

        while (l < temperatures.length) {

            // if r goes out of bounds → no warmer day
            if (r >= temperatures.length) {
                arr.push(0)
                l++
                r = l + 1
                sum = 1
            }

            else if (temperatures[l] < temperatures[r]) {
                arr.push(sum)
                l++
                r = l + 1
                sum = 1
            }

            else if (temperatures[l] > temperatures[r]) {
                sum++
                r++
            }

            else if (temperatures[l] === temperatures[r]) {
                sum++
                r++
            }
        }

        return arr
    }
}