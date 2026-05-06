class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        /**
            area of rectangle = width * height
            here each bar has a width of 1 unit
        */ 

        let max = 0;
        
        for (let idx = 0; idx < heights.length; idx++) {
            let count = 1;
            let currentHeight = heights[idx];

            // Forward check: stop as soon as we hit a shorter bar
            for (let i = idx + 1; i < heights.length; i++) {
                if (heights[i] >= currentHeight) count++;
                else break; 
            }

            // Backward check: stop as soon as we hit a shorter bar
            for (let i = idx - 1; i >= 0; i--) {
                if (heights[i] >= currentHeight) count++;
                else break;
            }

            max = Math.max(max, count * currentHeight);
        }

        return max;
    }
}
