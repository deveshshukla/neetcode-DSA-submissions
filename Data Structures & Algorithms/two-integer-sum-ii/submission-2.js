class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let lft = 0;
        let rht = numbers.length - 1;

        while (lft < rht) {
            let sum = numbers[lft] + numbers[rht];

            if (sum === target) {
                return [lft + 1, rht + 1];
            } else if (sum > target) {
                rht--; // Sum is too big, move the right pointer down
            } else {
                lft++; // Sum is too small, move the left pointer up
            }
        }
    }
}
