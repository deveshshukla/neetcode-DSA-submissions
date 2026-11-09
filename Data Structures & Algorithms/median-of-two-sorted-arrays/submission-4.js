class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let nums3 = [];

        // meger both arrays in sorted order
        while (nums1.length > 0 && nums2.length > 0) { 
            if (nums1[0] < nums2[0]) {
                nums3.push(nums1.shift());
            } else {
                nums3.push(nums2.shift());
            }
        }

        // Combine the sorted part with whatever is left over
        nums3 = [...nums3, ...nums1, ...nums2];
        
        // Get the mid
        if ((nums3.length % 2) !== 0) {
            // odd
            let mid = Math.floor(nums3.length/2);
            return nums3[mid];
        }else {
            // even
            let mid = nums3.length / 2;
            return (nums3[mid] + nums3[mid - 1]) / 2;
        }
    }
}
