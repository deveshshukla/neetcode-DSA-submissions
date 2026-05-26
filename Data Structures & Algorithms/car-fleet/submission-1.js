class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // Edge case for only one car
        if (position.length === 1) return 1; // only 1 car-fleet

        /** 
            need to make pair of [position, speed] array 
            to sort position arr in reverse order
        */

        let fleetStack = [];

        // Step-1
        let pairArr = [];
        for (let i=0; i<position.length; i++) pairArr.push([position[i], speed[i]]);
        pairArr.sort((a,b) => b[0] - a[0]); // Sort 'pairArr' in reverse order based on position

        // Step-2
        for (let [p, s] of pairArr) {
            fleetStack.push((target-p)/s);

            /**
                If fleetStack has 2 or more car & the current car 
                is less then or equal to the previous car then only 
                fleet complete and they eventually become one car so 
                remove current car to manage fleet count in stack.
            */
            if (fleetStack.length >= 2 && 
                fleetStack[fleetStack.length-1] <= fleetStack[fleetStack.length-2]) {
                    fleetStack.pop();
                }
        }

        return fleetStack.length;
    }
}
