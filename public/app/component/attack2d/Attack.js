import $ from 'jquery';
import AnimatePoints from '../../graphic/2d/AnimatePoint';
import AttackLine from '../../graphic/2d/AttackLine';
import Config from '../../Config';
import Link from '../../graphic/2d/Link';
import Map from '../../map/map';
import Symbol from '../../graphic/2d/Symbol';
import Tail from '../../graphic/2d/Tail';
import querystring from 'querystring';
import zrender from 'zrender/src/zrender';
import RadialGradient from 'zrender/src/graphic/RadialGradient';
import React, { PureComponent } from 'react';
import './attack.scss';

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.zr = null;
        this.map = null;

        this._drawMap = this._drawMap.bind(this);
        this._drawAttack = this._drawAttack.bind(this);
        this._receiveData = this._receiveData.bind(this);
        this._windowResize = this._windowResize.bind(this);
    }

    componentDidMount() {
        this._drawMap();

        let attack = getComputedStyle(this.refs.attack);

        this.zr = zrender.init(this.refs.attack, {
            width: attack['width'],
            height: attack['height']
        });

        this._drawAttack();
        this._receiveData();

        window.addEventListener('resize', this._windowResize);
    }

    componentDidUpdate(prevProps, prevState) {
        // this.componentDidMount(); //测试方便
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._windowResize);
    }

    render() {
        return (
            <div ref='map' className='map'>
                <div ref="attack" className='attack'></div>
            </div>
        );
    }

    /**
     * 绘制地图.
     */
    _drawMap() {
        // 地图瓦片风格
        let tileLayer = {
            'Google Satellite': 'http://mt2.google.cn/vt/lyrs=y@258000000&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=Ga',
            'Mapbox Dark': 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2luZHloIiwiYSI6ImNpbHdiazZyazAxcTV2Z2tzbnNwcG1xbTMifQ.jz162pjSUZ957Vv_wP6i1A',
            'Mapbox Traffic Day': 'https://api.mapbox.com/styles/v1/mapbox/traffic-day-v2/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2luZHloIiwiYSI6ImNpbHdiazZyazAxcTV2Z2tzbnNwcG1xbTMifQ.jz162pjSUZ957Vv_wP6i1A',
            'Mapbox Light': 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2luZHloIiwiYSI6ImNpbHdiazZyazAxcTV2Z2tzbnNwcG1xbTMifQ.jz162pjSUZ957Vv_wP6i1A',
            'Mapbox Traffic Night': 'https://api.mapbox.com/styles/v1/mapbox/traffic-night-v2/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2luZHloIiwiYSI6ImNpbHdiazZyazAxcTV2Z2tzbnNwcG1xbTMifQ.jz162pjSUZ957Vv_wP6i1A',
            'Mapbox Outdoors': 'https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2luZHloIiwiYSI6ImNpbHdiazZyazAxcTV2Z2tzbnNwcG1xbTMifQ.jz162pjSUZ957Vv_wP6i1A'
        };

        this.map = new Map({
            dom: this.refs.map,
            tileLayer: tileLayer['Mapbox Traffic Night']
        }).render();

        this.map.on('move', (event) => {
            if (this.zr) { //每次重绘  清空界面.
                this.zr.clear();
            }

            this._drawAttack();
        });
    }

    /**
     * 绘制attack
     */
    _drawAttack() {
        let pixel = [0, 0];
        let node = [];

        for (let k of Object.keys(this.props.nodes)) {
            pixel = this.map.latLngToContainerPoint([this.props.nodes[k]['lat'], this.props.nodes[k]['lng']]);
            node.push(
                {
                    x: pixel.x,
                    y: pixel.y,
                    r: this.props.nodes[k]['count'] / 10
                }
            );
        }

        for (let i = 0; i < node.length; i++) {
            let points = new AnimatePoints({
                r: node[i].r,
                x: node[i].x,
                y: node[i].y,
                lineWidth: 1,
                fill: Config.gradient,
                loop: true
            }).render();

            this.zr.add(points);
        }

        let curveness = 0.2;
        let links = [];

        // 生成连接.
        for (let i = 0; i < this.props.edges.length; i++) {
            let fromPixel = this.map.latLngToContainerPoint([this.props.edges[i]['from'].lat, this.props.edges[i]['from'].lng]);
            let toPixel = this.map.latLngToContainerPoint([this.props.edges[i]['to'].lat, this.props.edges[i]['to'].lng]);

            let link = new Link({
                from: {
                    x: fromPixel.x,
                    y: fromPixel.y
                },
                to: {
                    x: toPixel.x,
                    y: toPixel.y
                },
                curveness: curveness,
                stroke: 'rgba(0, 0, 0, 0)',
            }).render();

            // 若是闭环的点, 那么就不加上去.
            if (link.shape.x1 == link.shape.x2 && link.shape.y1 == link.shape.y2) {
                continue;
            }

            links.push(link);
            this.zr.add(link);
        }

        // 生成尾焰
        for (let index = 0; index < links.length; index++) {
            let link = links[index];
            // let tail = new Tail({
            //     link: link,
            //     size: 3,
            // }).render();

            let attackLine = new AttackLine({
                link: link,
                size: 3,
                loop: true
            });

            let line = attackLine.render();
            this.zr.add(line);
        }

        // 生成symbol.
        // for (let index = 0; index < links.length; index++) {
        //     let link = links[index];
        //     let path = 'M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

        //     let symbol = new Symbol({
        //         path: path,
        //         scale: [0.03, 0.03],
        //         link: link,
        //         fill: 'rgba(255, 255, 0, 1)',
        //         loop: true
        //     }).render();

        //     this.zr.add(symbol);
        // }
    }

    /**
     * websocket.
     */
    _receiveData() {
        let _this = this;
        let wsUrl = Config.wsServer;
        let ws = new WebSocket(wsUrl);

        ws.onopen = function (event) {
            console.log(`open ws. ${new Date().getTime()}`);
        };

        ws.onmessage = function (e) {
            let { lat, lng } = querystring.parse(e.data);
            let point = _this.map.latLngToContainerPoint([lat, lng]);

            let p = new AnimatePoints({
                r: Math.random() * 10 + 10,
                x: point.x,
                y: point.y,
                lineWidth: 1,
                fill: Config.gradient,
            }).render();

            _this.zr.add(p);
        };

        ws.onclose = function () {
            console.log(`close ws ${new Date().getTime()}`);
        };
    }

    /**
     * 窗口大小改变, 重置zr大小.
     */
    _windowResize() {
        let { innerHeight, innerWidth } = window;

        if (this.zr) {
            this.zr.resize({
                width: innerHeight,
                height: innerHeight
            });
        }
    }
}