class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let arrFreq = [];
        let map = new Map();
        let value = 1;

        nums.forEach((num, idx) => {
            if (!map.has(num)) {
                map.set(num, value);
            }else {
                let itemVal = map.get(num);
                map.set(num, itemVal+=1);
            }
        });

        // Convert map into array
        let arr = Array.from(map);

        // Sort arr by value : O(nlogn)
        arr.sort((a, b) => b[1] - a[1]);

        for (let i=0; i<k; i++) {
            arrFreq.push(arr[i][0]);
        }

        return arrFreq;
    }
}
