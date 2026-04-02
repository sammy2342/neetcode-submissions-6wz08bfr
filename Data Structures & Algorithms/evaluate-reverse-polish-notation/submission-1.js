class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let arr = [];
        for(let i = 0; i < tokens.length; i++){ 
            if('+-*/'.includes(tokens[i])){
                let result; 
                if(tokens[i] === '+'){
                    let b = parseInt(arr.pop())
                    let a = parseInt(arr.pop())
                    result = a + b
                    arr.push(result)
                    console.log(arr)
                } else if(tokens[i] === '-'){
                    let b = parseInt(arr.pop())
                    let a = parseInt(arr.pop())
                    result = a - b
                    arr.push(result)
                    console.log(arr)
                } else if(tokens[i] === '*'){
                    let b = parseInt(arr.pop())
                    let a = parseInt(arr.pop())
                    result = a * b
                    arr.push(result)
                    console.log(arr)
                } else if(tokens[i] === '/'){
                    let b = parseInt(arr.pop())
                    let a = parseInt(arr.pop())
                    result = Math.trunc(a / b)
                    arr.push(result)
                }
            } else {
                arr.push(tokens[i])
            }
        }
        return arr[0]
    }
}
