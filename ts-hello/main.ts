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



import { Point } from './point'

let point = new Point(1, 2);
let x = point.x
point.y = 10;
point.draw();