'use strict';

const letters = function (str, leaveFirstRepeatedChar) {
    const strArray = Array.from(str);

    const counter = strArray.reduce((output, char) => {
        if (!output.hasOwnProperty(char)) {
            output[char] = 0;
        }
        output[char] += 1;
        return output;
    }, {});

    const newStrArray = strArray.reduce((output, char) => {
        if (counter[char] === 1) {
            output.push(char);
        } else if (counter[char] > 1) {
            if (leaveFirstRepeatedChar === true) {
                output.push(char);
                counter[char] = 0;
            } else if (leaveFirstRepeatedChar === false) {
                counter[char] -= 1;
            }
        }
        return output;
    }, []);

    const newStr = newStrArray.join('');

    return newStr;
}
