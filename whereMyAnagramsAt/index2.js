// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
//
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
//
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
//
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
    var letterMap = letterCount(word);
    var returnArray = [];

    function letterCount(word) {
        // add count of each letter in word to count
        var count = {};
        word.split('').forEach(function(i) {
            (!count.hasOwnProperty(i)) ? count[i] = 1: count[i]++;
        });
        return count;
    }

    function compareWords(word, word1, word2) {
        // compare the counts of the properties of word1 and word2 against
        // the letters in word
        for (i in word) {
            if (word1[word[i]] !== word2[word[i]]) {
                return false;
            }
        }
        return true;
    }

    words.forEach(function(arrayWord) {
        // first check to see if the word lengths match
        if (word.length === arrayWord.length) {
            var wordMap = letterCount(arrayWord);
            // if word and arrayWord are anagrams, add arrayWord to returnArray
            if (compareWords(word, letterMap, wordMap)) {
                returnArray.push(arrayWord);
            }
        }
    });

    return returnArray;
}
