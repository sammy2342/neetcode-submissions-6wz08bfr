class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let idx = this.stack.length;  
        this.stack[idx] = val; 
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length > 0) {
            this.stack.length--;
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        let min = Infinity;
        let stackLength = this.stack.length
        for(let i = 0; i < stackLength; i++){ 
            if(this.stack[i] < min){
                min = this.stack[i]
            }
        }
        return min
    }
}
