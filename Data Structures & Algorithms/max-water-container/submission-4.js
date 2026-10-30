class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let larArea = 0;

        for(let i=0, j=heights.length-1; i<j;) {
            // small one is length & gap between 2 idx's are breadth

            let area = 0;

            if(heights[i] <= heights[j]) {
                area = heights[i]*Math.abs(j-i);
                i++;
            }else if(heights[i] > heights[j]) {
                area = heights[j]*Math.abs(i-j);
                j--;
            }

            if(area > larArea) larArea = area;
        }

        return larArea;
    }
}
