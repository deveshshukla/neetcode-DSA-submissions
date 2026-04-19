class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];

        for (let ops of operations) {
            let n = stack.length-1;
            switch (ops) {
                case '+':
                let sum = stack[n-1]+stack[n];
                stack.push(sum);
                break;
                case 'D':
                stack.push((stack[n]*2));
                break;
                case 'C':
                stack.pop();
                break;
                default:
                stack.push(Number(ops));
                break;
            }
        }

        return stack.reduce((total, val) => total + val, 0);;
    }
}
