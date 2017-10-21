function Vertex(x, y, z) {
    this.x = Math.round(x);
    this.y = Math.round(y);
    this.z = Math.round(z);

    this.getX = function () {
        return this.x;
    };

    this.getY = function () {
        return this.y;
    };

    this.getZ = function () {
        return this.z;
    };

    this.setX = function (val) {
        this.x = val;
    };

    this.setY = function (val) {
        this.y = val;
    };

    this.setZ = function (val) {
        this.z = val;
    };

    this.setCoords = function (x, y) {
        this.x = x;
        this.y = y;
        this.z = z;
    };

    this.clone = function () {
        return new Vertex(this.x, this.y);
    };

    this.invert = function () {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;

        return this;
    };

    this.distanceToVertex = function (vertex) {
        return Math.sqrt(Math.pow(vertex.getX() - this.getX(), 2) + Math.pow(vertex.getY() - this.getY(), 2));
    };

    this.distanceToEdge = function (edge) {
        let r = edge.y2 - edge.y1;
        let s = -(edge.x2 - edge.x1);
        let t = edge.x2 * edge.y1 - edge.x1 * edge.y2;
        return Math.abs(r * this.x + s * this.y + t) / Math.sqrt(Math.pow(r, 2) + Math.pow(s, 2));
    };
}