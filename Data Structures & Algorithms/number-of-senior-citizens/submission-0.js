class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let seniorCitz = 0;

        for (let i=0; i<details.length; i++) {
            let age = `${details[i][11]}${details[i][12]}`;
            
            if (Number(age) > 60) seniorCitz++;
        }
        return seniorCitz;
    }
}
