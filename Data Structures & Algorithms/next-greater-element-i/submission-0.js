class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        // store nums2 in a map for const. lookup
        let map = new Map();

        for (let i = 0; i < nums2.length; i++) {
            map.set(nums2[i], i);
        }

        // check for each greater num of nums1
        for (let i = 0; i < nums1.length; i++) {
            let idx = map.get(nums1[i]); // get idx of nums2 element
            let valUpdated = false;

            // check for nxt big element
            for (let j = idx + 1; j < nums2.length; j++) {
                if (nums2[j] > nums1[i]) {
                    nums1[i] = nums2[j]; // update nums1 val with big nxt element
                    valUpdated = true;
                    break;
                }
            }

            if (!valUpdated) nums1[i] = -1;
        }
        return nums1;
    }
}
