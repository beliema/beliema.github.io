var AS_Zauberbild;
(function (AS_Zauberbild) {
    class Rotation {
        constructor(_position) {
            this.expendable = false;
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new AS_Zauberbild.Vector(0, 0);
            this.velocity = new AS_Zauberbild.Vector(0, 0);
        }
    }
    AS_Zauberbild.Rotation = Rotation;
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=Rotation.js.map