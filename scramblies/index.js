/*
    Write function scramble(str1,str2) that returns true if a portion of str1
    characters can be rearranged to match str2, otherwise returns false.

    For example:
    str1 is 'rkqodlw' and str2 is 'world' the output should return true.
    str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
    str1 is 'katas' and str2 is 'steak' should return false.

    Only lower case letters will be used (a-z).
    No punctuation or digits will be included.
    Performance needs to be considered
*/
'use strict';

/*
function scramble(str1, str2) {
    // make sure str1 contains at least as many char as str2
    for (i in str2) {
        let char = str2[i];
        if (countLetter(char, str2) > countLetter(char, str1)) {
            return false;
        }
    }
    return true;

    function countLetter(char, str) {
        // count the number of char in str and return the result
        let count = 0;
        str.split('').forEach(function(c) {
            if (c === char) {
                count++
            }
        });
        return count;
    };

};
*/

// function scramble(str1, str2) {
//     let array1 = str1.split('').sort();
//     let array2 = str2.split('').sort();

//     while (array1.length >= array2.length) {
//         if (array2.length === 0) {
//             return true;
//         }
//         // if the first character of both arrays are the same,
//         // remove the first character from each array
//         if (array1[0] === array2[0]) {
//             array1.shift(), array2.shift();
//         // if they are not the same, and the first char of array1 is
//         // greater than the first char in array2, return false
//         } else if (array1[0] > array2[0]) {
//             return false;
//         // otherwise, remove the first char of array1
//         } else {
//             array1.shift();
//         }
//     }
//     return false;
// };

// This solution was the fastest by about 300ms and the only one that
// passed the efficiency test for this kata
function scramble(str1, str2) {
    if (str1.length < str2.length) {
        return false;
    }

    let str2Count = {};

    // Create an object map of the count of all characters in str2
    for (let i = 0; i < str2.length; i++) {
        let c = str2[i];
        str2Count.hasOwnProperty(c) ? str2Count[c]++ : str2Count[c] = 1;
    }

    // Iterate through str1 to check if each letter is in str2
    for (let i = 0; i < str1.length; i++) {
        let c = str1[i];
        if (str2Count.hasOwnProperty(c)) {
            str2Count[c]--;
            if (str2Count[c] === 0) {
                delete str2Count[c];
                // if str2Count is empty, str1 contains all the letters of
                // str2, so return true
                if (Object.getOwnPropertyNames(str2Count).length === 0) {
                    return true;
                }
            }
        }
    }

    // If str1 was iterated through without emptying str2Count
    // then str1 does not contain all the letters of str2
    return false;
};