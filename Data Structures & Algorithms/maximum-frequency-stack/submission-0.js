class FreqStack {
    constructor() {
        this.freqStack = [];
    
        // hashMap for frq count
        this.map = new Map();
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.map.has(val)) { // val = key
            this.map.set(val, this.map.get(val)+1);
        }else 
            this.map.set(val, 1);

        this.freqStack.push(val);
    }

    /**
     * @return {number}
     */
    pop() {
        const maxFrq = Math.max(...this.map.values());
        let i = this.freqStack.length - 1;
        while (this.map.get(this.freqStack[i]) !== maxFrq) {
            i--;
        }
        const val = this.freqStack.splice(i, 1)[0];
        this.map.set(val, this.map.get(val) - 1);
        return val;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
