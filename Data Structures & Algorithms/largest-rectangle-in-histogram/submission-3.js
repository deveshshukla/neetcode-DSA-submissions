class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [] // pair: (idx, height)
        let maxArea = 0;

        for (let i=0; i<heights.length; i++) {
            let idx = i;

            // if stack is not empty, and 
            // last height is > then current height
            while(stack.length > 0 && 
            stack[stack.length-1][1] > heights[i]) {

                // get area of last height & pop it
                const [index, height] = stack.pop();
                maxArea = Math.max(maxArea, height * (i - index));
                idx = index; // update idx with last pop height idx
            }

            stack.push([idx, heights[i]]);
        }

        for (const [idx, height] of stack) {
            maxArea = Math.max(maxArea, height * (heights.length - idx));
        }
        return maxArea;
    }
}
