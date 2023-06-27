//JEST testing (npm test)
//import all three subclasses
const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');

//shapes(triangle,circle,square)
describe('Shapes', () => {

  //triangle
  describe('Triangle', () => {
    it('return SVG ', () => {
      const triangle = new Triangle(' ');
      expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill=" " />');
    });
  });

  //circle
  describe('Circle', () => {
    it('return SVG', () => {
      const circle = new Circle(' ');
      expect(circle.render()).toEqual('<circle cx="150" cy="110" r="90" fill=" " />');
    });
  });

  //square
  describe('Square', () => {
    it('return SVG', () => {
      const square = new Square(' ');
      expect(square.render()).toEqual('<rect width="300" height="200" fill=" " />');
    });
  });
});
