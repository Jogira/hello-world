// function log(message) {
//     console.log(message);
// }
// var message = 'Hello world.'
// log(message);
// function doSomething() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i)
//     }
//     console.log("Finally:" + i);
// }
// doSomething();
// let a: number;
// a = 1;
// a = true;
// a = 'a';
// enum Colors { Red = 0, Green = 1, Blue = 2 };
// let backgroundColors = Color.Red;
// let message ='abc'
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c')
// let alternativeWay = (message as string).endsWith('c');
// let log = function(message) {
//     console.log(message);
// }
// let doLog = (message) => console.log(message);
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
