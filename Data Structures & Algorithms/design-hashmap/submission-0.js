class MyHashMap {
    constructor() {
        this.map = {};
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.map[key] = value;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(key in this.map) return this.map[key];
        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if(key in this.map) delete this.map[key];
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
