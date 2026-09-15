class Solution {
    /**
     * @param {number[]} arr1
     * @param {number[]} arr2
     * @return {number[]}
     */
    relativeSortArray(arr1, arr2) {
        let resArr = [];

        // Make frq. map of arr1
        let map = new Map();
        for (let a of arr1) map.set(a, (map.get(a) || 0) + 1);

        // Now sort arr1 based on arr2 elements
        for (let a of arr2) {
            if (map.has(a)) {
                let count = map.get(a);
                for (let i = 0; i < count; i++) resArr.push(a);

                // Delete it from map so only leftover elements remain
                map.delete(a);
            }
        }

        // 2. Collect leftover elements that weren't in arr2
        let leftovers = [];
        for (let [key, count] of map.entries()) {
            for (let i = 0; i < count; i++) leftovers.push(key);
        }

        // 3. Sort leftovers in ascending order and merge them
        leftovers.sort((a, b) => a - b);

        return resArr.concat(leftovers);
    }
}
