export class Point2 {
    constructor(private _j?: number, private _w?: number) {        
    }

    draw() {
        console.log('j: '+ this._j + ' : ' + this._w);
    }

}