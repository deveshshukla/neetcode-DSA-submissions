class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for (let i=0; i<strs.length; i++) {
            let wrd = strs[i].split('').sort().join('');

            // create a new empty array as a value
            if (!map.has(wrd)) map.set(wrd, []);

            // add current element, find as wrd key in map
            map.get(wrd).push(strs[i]);
        }

        return [...map.values()]; // return as a map array
    }
}
