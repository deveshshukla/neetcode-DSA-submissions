class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let mp = new Map();

        for (let i=0; i<strs.length; i++) {
            let wrd = strs[i].split('').sort().join('');

            // create a new empty array as a value
            if (!mp.has(wrd)) mp.set(wrd, []);

            // add current element, find as wrd key in map
            mp.get(wrd).push(strs[i]);
        }

        return [...mp.values()]; // return as a map array
    }
}
