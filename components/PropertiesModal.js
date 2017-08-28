Vue.component('properties-modal', {

    template: `
        <b-modal id="properties-modal" title="Propriedades..." @ok="submit" @shown="setValues" closeTitle="Cancelar"> 
            <div class="modal-body">
                <div class="form-group">
                    <label>Borda</label>
                    <br>
                    <input type="color" v-model="stroke" @change="setMustStrokeSelected">
                    <input class="custom-checkbox form-control-lg" type="checkbox" v-model="mustStroke"/>
                    <br>
                    <label>Preenchimento</label>
                    <br>
                    <input type="color" v-model="fill" @change="setMustFillSelected">
                    <input class="custom-checkbox form-control-lg" type="checkbox" v-model="mustFill"/>
                </div>
            </div>
        </b-modal>
        `,

    data: function () {
        return {
            stroke: Colors.DEFAULT,
            fill: '#ffffff',
            mustStroke: true,
            mustFill: false

        };
    },

    methods: {
        setMustFillSelected() {
            this.mustFill = true;
        },
        setMustStrokeSelected() {
            this.mustStroke = true;
        },
        submit () {
            drawInterface.selectedPolygon.polygon.setStrokeColor(this.stroke);
            drawInterface.selectedPolygon.polygon.setFillColor(this.fill);
            drawInterface.selectedPolygon.polygon.setMustStroke(this.mustStroke);
            drawInterface.selectedPolygon.polygon.setMustFill(this.mustFill);
            drawInterface.redraw();
        },
        setValues () {
            this.stroke = drawInterface.selectedPolygon.polygon.getStrokeColor();
            this.fill = drawInterface.selectedPolygon.polygon.getFillColor();
            this.mustStroke = drawInterface.selectedPolygon.polygon.shouldStroke();
            this.mustFill = drawInterface.selectedPolygon.polygon.shouldFill();
        }
    }
});