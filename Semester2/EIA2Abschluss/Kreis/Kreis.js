var AS_Zauberbild;
(function (AS_Zauberbild) {
    class Kreis extends AS_Zauberbild.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new AS_Zauberbild.Vector(0, 0);
            this.velocity = new AS_Zauberbild.Vector(0, 0);
            this.velocity = AS_Zauberbild.Vector.getRandom(5, 10);
            this.radius = 20;
        }
    }
    AS_Zauberbild.Kreis = Kreis;
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=Kreis.js.map