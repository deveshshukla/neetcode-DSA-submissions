class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = [];

        for (let a of asteroids) {
            while (a < 0 && stack.length && stack[stack.length-1] > 0) {
                let diff = a + stack[stack.length-1];

                if (diff < 0) { // -ve bigger, remove +ve element
                    stack.pop();

                }else if (diff > 0) { // +ve bigger, skip a
                    a=0;

                }else { // both same, remove +ve num & skip a
                    a=0;
                    stack.pop();
                }
            }
            if (a !== 0) stack.push(a);
        }
        return stack;
    }
}
