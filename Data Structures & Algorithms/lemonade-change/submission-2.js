class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        let five = 0, ten = 0;

        for (let bill of bills) {
            if (bill === 5) {
                five += 1;

            }else if (bill === 10) {
                // Need a $5 bill for change
                if (five === 0) return false;

                five -= 1;
                ten += 1;

            }else { // $20 bill
                if (five > 0 && ten > 0) {
                    five -= 1;
                    ten -= 1;
                }else if (five >= 3) { // give three $5 bills
                    five -= 3;
                } else
                    return false;
            }
        }
        return true;
    }
}
