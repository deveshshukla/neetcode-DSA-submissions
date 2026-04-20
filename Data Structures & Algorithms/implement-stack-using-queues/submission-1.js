class MyStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stack.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        let ele = this.stack.pop();
        return ele;
    }

    /**
     * @return {number}
     */
    top() {
        let n = this.stack.length-1;
        return this.stack[n];
    }

    /**
     * @return {boolean}
     */
    empty() {
        let n = this.stack.length;
        return n === 0? true : false;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
