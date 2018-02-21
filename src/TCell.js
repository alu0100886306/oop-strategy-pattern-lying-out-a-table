class TCell {
  constructor(text) {
    this.text = text.split("\n");
  }

  draw(width, height) {
    return this.getContent(width, height);
  };

  getContent(width, height) {
    let result = [];
    for (let i = 0; i < height; i++) {
      let line = this.text[i] || "";
      result.push(line + " ".repeat(width - line.length));
    }

    return result;
  }

  minWidth() {
    return this.text.reduce(function(width, line) {
      return Math.max(width, line.length);
    }, 0);
  }

  minHeight() {
    return this.text.length;
  };
}

module.exports = TCell