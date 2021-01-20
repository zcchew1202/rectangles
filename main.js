const Point = require("./point.js");
const Rectangle = require("./rectangle.js").Rectangle;
const validateRectangle = require("./rectangle.js").validateRectangle;
let bottomLeft1 = new Point(4,2);
let topRight1 = new Point(6,9)
let rectangleA = new Rectangle(bottomLeft1, topRight1);

function getIntersect(rectangleA, rectangleB) {
    // only works with normalized rectangles
    const [rectangle1, rectangle2] = normalizeRectangles(rectangleA, rectangleB);
    leftIntersectX = Math.max(rectangle1.bottomLeft.x, rectangle2.bottomLeft.x);
    leftIntersectY = Math.max(rectangle1.bottomLeft.y, rectangle2.bottomLeft.y);
    leftIntersect = new Point(leftIntersectX, leftIntersectY);
    
    rightIntersectX = Math.min(rectangle1.topRight.x, rectangle2.topRight.x);
    rightIntersectY = Math.min(rectangle1.topRight.y, rectangle2.topRight.y);
    rightIntersect = new Point(rightIntersectX, rightIntersectY);
    // check if rectangles are adjacent
    let intersection = {};
    let checkIntersect = true;
    if(validateRectangle(leftIntersect, rightIntersect, checkIntersect)) {
        intersection.leftIntersect = leftIntersect;
        intersection.rightIntersect = rightIntersect;
        intersection.isAdjacent = false;
        if(leftIntersect.x === rightIntersect.x || leftIntersect.y === rightIntersect.y) {
            console.log("rectangles are adjacent!");
            intersection.isAdjacent = true;
        }
        return intersection;
    }
    console.log("No intersection found");
    return null;
}

// normalize rectangles such that points in rectangle1 < points in rectangle2
function normalizeRectangles(rectangleA, rectangleB) {
    let bottomLeft1 = new Point(Math.min(rectangleA.bottomLeft.x, rectangleB.bottomLeft.x), Math.min(rectangleA.bottomLeft.y, rectangleB.bottomLeft.y));
    let topRight1 = new Point(Math.min(rectangleA.topRight.x,rectangleB.topRight.x), Math.min(rectangleA.topRight.y,rectangleB.topRight.y));
    let rectangle1 = new Rectangle(bottomLeft1, topRight1);

    let bottomLeft2 = new Point(Math.max(rectangleA.bottomLeft.x, rectangleB.bottomLeft.x), Math.max(rectangleA.bottomLeft.y, rectangleB.bottomLeft.y));
    let topRight2 = new Point(Math.max(rectangleA.topRight.x,rectangleB.topRight.x), Math.max(rectangleA.topRight.y,rectangleB.topRight.y));
    let rectangle2 = new Rectangle(bottomLeft2, topRight2);
    return [rectangle1, rectangle2];
}

module.exports = {getIntersect: getIntersect};