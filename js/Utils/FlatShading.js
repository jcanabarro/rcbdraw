FlatShading = function (polygon, lighting, vrp) {

    this.calculateColor = function() {
        this.L.sub(this.polygon.getCenter());
        let normOfL = this.L.distanceToVertex(this.polygon.getCenter());
        this.L.divScalar(normOfL);
        let N = this.polygon.getNormalVector();
        let magnitude = N.getMagnitude();
        N.divScalar(magnitude);
        this.nDotProductL = this.L.dotProduct(N);
        if(this.nDotProductL > 0) {
            this.R = N.multScalar(2 * this.nDotProductL);
            this.R.sub(this.L);
            this.S = vrp.sub(this.polygon.getCenter());
            let normOfS = this.S.distanceToVertex(this.polygon.getCenter());
            this.S.divScalar(normOfS);
            this.sDotProductR = this.S.dotProduct(this.R);
        }
    };

    this.getColor = function(color) {
        this.ia = this.ila * this.lighting.getKa(color);
        if(this.nDotProductL > 0) {
            this.id = this.ila * this.lighting.getKd(color) * this.nDotProductL;
            if (this.sDotProductR > 0) {
                this.is = this.ila * this.lighting.getKs(color) * Math.pow(this.sDotProductR, this.lighting.getN());
            }
        }
        return Math.ceil(this.ia + this.id + this.is);
    };

    this.ila = 150;

    this.sDotProductR = 0;

    this.nDotProductL = 0;

    this.L = new Vertex(0, 0, 100);

    this.polygon = polygon;

    this.is = 0;

    this.ia = 0;

    this.S = null;

    this.R = null;

    this.id = 0;

    this.vrp = vrp;

    this.lighting = lighting;

    this.calculateColor();
};