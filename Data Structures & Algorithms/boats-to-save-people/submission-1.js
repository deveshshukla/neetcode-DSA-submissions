class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        let count = 0, n = people.length;
        let p1 = 0, p2 = n-1;

        // Step-1 : Sort the people arr
        people.sort((a, b) => a-b);

        while (p1 <= p2) {
            if (p1 === p2) {
                count+=1;
                break;
            }

            let sum = people[p1]+people[p2];
            if (sum <= limit) {
                count+=1;
                p1++, p2--;
            }else {
                count+=1;
                p2--;
            }
        }

        return count;
    }
}
