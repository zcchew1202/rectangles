class Rectangle {
  constructor(bottomLeft, topRight) {
    // check if points make valid rectangle
    if (!bottomLeft || !topRight) {
      console.error("A point is undefined!");
      return -1;
    }
    if (!bottomLeft.x || !bottomLeft.y) {
      console.error("Bottom left point is incomplete!");
      return -1;
    }
    if (!topRight.x || !topRight.y) {
      console.error("Top right point is incomplete!");
      return -1;
    }
    // checking bottomLeft < topRight for reactangle to be valid
    if (bottomLeft.x > topRight.x) {
      console.error("Bottom left point is to the right of top right point!");
      return -1;
    }

    if (bottomLeft.y > topRight.y) {
      console.error("Bottom left point is above the top right point!");
      return -1;
    }
    this.bottomLeft = bottomLeft;
    this.topRight = topRight;
  }
}

module.exports = Rectangle;
