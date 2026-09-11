class Solution {
    /**
     * @param {number[]} tickets
     * @param {number} k
     * @return {number}
     */
    timeRequiredToBuy(tickets, k) {
        let res = 0;

        for (let i = 0; i < tickets.length; i++) {
            // Before Elements: If ele val is <= the given k we add them at it is, otherwise
            // If greater that k than simply add val of k

            // After Element: We add k-1 val to res
            if (i <= k) {
                res += tickets[i] <= tickets[k] ? tickets[i] : tickets[k];
            } else res += tickets[i] < tickets[k] ? tickets[i] : tickets[k] - 1;
        }

        return res;
    }
}
