class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0,
        majEle = 0;

    // Boyer-Moore Voting Algorithm : 
    // only work if majority element always exists in the array.

    for (let num of nums) {
        // make current num as majEle
        if (count === 0) majEle = num;

        if (num === majEle) {
            count+=1;
        }else
            count-=1;
    }

    return majEle;
    }
}
