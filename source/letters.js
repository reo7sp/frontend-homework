'use strict';

const letters = function (str, leaveFirstRepeatedChar) {
    let counter = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let counterKey = char;

        if (!counter.hasOwnProperty(counterKey)) {
            counter[counterKey] = 0;
        }
        counter[counterKey] += 1;
    }

    let newStrArray = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let counterKey = char;

        if (counter[counterKey] === null) {
            // ignore
        } else if (counter[counterKey] === 1) {
            newStrArray.push(char);
        } else {
            if (leaveFirstRepeatedChar === true) {
                newStrArray.push(char);
                counter[counterKey] = null;
            } else if (leaveFirstRepeatedChar === false) {
                counter[counterKey] -= 1;
            }
        }
    }

    return newStrArray.join('');
}
