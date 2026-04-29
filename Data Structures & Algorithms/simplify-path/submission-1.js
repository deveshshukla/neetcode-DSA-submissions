class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let stack = [];
        let paths = path.split('/'); // create paths arr using split on '/'

        for (let idx of paths) {
            if (idx === '..') { // pop to previous directory
                if (stack.length) stack.pop();

            }else if (idx !== '' && idx !== '.') stack.push(idx);
        }

        return ('/' + stack.join('/'));
    }
}
