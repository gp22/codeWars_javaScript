// Trolls are attacking your comment section!
//
// A common way to deal with this situation is to remove all of the vowels from the
// trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string
// with all vowels removed.
//
// For example, the string "This website is for losers LOL!" would become "Ths
// wbst s fr lsrs LL!".

"use strict";

// solved using string methods and map
function disemvowel(str) {
    var vowels = 'aeiouAEIOU';
    var returnString =
        str.split('')
        .map(function removeVowels(char) {
            if (vowels.indexOf(char) === -1) {
                return char;
            }
        })
        .join('');

    return returnString;
}

// solved using regular expressions
function disemvowelRegExp(str) {
  var vowels = new RegExp(/[aeiou]/gi);
  return str.replace(vowels, '');
}
