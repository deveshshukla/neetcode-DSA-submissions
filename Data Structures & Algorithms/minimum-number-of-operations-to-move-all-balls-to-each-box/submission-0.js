class Solution {
    /**
     * @param {string} boxes
     * @return {number[]}
     */
    minOperations(boxes) {
        let res = [];
        let n = boxes.length;

        for (let i = 0; i < n; i++) {
            let sum = 0;
            for (let j = 0; j < n; j++) {
                if (j !== i && boxes[j] === "1") sum += Math.abs(j - i);
            }
            res.push(sum);
        }

        return res;
    }
}
