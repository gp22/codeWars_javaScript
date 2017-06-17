'use strict';

function findWord(num_let, max_ssw) {
  let biggestSsw = 0;
  const qualifiedWords = [];

  function ssw(string) {
    let ssw = 0;
    for (c of string) {
      ssw += c.charCodeAt();
    }
    return ssw;
  }

  for (let word of wordList) {
    if (word.length === num_let) {
      const currentSsw = ssw(word);

      if (currentSsw <= max_ssw) {
        if (currentSsw > biggestSsw) {
          biggestSsw = currentSsw;
          qualifiedWords.length = 0;
          qualifiedWords.push(word);
        } else if (currentSsw === biggestSsw) {
          qualifiedWords.push(word);
        }
      }
    }
  }

  const length = qualifiedWords.length;
  return length > 0 ? qualifiedWords[length-1] : null;
}
