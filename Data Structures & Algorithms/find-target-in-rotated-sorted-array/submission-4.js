class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            const m = Math.floor((l + r) / 2);
            if (nums[m] > nums[r]) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        const pivot = l;

        const result = binarySearch(nums, target, 0, pivot - 1);
        if (result !== -1) {
            return result;
        }

        return binarySearch(nums, target, pivot, nums.length - 1);
    }
}

// helper func
function binarySearch(nums, target, a, b) {
    while (a <= b) {
        let mid = Math.floor((a+b)/2);

        if (nums[mid] === target) {
            return mid;
        }else if (nums[mid] > target) {
            b = mid-1;
        }else {
            a = mid+1;
        }
    }
    return -1;
}
