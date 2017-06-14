function unscramble(scramble) {
    function hash(string) {
      let hash = 0;
      for (c of string) {
        hash += c.charCodeAt() * c.charCodeAt() * (c.charCodeAt() - 26);
      }
      return hash;
    }
    const returnArray = [];
    const hashOfScramble = hash(scramble);
    
    for (s of wordList) {
      const hashOfS = hash(s);
      hashOfS === hashOfScramble ? returnArray.push(s) : null;
    }
    
    return returnArray;
}
