class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let parentArr = [];

        let tempArr = [];
        strs.forEach(element => {
            tempArr.push(element.split('').sort().join(''));
        });

        for (let i=0; i<tempArr.length; i++) {
            let grpArr = [];
            
            if (tempArr[i] !== null) {
                grpArr.push(strs[i]);
            }else
                continue;

            for (let j=i+1; j<tempArr.length; j++) {

                if (tempArr[i] === tempArr[j]) {
                    grpArr.push(strs[j]);
                    tempArr[j] = null;
                }
            }

            parentArr.push(grpArr);
        }

        return parentArr;
    }
}
