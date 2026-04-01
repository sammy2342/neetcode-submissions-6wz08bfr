class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let newStr1 = s1.split('').sort().join('');
        let counter = 0;
        let l = 0; 
        let arr = []
        let str = '';
        let placeholder = false;

        for(let i = 0; i < newStr1.length; i++){ 
            for(let j = 0; j < s2.length; j++){
               if(newStr1[i] === s2[j]){
                  str += s2.substring(j, j + s1.length) + " "
               } 
            }
        }
        str.split(' ').forEach(chr => { 
            if(chr.split('').sort().join('') === newStr1){
                console.log(newStr1, chr.split(' ').sort().join(''), 'this')
                placeholder = true
            }
        })
       return placeholder  
    }
}
