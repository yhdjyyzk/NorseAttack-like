import L from 'leaflet';
// import Proj4Leaflet from 'proj4leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css';

export default class Map {
    constructor(opts) {
        this.dom = opts.dom;
        this.tileLayer = opts.tileLayer || 'http://mt2.google.cn/vt/lyrs=y@258000000&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=Ga';//默认google卫星地图
    }

    render() {
        let { width, height } = getComputedStyle(this.dom);

        var crs = new L.Proj.CRS('EPSG:3395',
            '+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs',
            {
                resolutions: function () {
                    let level = 19
                    var res = [];
                    res[0] = Math.pow(2, 18);
                    for (var i = 1; i < level; i++) {
                        res[i] = Math.pow(2, (18 - i))
                    }
                    return res;
                }(),
                origin: [0, 0],
                bounds: L.bounds([20037508.342789244, 0], [0, 20037508.342789244])
            });


        let map = L.map(this.dom, {
            renderer: 'canvas',
            minZoom: 2,
            crs: crs
        }).setView([15, 15], 2);

        L.tileLayer(this.tileLayer, {
            maxZoom: 18,
            minZoom: 3,
            subdomains: [0, 1, 2],
            tms: true
        }).addTo(map);

        map.invalidateSize(true);

        return map;
    }
}