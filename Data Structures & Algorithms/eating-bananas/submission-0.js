class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // 
        let speed = 1; 
        while(true){
            let totalTime = 0; 
            for(let i = 0; i < piles.length; i++){ 
                totalTime += Math.ceil(piles[i] / speed)
            }
            if(totalTime > h){ 
                speed++
            }else {
                return speed
            }
        }
    }
}
