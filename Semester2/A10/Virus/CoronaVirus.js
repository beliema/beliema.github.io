var L09_Virus;
(function (L09_Virus) {
    class CoronaVirus {
        constructor(_size, _position) {
            console.log("erstellen CoronaVirus");
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Virus.Vector(100, 150);
            this.velocity = new L09_Virus.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        moveCorona(_timeslice) {
        }
    }
    L09_Virus.CoronaVirus = CoronaVirus;
})(L09_Virus || (L09_Virus = {}));
//# sourceMappingURL=CoronaVirus.js.map