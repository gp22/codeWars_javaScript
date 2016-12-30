// Write a function that takes a single string (word) as argument. The function
// must return an ordered list containing the indexes of all capital letters in
// the string.
//
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

"use strict";

var capitals = function(word) {
    var caps = new RegExp('[A-Z]');
    var returnArray = [];
    for (var i in word) {
        if (caps.test(word[i])) {
            returnArray.push(Number(i));
        }
    }
    return returnArray;
};

var capitals2 = function(word) {
    var returnArray = [];
    for (var i in word) {
      if (word[i] === word[i].toUpperCase()) returnArray.push(Number(i));
    }
    return returnArray;
};
