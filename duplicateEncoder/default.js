// The goal of this exercise is to convert a string to a new string where each
// character in the new string is '(' if that character appears only once in the
// original string, or ')' if that character appears more than once in the original
// string. Ignore capitalization when determining if a character is a duplicate.

"use strict";

function duplicateEncode(word) {
    var wordLower = word.toLowerCase();
    var returnString = '';

    // count the occurrence of each character in wordLower
    for (var i in wordLower) {
        returnString +=
            (word.indexOf(word[i]) != word.lastIndexOf(word[i])) ? ')' : '(';
    }
    return returnString;
}
