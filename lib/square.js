const Shape = require('./shape');

class Square extends Shape {
  render() {
    return `<rect width="300" height="200" fill="${this.color}" />`;
  }
}

module.exports = Square;
