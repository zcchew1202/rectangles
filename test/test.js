const assert = require("chai").assert;
const Point = require("../point.js");
const Rectangle = require("../rectangle.js").Rectangle;
const validateRectangle = require("../rectangle.js").validateRectangle;
const getIntersect = require("../main.js").getIntersect;

describe("validate rectangle", function () {
    describe("1. undefined points", function () {
        it("should return false when any input point is undefined", function () {
            assert.strictEqual(validateRectangle(), false);
        });
    });
    describe("2. x or y values are undefined", function () {
        it("should return false when bottom left point is undefined", function () {
            let bottomLeft = new Point(undefined, 2);
            let topRight = new Point(2, 4);
            assert.isFalse(validateRectangle(bottomLeft, topRight));
        });
        it("should return false when top right point is undefined", function () {
            let bottomLeft = new Point(2, 4);
            let topRight = new Point(2, undefined);
            assert.isFalse(validateRectangle(bottomLeft, topRight));
        });
    });
    describe("3. Rectangle is legit", function () {
        it("should return true", function () {
            let bottomLeft = new Point(4, 2);
            let topRight = new Point(9, 7.1);
            assert.isTrue(validateRectangle(bottomLeft, topRight));
        });
    });
});

describe("get intersection points", function () {
    describe("1. rectangles intersect but not adjacent", function () {
        it("should return intersection points and isAdjacent is false", function () {
            let bottomLeftA = new Point(4, 2);
            let topRightA = new Point(9, 7.1);
            let rectangleA = new Rectangle(bottomLeftA, topRightA);

            let bottomLeftB = new Point(1, 5);
            let topRightB = new Point(6, 10);
            let rectangleB = new Rectangle(bottomLeftB, topRightB);
            assert.isFalse(getIntersect(rectangleA, rectangleB).isAdjacent, "no intersection found");
        });
    });
    describe("2. rectangles don't intersect", function () {
        it("should return intersection points", function () {
            let bottomLeftA = new Point(6, 9);
            let topRightA = new Point(12, 20);
            let rectangleA = new Rectangle(bottomLeftA, topRightA);

            let bottomLeftB = new Point(8, 0);
            let topRightB = new Point(16, 7);
            let rectangleB = new Rectangle(bottomLeftB, topRightB);
            assert.isNull(getIntersect(rectangleA, rectangleB), "intersection found");
        });
    });
    describe("3. rectangles intersect and are adjacent", function () {
        it("should return intersection points & isAdjacent is true", function () {
            let bottomLeftA = new Point(4, 2);
            let topRightA = new Point(9, 7.1);
            let rectangleA = new Rectangle(bottomLeftA, topRightA);

            let bottomLeftB = new Point(9, 5);
            let topRightB = new Point(10, 10);
            let rectangleB = new Rectangle(bottomLeftB, topRightB);
            assert.isTrue(getIntersect(rectangleA, rectangleB).isAdjacent, "adjacency found");
        });
    });
describe("Containment", function () {
    describe("1. rectangle contains another rectangle", function () {
        it("should return true", function () {
            let bottomLeftA = new Point(-4, -2);
            let topRightA = new Point(9, 7.1);
            let rectangleA = new Rectangle(bottomLeftA, topRightA);

            let bottomLeftB = new Point(2, 4);
            let topRightB = new Point(6, 7.1);
            let rectangleB = new Rectangle(bottomLeftB, topRightB);
            assert.isTrue(rectangleA.contains(rectangleB), "rectangle A contains B");
        });
    });
    describe("2. rectangle doesn't contain another rectangle", function () {
        it("should return false", function () {
            let bottomLeftA = new Point(4, 2);
            let topRightA = new Point(9, 7.1);
            let rectangleA = new Rectangle(bottomLeftA, topRightA);

            let bottomLeftB = new Point(9, 5);
            let topRightB = new Point(10, 10);
            let rectangleB = new Rectangle(bottomLeftB, topRightB);
            assert.isFalse(rectangleA.contains(rectangleB), "rectangle A doesn't contain B");
        });
    });
})

    
});
