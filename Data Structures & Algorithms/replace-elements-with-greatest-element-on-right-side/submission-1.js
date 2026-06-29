class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        // Last element needs to be -1
        let maxRight = -1; 

        for (let i=arr.length-1; i>=0; i--) {
            let currEle = arr[i];

            // Replace with maxRight
            arr[i] = maxRight;

            maxRight = Math.max(maxRight, currEle);
        }

        return arr;
    }
}
