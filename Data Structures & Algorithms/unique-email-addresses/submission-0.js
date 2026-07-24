class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        // Split by @ to get local and domain.
        // Split local by + and take only the first part.
        // Remove all . from local.
        // Combine the normalized local with domain.

        let set = new Set();

        for (let e of emails) {
            let [local, domain] = e.split('@');
            local = local.split('+')[0]; // split local with + and remove after string
            local = local.replace(/\./g, ''); // replace . with ''
            set.add(`${local}@${domain}`); // combine them
        }
        return set.size;
    }
}
