class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
      let stack = []
      if(s.length === 0 || s.length === 1) return false
      for(let i = 0; i < s.length; i++){ 
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
          stack.push(s[i]); 
        } else { 
          let peak = stack[stack.length - 1]; 
          if(peak === '[' && s[i] === ']' || peak === '{' && s[i] === '}' || peak === '(' && s[i] === ')'){ 
            stack.pop()
          } else {
            return false
          }
          
          if(s[i] === ']' && peak === undefined || s[i] === '}' && peak === undefined || s[i] === ')' && peak === undefined){
            return false
          }
        }

      }
       return stack.length === 0
    }
}
