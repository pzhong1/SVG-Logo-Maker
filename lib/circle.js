const Shape = require('./shape'); // import shape from shape.js file

// create circle class and extends to parent class shape
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="110" r="90" fill="${this.color}" />`; // x, y radius 
  }
}

module.exports = Circle;
