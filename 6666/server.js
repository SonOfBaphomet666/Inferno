
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this,height = height;
    this.calculateArea = function() {
        return this.width * this.height;
    }
  }
}

let myRectangle = new Rectangle(5, 6);
console.log(myRectangle.calculateArea());   
