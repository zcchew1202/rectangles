const Point = require("./point.js");
const Rectangle = require("./rectangle.js").Rectangle;
const validateRectangle = require("./rectangle.js").validateRectangle;
let bottomLeft1 = new Point(4,2);
let topRight1 = new Point(6,9)
let rectangleA = new Rectangle(bottomLeft1, topRight1);

function getIntersect(rectangleA, rectangleB) {
    leftIntersectX = Math.max(rectangleA.bottomLeft.x, rectangleB.bottomLeft.x);
    leftIntersectY = Math.max(rectangleA.bottomLeft.y, rectangleB.bottomLeft.y);
    leftIntersect = new Point(leftIntersectX, leftIntersectY);
    
    rightIntersectX = Math.max(rectangleA.topRight.x, rectangleB.topRight.x);
    rightIntersectY = Math.max(rectangleA.topRight.y, rectangleB.topRight.y);
    rightIntersect = new Point(rightIntersectX, rightIntersectY);
    // check if rectangles are adjacent
    if(validateRectangle(leftIntersect, rightIntersect)) {
        if(leftIntersect.x === rightIntersect.x || leftIntersect.y === rightIntersect.y) {
            console.log("rectangles are adjacent!")
        }
    }
}

module.exports = getIntersect;