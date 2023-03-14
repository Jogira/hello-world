export class Point {

    draw() {
        console.log("X: " + this._x + ", Y: " + this._y)
    }

    constructor(private _x?: number, private _y?: number) {
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    set x(value) {
        if (value < 0)
            throw new Error('Value cannot be less than 0.');

        this._x = value;
    }

    set y(value) {
        if (value < 0)
            throw new Error('Value cannot be less than 0.');

        this._y = value;
    }
}
