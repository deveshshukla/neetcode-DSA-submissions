class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (const ele of tokens) {
            if (ele === '+') {
                stack.push(stack.pop()+stack.pop());

            }else if (ele === '-') {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(b-a);

            }else if (ele === '*') {
                stack.push(stack.pop()*stack.pop());

            }else if (ele === '/') {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(Math.trunc(b / a));
                
            }else {
                stack.push(parseInt(ele));
            }
        }
        return stack.pop();
    }
}
