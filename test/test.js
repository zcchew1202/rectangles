const assert = require("assert");
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
        let bottomLeft =  new Point(undefined,2);
        let topRight = new Point(2,4);
      assert.strictEqual(validateRectangle(bottomLeft,topRight), false);
    });
    it("should return false when top right point is undefined", function () {
        let bottomLeft = new Point(2,4);
        let topRight =  new Point(2,undefined);
      assert.strictEqual(validateRectangle(bottomLeft,topRight), false);
    });
  });
});
