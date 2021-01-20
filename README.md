# rectangles
Checks for intersections & containment between rectangles using classes
Simply clone/download this repo & copy `main.js`, `point.js`, `rectangle.js`to a directory of choice
## Usage
### Initialization
First, we need to instantiate point and rectangle classes like the following:
```
const Point = require("<path>/point.js");
const Rectangle = require("<path>/rectangle.js").Rectangle;
let bottomLeft = new Point(4, 2);
let topRight = new Point(9, 7);
let rectangle = new Rectangle(bottomLeft, topRightA);
```
`Point`is initialized as `Point(<x-coordinate>, <y-coordinate>)`
`Rectangle` validates the input points at initialization & will be empty in these conditions:
- Bottom left point is above or to the right of top right corner and vice versa
- Points are not numbers
- Bottom left and top right points share x or y coordinates
- Empty/undefined inputs

### Getting intersection points and checking adjacency
```
// rectangleA & rectangleB are of the Rectangle class
getIntersect(rectangleA, rectangleB);
```
`getIntersect` returns an object:
```
{
  leftIntersect: <Point>,
  rightIntersect: <Point>,
  isAdjacent: <boolean>
}
```
Object will be empty if rectangles do not intersect
`isAdjacent`is `true` if rectangles are adjacent, `false` otherwise

### Checking if a rectangle contains another
```
// contains() is a class method of Rectangle
rectangleA.contains(rectangleB);
```
returns `true` if rectangleA contains rectangleB, `false` otherwise


## Testing
1. Tests are located in `test/test.js`
2. To run tests: `npm test`
