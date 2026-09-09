class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let unable = students.length;
        let map = new Map();

        // Student frq. cnt.
        for (let s of students) map.set(s, (map.get(s) || 0) + 1);

        for (let s of sandwiches) {
            if (map.get(s) > 0) {
                map.set(s, map.get(s) - 1);
                unable--;
            } else return unable;
        }

        return unable;
    }
}
