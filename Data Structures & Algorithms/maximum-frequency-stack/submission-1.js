class FreqStack {
    constructor() {
        this.freqStack = [];
    
        // hashMap for frq count
        this.map = new Map(); // key:number, value:freqCount
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.freqStack.push(val); // normal push to freqStack

        if(this.map.has(val)) {
            this.map.set(val, this.map.get(val)+1);
        }else 
            this.map.set(val, 1); // initial freq: 1
    }

    /**
     * @return {number}
     */
    pop() {
        /**
            1. first check max freqCount
            2. check every val frq count when we are popping them 
            if it matches with the max freqCount, then we pop them or else skip them.
        */
        let maxFreqCount = Math.max(...this.map.values());

        for (let i=this.freqStack.length-1; i>=0; i--) {
            if (this.map.get(this.freqStack[i]) === maxFreqCount) {
                // update map frqCount
                this.map.set(this.freqStack[i], this.map.get(this.freqStack[i])-1);
                // Remove element from freqStack
                let remElem = this.freqStack.splice(i, 1);
            
                if (remElem.length > 0) return remElem[0]; // break loop
            }
        }
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
