import L from 'leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css';

export default class Map {
    constructor(opts) {
        this.dom = opts.dom;
        this.tileLayer = opts.tileLayer || 'http://mt2.google.cn/vt/lyrs=y@258000000&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=Ga';//默认google卫星地图
    }

    render() {
        let { width, height } = getComputedStyle(this.dom);

        let map = L.map(this.dom, {
            renderer: 'canvas',
            minZoom: 2
        }).setView([15, 15], 2);

        L.tileLayer(this.tileLayer).addTo(map);

        map.invalidateSize(true);

        return map;
    }
}