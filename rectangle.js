class Rectangle {
  constructor(bottomLeft, topRight) {
    // check if points make valid rectangle
    if(!validateRectangle(bottomLeft, topRight)) {
      return -1;
    }
    this.bottomLeft = bottomLeft;
    this.topRight = topRight;
  }
}
function validateRectangle(bottomLeft, topRight) {
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
  // what if bottomLeft === topRight?
  if (bottomLeft.y === topRight.y && bottomLeft.x === topRight.x) {
      console.error("The rectangles points are the same!")
      return false;
  }
  return true;
}

module.exports = {Rectangle: Rectangle, validateRectangle: validateRectangle};
