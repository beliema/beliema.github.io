var AS_Zauberbild;
(function (AS_Zauberbild) {
    class Moveable {
        constructor() {
            this.expendable = false;
        }
    }
    AS_Zauberbild.Moveable = Moveable;
    constructor(_position ?  : AS_Zauberbild.Vector);
    {
        // console.log("Moveable");
        if (_position)
            this.position = _position.copy();
        else
            this.velocity = new AS_Zauberbild.Vector(0, 0);
        this.radius = 5;
        this.velocity = new AS_Zauberbild.Vector(0, 0);
    }
    abstract;
    draw();
    void ;
    move(_timeslice, number);
    void {
        let, offset: AS_Zauberbild.Vector = this.velocity.copy(),
        offset, : .x *= _timeslice * 0.5,
        offset, : .y *= _timeslice,
        this: .position.add(offset),
        : .position.x < 0,
        this: .position.x += (AS_Zauberbild.crc2.canvas.width),
        : .position.y < 0,
        this: .position.y += AS_Zauberbild.crc2.canvas.height,
        : .position.x > (AS_Zauberbild.crc2.canvas.width),
        this: .position.x -= (AS_Zauberbild.crc2.canvas.width),
        : .position.y > AS_Zauberbild.crc2.canvas.height,
        this: .position.y -= AS_Zauberbild.crc2.canvas.height
    };
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=Moveable.js.map