class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        // use set ds
        let set = new Set(nums1);
        let res = new Set();

        for (let i = 0; i < nums2.length; i++) if (set.has(nums2[i])) res.add(nums2[i]);

        return [...res];
    }
}
