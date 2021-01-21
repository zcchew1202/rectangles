class Rectangle {
  constructor(bottomLeft, topRight) {
    // check if points make valid rectangle
    if (!validateRectangle(bottomLeft, topRight)) {
      console.error("invalid rectangle")
      return false;
    }
    this.bottomLeft = bottomLeft;
    this.topRight = topRight;
  }
  // we assume contains includes the boundary, i.e the borders overlap
  // also seems more intuitive to be relative, hence contains() being a class method
  contains(Rectangle) {
    return (this.bottomLeft.x <= Rectangle.bottomLeft.x &&
      this.bottomLeft.y <= Rectangle.bottomLeft.y) &&
      (this.topRight.x >= Rectangle.topRight.x && this.topRight.y >= Rectangle.topRight.y);
  }
}
function validateRectangle(bottomLeft, topRight, checkIntersect) {
  let checkIntersection = checkIntersect || false;
  if (!bottomLeft || !topRight) {
    console.error("A point is undefined!");
    return false;
  }
  if (typeof bottomLeft.x !== "number" || typeof bottomLeft.y !== "number") {
    console.error("Bottom left point is incomplete!");
    return false;
  }
  if (typeof topRight.x !== "number" || typeof topRight.y !== "number") {
    console.error("Top right point is incomplete!");
    return false;
  }
  // checking bottomLeft < topRight for reactangle to be valid
  if (bottomLeft.x > topRight.x) {
    console.error("Bottom left point is to the right of top right point!");
    return false;
  }

  if (bottomLeft.y > topRight.y) {
    console.error("Bottom left point is above the top right point!");
    return false;
  }
  // if the 2 points share coords, it's either a line or point, not a rectangle
  if (bottomLeft.y === topRight.y || bottomLeft.x === topRight.x) {
    console.error("The rectangles points are a line/point!")
    if(checkIntersection) {
      return true;
    }
    return false;
  }
  return true;
}

module.exports = { Rectangle: Rectangle, validateRectangle: validateRectangle };
