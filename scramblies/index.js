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

// I think the solution may have something to do with array.sort()
function scramble(str1, str2) {
    let array1 = str1.split('');
    let array2 = str2.split('');

    array1.forEach(function(char) {
        console.log(array2);
        if (array2.indexOf(char) === -1) {
            return false;
        } else {
            array2.pop(char);
            if (array2.length === 0) {
                return true;
            }
        }
    });
    return false;
};