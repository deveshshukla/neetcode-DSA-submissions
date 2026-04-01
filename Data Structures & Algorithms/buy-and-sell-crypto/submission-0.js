class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = Infinity, profit = 0;

        for (let price of prices) {
            // buy item on low
            buy = Math.min(buy, price);

            // sell item on high
            profit = Math.max(profit, price-buy);
        }

        return profit;
    }
}
