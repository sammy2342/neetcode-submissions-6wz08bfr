class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // read question so when we reverse it it has it read the same 
        // anything that isnt a alphanumeric numbers dosent get counteed 
        // so that will be something like only from abc 
        // questions you can ask an interview if its an empty string what should it return 
        // to start coding since this is a pointer we  want to use a while loop 
        // left we start from zero and the end of right is the end of the length 
        // we check if right is greate that left we keep on looping 
        // if left === right then we move left + 1 and right - 1 and we check 
        // the moment left !== to the right we can return 
        let left = 0; 
        let right = s.length - 1; 
        s = s.toLowerCase()
        while(left < right){ 
            console.log(Alphanumeric(s[left]), Alphanumeric(s[right]))
            if(Alphanumeric(s[left]) === Alphanumeric(s[right])){
                left += 1
                right -= 1 
            } else if(Alphanumeric(s[left]) === undefined){
                left += 1
            } else if (Alphanumeric(s[right]) === undefined){ 
                right -= 1 
            } else { 
                return false 
            }
        }
        return true


        function Alphanumeric(char){ 
            if(char >= '0' && char <= '9'){
                return char
            }

            if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
                return char;
            }
        }
    }
}
