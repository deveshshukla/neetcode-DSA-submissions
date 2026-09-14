class Solution {
    /**
     * @param {number[][]} customers
     * @return {number}
     */
    averageWaitingTime(customers) {
        // Init time
        let t = 0;
        let waitT = 0;

        for (let [arrival, order] of customers) {
            if (t > arrival) {
                waitT += t - arrival;
            } else t = arrival;

            t += order;
            waitT += order;
        }
        return waitT / customers.length;
    }
}
