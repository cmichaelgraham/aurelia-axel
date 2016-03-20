var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', './app', "esri/Map", "esri/views/SceneView", "esri/layers/ArcGISDynamicLayer"], function (require, exports, aurelia_framework_1, app_1, EMap, SceneView, ArcGISDynamicLayer) {
    var EsriGlobe = (function () {
        function EsriGlobe(app) {
            this.app = app;
        }
        EsriGlobe.prototype.detached = function () {
            this.app.mapVisible = false;
        };
        EsriGlobe.prototype.attached = function () {
            this.app.mapVisible = true;
            if (this.app.mapInitialized) {
                return;
            }
            this.app.mapInitialized = true;
            // Earth quake layer
            var eqLyr = new ArcGISDynamicLayer({
                url: "https://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Earthquakes/MapServer"
            });
            this.map = new EMap({
                basemap: "streets",
                layers: [eqLyr]
            });
            this.view = new SceneView({
                container: "globe",
                camera: { tilt: 80 },
                map: this.map,
                scale: 10000000,
                center: [-101.17, 21.78]
            });
        };
        EsriGlobe = __decorate([
            aurelia_framework_1.inject(app_1.App), 
            __metadata('design:paramtypes', [app_1.App])
        ], EsriGlobe);
        return EsriGlobe;
    })();
    exports.EsriGlobe = EsriGlobe;
});
//# sourceMappingURL=esri-globe.js.map