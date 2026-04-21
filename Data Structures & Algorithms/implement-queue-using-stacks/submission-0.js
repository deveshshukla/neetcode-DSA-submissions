class MyQueue {
    constructor() {
        this.queue = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        if (!this.empty()) {
            return this.queue.shift();
        }else
            return;
    }

    /**
     * @return {number}
     */
    peek() {
        if (!this.empty()) {
            return this.queue[0];
        }else
            return;
    }

    /**
     * @return {boolean}
     */
    empty() {
        let n = this.queue.length;
        return n === 0? true : false;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
