/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        //
        intervals.sort((a, b) => a.start - b.start);
        let arr = []
        let arrEnd = []
        for(let i = 0; i < intervals.length; i++){
            arr.push(intervals[i].start)
            arrEnd.push(intervals[i].end)
        }

        let firstArr = 1; 
        let endArray = 0; 
        while(endArray <= arr.length){ 
            if(arr[firstArr] < arrEnd[endArray] ){
                return false
            } else { 
                firstArr++;
                endArray++
            }
        }
        return true
    }
}
