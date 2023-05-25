class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }
  static titleize(string) {
    const excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    const titleizedWords = string.split(' ').map((word, index) => {
      if (index === 0 || !excludedWords.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });

    return titleizedWords.join(' ');
  }
}