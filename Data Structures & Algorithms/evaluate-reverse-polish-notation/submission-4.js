class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let firstRemoval 
        let secondRemoval; 
        let stack = []; // this is our stack
        for(let i = 0; i < tokens.length; i++){ 
            if(Number.isInteger(parseInt(tokens[i]))){ 
                stack.push(tokens[i])
            } else if(tokens[i] === '+'){ 
                secondRemoval = stack.pop(); 
                firstRemoval = stack.pop(); 
                let addition = parseInt(firstRemoval) + parseInt(secondRemoval)
                console.log(addition, 'this')
                stack.push(addition)
            } else if(tokens[i] === '-'){
                secondRemoval = stack.pop(); 
                firstRemoval = stack.pop(); 
                let subtraction = parseInt(firstRemoval) - parseInt(secondRemoval)
                console.log(subtraction)
                stack.push(subtraction)
            } else if(tokens[i] === '*'){
                secondRemoval = stack.pop(); 
                firstRemoval = stack.pop(); 
                let multiplication = parseInt(firstRemoval) * parseInt(secondRemoval)
                stack.push(multiplication)
            } else if(tokens[i] === '/'){
                secondRemoval = stack.pop(); 
                firstRemoval = stack.pop(); 
                let divsion = Math.trunc(parseInt(firstRemoval) / parseInt(secondRemoval))
                stack.push(divsion)
            }
        } 
        return stack[stack.length - 1]
    }
}
