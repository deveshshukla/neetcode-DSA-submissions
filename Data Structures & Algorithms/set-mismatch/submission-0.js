class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findErrorNums(nums) {
        // Set DS for unique & const lookup
        let set = new Set();
        let n = nums.length;
        let repNum, missNum;

        for (let i of nums) {
            if (set.has(i)) {
                repNum = i;
            } else set.add(i);
        }

        for (let j = 1; j <= n + 1; j++) {
            if (!set.has(j)) {
                missNum = j;
                break;
            }
        }

        return [repNum, missNum];
    }
}
