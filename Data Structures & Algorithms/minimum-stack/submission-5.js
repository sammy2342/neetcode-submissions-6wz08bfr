class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let idx = this.stack.length;  
        this.stack[idx] = val;
        if(this.minStack.length === 0){
            this.minStack[this.minStack.length] = val
        } else {
            if(val <= this.minStack[this.minStack.length - 1]){
                this.minStack[this.minStack.length] = val;
            }
        }
    }

    /**
     * @return {void}
     */
    pop() {
       if (this.stack.length > 0) {
            let removed = this.stack[this.stack.length - 1];

            if (removed === this.minStack[this.minStack.length - 1]) {
                this.minStack.length--;
            }

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
        return this.minStack[this.minStack.length - 1]
    }
}
