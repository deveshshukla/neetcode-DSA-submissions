class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.array = new Array(capacity);
        this.size = 0; // Tracks the actual number of elements
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.array[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.array[i] = n;

        // If setting an index beyond current size, update size
        if (i >= this.size) this.size = i + 1;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.size === this.capacity) {
            this.resize();
        }
        this.array[this.size] = n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback() {
        if (this.size > 0) {
            this.size--;
            let val = this.array[this.size];
            this.array[this.size] = undefined; // Clear the slot
            return val;
        }
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity = this.capacity * 2;
        let newArray = new Array(this.capacity);
        
        // Copy old elements to the new larger array
        for (let i = 0; i < this.size; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size; // Returns the integer count of elements
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity; // Returns the total current buffer limit
    }
}
