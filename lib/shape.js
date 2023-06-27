class Shape {
    constructor(color) {
      this.color = color;  
    }
  
    //setColor method  it accepts a color as an argument and sets the color property 
    setColor(color) { 
      this.color = color;
    }
  
    render() {
      throw new Error('Method "render" must be implemented.'); //If a subclass(circle,square,triangle) doesn't provide its own implementation of this method, calling it
    }
  }
  
  module.exports = Shape;
  
