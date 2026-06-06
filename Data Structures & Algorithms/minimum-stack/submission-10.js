class MinStack {
    constructor(stack) {
        this.stack = []
        this.min =  Infinity;
        this.array = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        // so when we want to push something we want to append the value at the end of the array
        this.stack[this.stack.length] = val; 
        if(val < this.min) { 
            this.min = val
        }
        this.array.push([this.min, val])
        return val 
    }

    /**
     * @return {void}
     */
    pop() {
        //so once we have the array we return the value of the last element and we just shrink the array 
        let popEl = this.stack[this.stack.length - 1]; 
        this.stack.length = this.stack.length - 1
        this.array.length = this.array.length - 1;
        if(popEl === this.min){
            if(this.array.length === 0){
                this.min = Infinity
            } else { 
                this.min = this.array[this.array.length - 1][0];
            }
        }
        return popEl
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}
