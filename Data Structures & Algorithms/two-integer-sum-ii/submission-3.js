class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // Two-pointer + BinarySearch
        for (let i=0; i<numbers.length; i++) {
            // get diff. to find other number
            let diff = target - numbers[i];
            
            // BinarySearch to eliminate search range
            let lft=i+1, rht=numbers.length-1;
            while(lft <= rht) {
                let mid = Math.floor(lft + (rht - lft) / 2);

                if (numbers[mid] === diff) {
                    return [i+1, mid+1];
                }else if (numbers[mid] > diff) {
                    rht = mid-1;
                }else
                    lft = mid+1;
            }
        }
    }
}
