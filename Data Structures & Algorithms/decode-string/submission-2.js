class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let countStack = [];
        let stringStack = [];
        let currentString = '';
        let k = 0;

        for (let char of s) {
            if (!isNaN(char)) {
                // Handle multi-digit numbers (e.g., "100")
                k = k * 10 + parseInt(char);
            } else if (char === '[') {
                // Push the current state to stacks and reset
                countStack.push(k);
                stringStack.push(currentString);
                currentString = '';
                k = 0;
            } else if (char === ']') {
                // Pop from stacks and build the repeated string
                let count = countStack.pop();
                let prevString = stringStack.pop();
                currentString = prevString + currentString.repeat(count);
            } else {
                // It's a letter
                currentString += char;
            }
        }

        return currentString;
    }
}
