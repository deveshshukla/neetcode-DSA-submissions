class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let t = temperatures;
        let ans = [];

        for (let i=0; i<t.length; i++) {
            let found = false;
            let count = 0;

            for (let j=i+1; j<t.length; j++) {
                if (t[j] > t[i]) {
                    count++;
                    ans.push(count);
                    found = true;
                    break;
                }else
                    count++;
            }
            if (!found) ans.push(0);
        }

        return ans;
    }
}
