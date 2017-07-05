/*
function doSomething() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    } 

    console.log('Finally: '+ i);
}

doSomething();
*/

// types
/*
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number [] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 0;
const ColorBlue = 0;

enum Color {
    Red = 0, Green = 1, Blue = 2, Purple=3
};

let backGroundColor = Color.Green;

a = 1;
a = true;
a = 'a'
*/

//specifying the typeto get intellisense
/*
let message: string;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');
*/

// a function from js to ts
/*
let log = function(message) {
    console.log(message);
}

let doLog = (message) => {
    console.log(message);
}
*/

//defining an interface
/*
interface Point {
    x: number,
    y: number
}

let drawPoint = (point: Point) => {
    console.log('x:'+point.x);
    console.log('y:'+point.y);
}

drawPoint({
    x: 1,
    y: 2
})
*/

//Cohesion principle in ts, defining a class
/* calling Point2 from a module
import { Point2 } from './point';

class Point {
    constructor(private _x?: number, private _y?: number) {        
    }

    draw() {
        console.log('x: '+ this._x + ' y: ' + this._y);
    }

    getDistance(another: Point) {
        
    }

    get x() {
        return this._x
    }

    set x(value) {
        if (value < 0) 
            throw new Error('Value cannot be less than 0');
        
        this._x = value;
    }
}

let point = new Point(1, 2);
point.x = 10;
point.draw();

let point2 = new Point2(1, 2);
point2.draw();
*/

import { LikeComponent } from '../components/like/like.component';

let component = new LikeComponent(10, true);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);

