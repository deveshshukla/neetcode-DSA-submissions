/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     @param {number} index
 *     @return {number}
 *     get(index) {
 *         ...
 *     }
 *
 *     @return {number}
 *     length() {
 *         ...
 *     }
 * }
 */

class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target, mountainArr) {
        /**
            1. Array is split in incr & decr part.
            2. to find target with minimum index 1st check 
            in incr part then decr part.
            3. Find pivot index
        */
        let n = mountainArr.length();
    
        // 1. Find the peak/pivot index
        let s = 0, e = n - 1;
        while (s < e) {
            let mid = Math.floor(s + (e - s) / 2);
            // Single get() call per index to optimize API usage
            if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
                s = mid + 1;
            } else {
                e = mid;
            }
        }
        let pivotIdx = s;
        
        // 2. Search in the increasing half
        let leftS = 0;
        let leftE = pivotIdx;
        while (leftS <= leftE) {
            let mid = Math.floor(leftS + (leftE - leftS) / 2);
            let val = mountainArr.get(mid);
            
            if (val === target) {
                return mid;
            } else if (val < target) {
                leftS = mid + 1;
            } else {
                leftE = mid - 1;
            }
        }
        
        // 3. Search in the decreasing half
        let rightS = pivotIdx + 1;
        let rightE = n - 1;
        while (rightS <= rightE) {
            let mid = Math.floor(rightS + (rightE - rightS) / 2);
            let val = mountainArr.get(mid);
            
            if (val === target) {
                return mid;
            } else if (val > target) { // Values decrease as index increases
                rightS = mid + 1;
            } else {
                rightE = mid - 1;
            }
        }
        
        return -1;
    }
}
