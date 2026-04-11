class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        let count = 0;
        let p1 = 0, p2 = people.length-1;

        // Step-1 : Sort the people arr
        people.sort((a, b) => a-b);

        while (p1 <= p2) {
            let sum = people[p1]+people[p2];
            if (sum <= limit) {
                count+=1;
                p1++, p2--;
            }else {
                count+=1;
                p2--;
            }
        }

        if (p1 === p2) count+=1;
        return count;
    }
}
