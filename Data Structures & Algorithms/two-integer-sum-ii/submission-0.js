class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let idx1, idx2;
        let n = numbers;
        
        for (let i=0, j=n.length-1; i<j;) {
            if (n[i] + n[j] === target) {
                idx1 = i+1;
                idx2 = j+1;
                break;

            }else if (n[j] > (target-n[i])) {
                j--;
            }else if (n[i] < (target-n[j])) {
                i++;
            }
        }

        return [idx1, idx2];
    }
}
