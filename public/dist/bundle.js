webpackJsonp([0],{

/***/ 1026:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(397);

var _app2 = _interopRequireDefault(_app);

var _reactDom = __webpack_require__(169);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(57);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('app'));

/***/ }),

/***/ 1027:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(57);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(659);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoContainer = function (_PureComponent) {
    _inherits(InfoContainer, _PureComponent);

    function InfoContainer(props) {
        _classCallCheck(this, InfoContainer);

        return _possibleConstructorReturn(this, (InfoContainer.__proto__ || Object.getPrototypeOf(InfoContainer)).call(this, props));
    }

    _createClass(InfoContainer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                this.props.children
            );
        }
    }]);

    return InfoContainer;
}(_react.PureComponent);

exports.default = InfoContainer;

/***/ }),

/***/ 1028:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(57);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(660);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoPanel = function (_Component) {
    _inherits(InfoPanel, _Component);

    function InfoPanel(props) {
        _classCallCheck(this, InfoPanel);

        return _possibleConstructorReturn(this, (InfoPanel.__proto__ || Object.getPrototypeOf(InfoPanel)).call(this, props));
    }

    _createClass(InfoPanel, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            // let cols = (this.props.items && this.props.items.length > 0)
            //     ? Object.keys(this.props.items[0]).length : 0;

            return _react2.default.createElement(
                'div',
                { className: 'infoPanel', style: { width: this.props.width, height: this.props.height } },
                _react2.default.createElement(
                    'div',
                    { className: 'title' },
                    this.props.title
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'items' },
                    this.props.items.map(function (d, i) {
                        return _react2.default.createElement(
                            'div',
                            { key: '' + i, className: 'row' },
                            Object.keys(_this2.props.items[0]).map(function (k, i) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: '' + i, className: 'item' },
                                    d[k]
                                );
                            })
                        );
                    })
                )
            );
        }
    }]);

    return InfoPanel;
}(_react.Component);

exports.default = InfoPanel;

/***/ }),

/***/ 1029:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(167);

var _jquery2 = _interopRequireDefault(_jquery);

var _AnimatePoint = __webpack_require__(1031);

var _AnimatePoint2 = _interopRequireDefault(_AnimatePoint);

var _AttackLine = __webpack_require__(1032);

var _AttackLine2 = _interopRequireDefault(_AttackLine);

var _Config = __webpack_require__(121);

var _Config2 = _interopRequireDefault(_Config);

var _Link = __webpack_require__(395);

var _Link2 = _interopRequireDefault(_Link);

var _map = __webpack_require__(1034);

var _map2 = _interopRequireDefault(_map);

var _Symbol2 = __webpack_require__(1033);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Tail = __webpack_require__(396);

var _Tail2 = _interopRequireDefault(_Tail);

var _querystring = __webpack_require__(405);

var _querystring2 = _interopRequireDefault(_querystring);

var _zrender = __webpack_require__(785);

var _zrender2 = _interopRequireDefault(_zrender);

var _RadialGradient = __webpack_require__(342);

var _RadialGradient2 = _interopRequireDefault(_RadialGradient);

var _react = __webpack_require__(57);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(662);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_PureComponent) {
    _inherits(App, _PureComponent);

    function App(props) {
        _classCallCheck(this, App);

        var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this2.zr = null;
        _this2.map = null;

        _this2._drawMap = _this2._drawMap.bind(_this2);
        _this2._drawAttack = _this2._drawAttack.bind(_this2);
        _this2._receiveData = _this2._receiveData.bind(_this2);
        _this2._windowResize = _this2._windowResize.bind(_this2);
        return _this2;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._drawMap();

            var attack = getComputedStyle(this.refs.attack);

            this.zr = _zrender2.default.init(this.refs.attack, {
                width: attack['width'],
                height: attack['height']
            });

            // this._drawAttack();
            this._receiveData();

            window.addEventListener('resize', this._windowResize);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {}
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this._windowResize);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { ref: 'map', className: 'map' },
                _react2.default.createElement('div', { ref: 'attack', className: 'attack' })
            );
        }

        /**
         * 绘制地图.
         */

    }, {
        key: '_drawMap',
        value: function _drawMap() {
            var _this3 = this;

            // 地图瓦片风格
            var tileLayer = {
                'baidu': 'http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=pl&udt=20170624&scaler=2',
                'Google Satellite': 'http://mt2.google.cn/vt/lyrs=y@258000000&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=Ga',
                'Mapbox Dark': 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2luZHloIiwiYSI6ImNpbHdiazZyazAxcTV2Z2tzbnNwcG1xbTMifQ.jz162pjSUZ957Vv_wP6i1A',
                'Mapbox Traffic Day': 'https://api.mapbox.com/styles/v1/mapbox/traffic-day-v2/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2luZHloIiwiYSI6ImNpbHdiazZyazAxcTV2Z2tzbnNwcG1xbTMifQ.jz162pjSUZ957Vv_wP6i1A',
                'Mapbox Light': 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2luZHloIiwiYSI6ImNpbHdiazZyazAxcTV2Z2tzbnNwcG1xbTMifQ.jz162pjSUZ957Vv_wP6i1A',
                'Mapbox Traffic Night': 'https://api.mapbox.com/styles/v1/mapbox/traffic-night-v2/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2luZHloIiwiYSI6ImNpbHdiazZyazAxcTV2Z2tzbnNwcG1xbTMifQ.jz162pjSUZ957Vv_wP6i1A',
                'Mapbox Outdoors': 'https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2luZHloIiwiYSI6ImNpbHdiazZyazAxcTV2Z2tzbnNwcG1xbTMifQ.jz162pjSUZ957Vv_wP6i1A'
            };

            this.map = new _map2.default({
                dom: this.refs.map,
                // tileLayer: tileLayer['Google Satellite']
                tileLayer: tileLayer['baidu']
            }).render();

            this.map.setView([39.91349, 116.407945], 3);

            this.map.on('move', function (event) {
                if (_this3.zr) {
                    //每次重绘  清空界面.
                    _this3.zr.clear();
                }

                // this._drawAttack();
            });

            this.map.on('click', function (e) {
                console.log(e);
            });
        }

        /**
         * 绘制attack
         */

    }, {
        key: '_drawAttack',
        value: function _drawAttack() {
            var pixel = [0, 0];
            var node = [];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Object.keys(this.props.nodes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var k = _step.value;

                    pixel = this.map.latLngToContainerPoint([this.props.nodes[k]['lat'], this.props.nodes[k]['lng']]);
                    node.push({
                        x: pixel.x,
                        y: pixel.y,
                        r: this.props.nodes[k]['count'] / 5
                    });
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            for (var i = 0; i < node.length; i++) {
                var points = new _AnimatePoint2.default({
                    r: node[i].r,
                    x: node[i].x,
                    y: node[i].y,
                    lineWidth: 1,
                    fill: _Config2.default.gradient,
                    loop: true
                }).render();

                this.zr.add(points);
            }

            var links = [];

            // 生成连接，目的是为飞线生成飞行路径.
            for (var _i = 0; _i < this.props.edges.length; _i++) {
                var fromPixel = this.map.latLngToContainerPoint([this.props.edges[_i]['from'].lat, this.props.edges[_i]['from'].lng]);
                var toPixel = this.map.latLngToContainerPoint([this.props.edges[_i]['to'].lat, this.props.edges[_i]['to'].lng]);

                var link = new _Link2.default({
                    from: {
                        x: fromPixel.x,
                        y: fromPixel.y
                    },
                    to: {
                        x: toPixel.x,
                        y: toPixel.y
                    },
                    stroke: 'rgba(0, 0, 0, 0)'
                }).render();

                // 若是闭环的点, 那么就不加上去.
                if (link.shape.x1 == link.shape.x2 && link.shape.y1 == link.shape.y2) {
                    continue;
                }

                links.push(link);
                this.zr.add(link);
            }

            // 生成尾焰
            for (var index = 0; index < links.length; index++) {
                var _link = links[index];
                // let tail = new Tail({
                //     link: link,
                //     size: 3,
                // }).render();

                var attackLine = new _AttackLine2.default({
                    link: _link,
                    size: 3,
                    loop: true
                });

                var line = attackLine.render();
                this.zr.add(line);
            }

            // 生成symbol.
            // for (let index = 0; index < links.length; index++) {
            //     let link = links[index];
            //     let path = 'M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

            //     let symbol = new Symbol({
            //         path: path,
            //         scale: [0.02, 0.02],
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

    }, {
        key: '_receiveData',
        value: function _receiveData() {
            var _this = this;

            if (window.webSocket) {
                //后台触发link事件,传送关联信息.
                window.webSocket.on('link', function (data) {
                    if (!data) {
                        return;
                    }

                    var _JSON$parse = JSON.parse(data.info),
                        from = _JSON$parse.from,
                        to = _JSON$parse.to,
                        origin = _JSON$parse.origin,
                        target = _JSON$parse.target,
                        type = _JSON$parse.type,
                        live = _JSON$parse.live;

                    var fpoint = _this.map.latLngToContainerPoint([from.lat, from.lng]);
                    var tpoint = _this.map.latLngToContainerPoint([to.lat, to.lng]);

                    var fp = new _AnimatePoint2.default({
                        r: Math.random() * 10 + 10,
                        x: fpoint.x,
                        y: fpoint.y,
                        lineWidth: 1,
                        fill: _Config2.default.gradient,
                        loop: false,
                        callback: function callback() {
                            _this.zr.remove(fp);
                        }
                    }).render();

                    var tp = new _AnimatePoint2.default({
                        r: Math.random() * 10 + 10,
                        x: tpoint.x,
                        y: tpoint.y,
                        lineWidth: 1,
                        fill: _Config2.default.gradient,
                        loop: false,
                        callback: function callback() {
                            _this.zr.remove(tp);
                        }
                    }).render();

                    var link = new _Link2.default({
                        from: {
                            x: fpoint.x,
                            y: fpoint.y
                        },
                        to: {
                            x: tpoint.x,
                            y: tpoint.y
                        },
                        stroke: 'rgba(0, 0, 0, 0)'
                    }).render();

                    var flightLine = null;
                    var attackLine = new _AttackLine2.default({
                        link: link,
                        size: 3,
                        loop: false,
                        callback: function callback() {
                            _this.zr.remove(link);
                            _this.zr.remove(flightLine);
                        }
                    });

                    flightLine = attackLine.render();
                    _this.zr.add(flightLine);
                    _this.zr.add(fp);
                    _this.zr.add(tp);
                });
            }
        }

        /**
         * 窗口大小改变, 重置zr大小.
         */

    }, {
        key: '_windowResize',
        value: function _windowResize() {
            var _window = window,
                innerHeight = _window.innerHeight,
                innerWidth = _window.innerWidth;


            if (this.zr) {
                this.zr.resize({
                    width: innerWidth,
                    height: innerHeight
                });
            }
        }
    }]);

    return App;
}(_react.PureComponent);

exports.default = App;

/***/ }),

/***/ 1030:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(167);

var _jquery2 = _interopRequireDefault(_jquery);

var _echarts = __webpack_require__(240);

var _echarts2 = _interopRequireDefault(_echarts);

var _echartsGl = __webpack_require__(239);

var _echartsGl2 = _interopRequireDefault(_echartsGl);

var _react = __webpack_require__(57);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(663);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Globe = function (_PureComponent) {
    _inherits(Globe, _PureComponent);

    function Globe(props) {
        _classCallCheck(this, Globe);

        return _possibleConstructorReturn(this, (Globe.__proto__ || Object.getPrototypeOf(Globe)).call(this, props));

        // this.state={
        //     width: null,
        //     height: null
        // };

        // this._fullScreenClick = this._fullScreenClick.bind(this);
    }

    _createClass(Globe, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _echarts2.default - _echartsGl2.default;
            var series = {
                type: 'lines3D',
                name: 'airlineName',

                effect: {
                    show: true,
                    trailWidth: 5,
                    trailLength: 0.4,
                    trailOpacity: 0.6,
                    trailColor: 'rgb(30, 30, 60)'
                },

                lineStyle: {
                    width: 3,
                    color: 'rgb(50, 50, 150)',
                    // color: 'rgb(118, 233, 241)',
                    opacity: 0.1
                },
                blendMode: 'lighter',

                distanceToGlobe: 4,

                data: [[[117, 39], // 起点的经纬度坐标
                [117, 10]] // 终点的经纬度坐标
                ]
            };

            var chart = _echarts2.default.init(this.refs.globe);

            chart.setOption({
                backgroundColor: '#000',
                globe: {
                    baseTexture: "../../../data/world.topo.bathy.200401.jpg",
                    displacementScale: 0.04,
                    shading: 'realistic',
                    realisticMaterial: {
                        roughness: 0.9
                    },
                    postEffect: {
                        enable: true
                    },
                    light: {
                        main: {
                            intensity: 5,
                            shadow: true
                        },
                        ambientCubemap: {
                            diffuseIntensity: 0.2
                        }
                    }
                },
                series: series
            });

            window.onresize = chart.resize;

            window.addEventListener('keydown', function () {
                chart.dispatchAction({
                    type: 'lines3DToggleEffect',
                    seriesIndex: 0
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('div', { ref: 'globe', className: 'globe' })
            );
        }

        // _fullScreenClick(){
        //     // console.log("=============")
        //     let {innerWidth, innerHeight}= window
        //     console.log(innerHeight, innerWidth)
        //     this.setState({
        //         width: innerWidth,
        //         height: innerHeight
        //     });
        // }

    }]);

    return Globe;
}(_react.PureComponent);

exports.default = Globe;

/***/ }),

/***/ 1031:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Config = __webpack_require__(121);

var _Config2 = _interopRequireDefault(_Config);

var _Circle = __webpack_require__(344);

var _Circle2 = _interopRequireDefault(_Circle);

var _Group = __webpack_require__(112);

var _Group2 = _interopRequireDefault(_Group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimatePoint = function () {
   function AnimatePoint(opts) {
      _classCallCheck(this, AnimatePoint);

      this.r = opts['r'] || 0;
      this.x = opts['x'] || 0;
      this.y = opts['y'] || 0;
      this.fill = opts['fill'] || 'rgba(255, 255, 0, 1)';
      this.lineWidth = opts['lineWidth'] || 2;
      this.during = opts['during'] || _Config2.default.pointAnimateDuring;
      this.loop = opts['loop'];
      this.callback = opts['callback'] || function () {};
   }

   _createClass(AnimatePoint, [{
      key: 'render',
      value: function render() {
         var outterCircleNum = 3; // 动态环的个数
         var maxRaduis = this.r * 3; //外环最大半径
         var g = new _Group2.default();

         // for(let index = 0; index < outterCircleNum; index++) {
         // let centerPoint = new Circle({
         //     shape: {
         //         cx: this.x,
         //         cy: this.y,
         //         // r: this.r
         //         r: 0
         //     },
         //     style: {
         //         fill: this.fill,
         //         stroke: 'none'
         //     }
         // });

         // centerPoint.animateShape(this.loop)
         //     .delay(index / outterCircleNum * this.during)
         //     .when(this.during, {
         //         r: this.r
         //     })
         //     .start(Config.animationEasing)
         //     .done(this.callback);

         // centerPoint.animateStyle(this.loop)
         //     .delay(index / outterCircleNum * this.during)
         //     .when(this.during - 200, {
         //         opacity: 1
         //     })
         //     .when(this.during, {
         //         opacity: 0
         //     })
         //     .start(Config.animationEasing)
         //     .done(this.callback);

         // g.add(centerPoint);
         // }

         // 生成环
         for (var index = 0; index < outterCircleNum; index++) {
            var circleShape = new _Circle2.default({
               shape: {
                  cx: this.x,
                  cy: this.y,
                  r: this.r
               },
               style: {
                  fill: 'none',
                  stroke: this.fill,
                  lineWidth: this.lineWidth
               },
               hoverable: false
            });

            circleShape.animateShape(this.loop).when(this.during, {
               r: maxRaduis
            }).delay(this.during / outterCircleNum * index).start(_Config2.default.animationEasing).done(this.callback);

            circleShape.animateStyle(this.loop).when(this.during, {
               opacity: 0,
               lineWidth: 3
            }).delay(this.during / outterCircleNum * index).start(_Config2.default.animationEasing).done(this.callback);

            g.add(circleShape);
         }

         return g;
      }
   }]);

   return AnimatePoint;
}();

exports.default = AnimatePoint;

/***/ }),

/***/ 1032:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Tail2 = __webpack_require__(396);

var _Tail3 = _interopRequireDefault(_Tail2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AttackLine = function (_Tail) {
    _inherits(AttackLine, _Tail);

    function AttackLine(opts) {
        _classCallCheck(this, AttackLine);

        var _this = _possibleConstructorReturn(this, (AttackLine.__proto__ || Object.getPrototypeOf(AttackLine)).call(this, opts));

        _this.displayName = 'AttackLine';
        return _this;
    }

    return AttackLine;
}(_Tail3.default);

exports.default = AttackLine;

/***/ }),

/***/ 1033:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Config = __webpack_require__(121);

var _Config2 = _interopRequireDefault(_Config);

var _Group = __webpack_require__(112);

var _Group2 = _interopRequireDefault(_Group);

var _path = __webpack_require__(783);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _Symbol = function () {
   function _Symbol(opts) {
      _classCallCheck(this, _Symbol);

      this.path = opts['path'] || '';
      this.scale = opts['scale'] || [1, 1];
      this.lineWidth = opts['lineWidth'] || 1;
      this.stroke = opts['stroke'] || 'rgba(255, 255, 0, 1)';
      this.fill = opts['fill'] || 'rgba(255, 255, 0, 0.3)';
      this.link = opts['link'] || null; // null的时候仅生成symbol.
      this.during = opts['during'] || _Config2.default.animationDefaultDuring;
      this.loop = opts['loop'];
      this.callback = opts['callback'];
   }

   _createClass(_Symbol, [{
      key: 'render',
      value: function render() {
         var _this = this;

         var symbol = _path2.default.createFromString(this.path, {
            style: {
               lineWidth: this.lineWidth,
               stroke: this.stroke,
               fill: this.fill
            },
            scale: this.scale
         });

         var _symbol$getBoundingRe = symbol.getBoundingRect(),
             x = _symbol$getBoundingRe.x,
             y = _symbol$getBoundingRe.y,
             width = _symbol$getBoundingRe.width,
             height = _symbol$getBoundingRe.height;

         symbol.position = [-x * this.scale[0] - width * this.scale[0] / 2, -y * this.scale[1] - height * this.scale[1] / 2];
         var g = new _Group2.default();
         g.add(symbol);

         if (this.link) {
            g.animate('', this.loop).when(this.during, {
               position: [1, 0]
            }).during(function (i, t) {
               var pos = _this.link.pointAt(t);
               var tangent = _this.link.tangentAt(t);

               g.position = pos;
               g.rotation = -Math.PI / 2 - Math.atan2(tangent[1], tangent[0]);
            }).start(_Config2.default.animationEasing).done(this.callback);
         }

         return g;
      }
   }]);

   return _Symbol;
}();

exports.default = _Symbol;

/***/ }),

/***/ 1034:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import Proj4Leaflet from 'proj4leaflet';


var _leaflet = __webpack_require__(166);

var _leaflet2 = _interopRequireDefault(_leaflet);

__webpack_require__(657);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Map = function () {
    function Map(opts) {
        _classCallCheck(this, Map);

        this.dom = opts.dom;
        this.tileLayer = opts.tileLayer || 'http://mt2.google.cn/vt/lyrs=y@258000000&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=Ga'; //默认google卫星地图
    }

    _createClass(Map, [{
        key: 'render',
        value: function render() {
            var _getComputedStyle = getComputedStyle(this.dom),
                width = _getComputedStyle.width,
                height = _getComputedStyle.height;

            var crs = new _leaflet2.default.Proj.CRS('EPSG:3395', '+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs', {
                resolutions: function () {
                    var level = 19;
                    var res = [];
                    res[0] = Math.pow(2, 18);
                    for (var i = 1; i < level; i++) {
                        res[i] = Math.pow(2, 18 - i);
                    }
                    return res;
                }(),
                origin: [0, 0],
                bounds: _leaflet2.default.bounds([20037508.342789244, 0], [0, 20037508.342789244])
            });

            var map = _leaflet2.default.map(this.dom, {
                renderer: 'canvas',
                minZoom: 2,
                crs: crs
            }).setView([15, 15], 2);

            _leaflet2.default.tileLayer(this.tileLayer, {
                maxZoom: 18,
                minZoom: 3,
                subdomains: [0, 1, 2],
                tms: true
            }).addTo(map);

            map.invalidateSize(true);

            return map;
        }
    }]);

    return Map;
}();

exports.default = Map;

/***/ }),

/***/ 1035:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * if or not web browser support webgl. Code from Three.js.
 */

var Detector = {

    canvas: !!window.CanvasRenderingContext2D,
    webgl: function () {

        try {

            var canvas = document.createElement('canvas');return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
        } catch (e) {

            return false;
        }
    }(),
    workers: !!window.Worker,
    fileapi: window.File && window.FileReader && window.FileList && window.Blob,

    getWebGLErrorMessage: function getWebGLErrorMessage() {

        var element = document.createElement('div');
        element.id = 'webgl-error-message';
        element.style.fontFamily = 'monospace';
        element.style.fontSize = '13px';
        element.style.fontWeight = 'normal';
        element.style.textAlign = 'center';
        element.style.background = '#fff';
        element.style.color = '#000';
        element.style.padding = '1.5em';
        element.style.width = '400px';
        element.style.margin = '5em auto 0';

        if (!this.webgl) {

            element.innerHTML = window.WebGLRenderingContext ? ['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join('\n') : ['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join('\n');
        }

        return element;
    },

    addGetWebGLMessage: function addGetWebGLMessage(parameters) {

        var parent, id, element;

        parameters = parameters || {};

        parent = parameters.parent !== undefined ? parameters.parent : document.body;
        id = parameters.id !== undefined ? parameters.id : 'oldie';

        element = Detector.getWebGLErrorMessage();
        element.id = id;

        parent.appendChild(element);
    }

};

// browserify support
if (( false ? 'undefined' : _typeof(module)) === 'object') {

    module.exports = Detector;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(314)(module)))

/***/ }),

/***/ 1036:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MathUtil = function () {
   function MathUtil() {
      _classCallCheck(this, MathUtil);
   }

   /**
    * @param curveness > 0 and < 1;
    */


   _createClass(MathUtil, null, [{
      key: "getCurvenessPoint",
      value: function getCurvenessPoint(from, to) {
         var median = {
            x: (from.x + to.x) / 2,
            y: (from.y + to.y) / 2
         };

         var d = Math.sqrt(Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2));
         d = from.y > to.y ? -d : d;
         var k = -(from.x - to.x) / (from.y - to.y); // slope.

         // Calculate control point.
         var x = median.x + d / 4 * Math.cos(Math.atan(k));
         var y = median.y + d / 4 * Math.sin(Math.atan(k));

         return {
            x: x,
            y: y
         };
      }
   }]);

   return MathUtil;
}();

exports.default = MathUtil;

/***/ }),

/***/ 1037:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Group是一个容器，可以插入子节点，Group的变换也会被应用到子节点上
 * @module zrender/graphic/Group
 * @example
 *     var Group = require('zrender/container/Group');
 *     var Circle = require('zrender/graphic/shape/Circle');
 *     var g = new Group();
 *     g.position[0] = 100;
 *     g.position[1] = 100;
 *     g.add(new Circle({
 *         style: {
 *             x: 100,
 *             y: 100,
 *             r: 20,
 *         }
 *     }));
 *     zr.add(g);
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var zrUtil = __webpack_require__(33);
    var Element = __webpack_require__(331);
    var BoundingRect = __webpack_require__(90);

    /**
     * @alias module:zrender/graphic/Group
     * @constructor
     * @extends module:zrender/mixin/Transformable
     * @extends module:zrender/mixin/Eventful
     */
    var Group = function (opts) {

        opts = opts || {};

        Element.call(this, opts);

        for (var key in opts) {
            if (opts.hasOwnProperty(key)) {
                this[key] = opts[key];
            }
        }

        this._children = [];

        this.__storage = null;

        this.__dirty = true;
    };

    Group.prototype = {

        constructor: Group,

        isGroup: true,

        /**
         * @type {string}
         */
        type: 'group',

        /**
         * 所有子孙元素是否响应鼠标事件
         * @name module:/zrender/container/Group#silent
         * @type {boolean}
         * @default false
         */
        silent: false,

        /**
         * @return {Array.<module:zrender/Element>}
         */
        children: function () {
            return this._children.slice();
        },

        /**
         * 获取指定 index 的儿子节点
         * @param  {number} idx
         * @return {module:zrender/Element}
         */
        childAt: function (idx) {
            return this._children[idx];
        },

        /**
         * 获取指定名字的儿子节点
         * @param  {string} name
         * @return {module:zrender/Element}
         */
        childOfName: function (name) {
            var children = this._children;
            for (var i = 0; i < children.length; i++) {
                if (children[i].name === name) {
                    return children[i];
                }
             }
        },

        /**
         * @return {number}
         */
        childCount: function () {
            return this._children.length;
        },

        /**
         * 添加子节点到最后
         * @param {module:zrender/Element} child
         */
        add: function (child) {
            if (child && child !== this && child.parent !== this) {

                this._children.push(child);

                this._doAdd(child);
            }

            return this;
        },

        /**
         * 添加子节点在 nextSibling 之前
         * @param {module:zrender/Element} child
         * @param {module:zrender/Element} nextSibling
         */
        addBefore: function (child, nextSibling) {
            if (child && child !== this && child.parent !== this
                && nextSibling && nextSibling.parent === this) {

                var children = this._children;
                var idx = children.indexOf(nextSibling);

                if (idx >= 0) {
                    children.splice(idx, 0, child);
                    this._doAdd(child);
                }
            }

            return this;
        },

        _doAdd: function (child) {
            if (child.parent) {
                child.parent.remove(child);
            }

            child.parent = this;

            var storage = this.__storage;
            var zr = this.__zr;
            if (storage && storage !== child.__storage) {

                storage.addToStorage(child);

                if (child instanceof Group) {
                    child.addChildrenToStorage(storage);
                }
            }

            zr && zr.refresh();
        },

        /**
         * 移除子节点
         * @param {module:zrender/Element} child
         */
        remove: function (child) {
            var zr = this.__zr;
            var storage = this.__storage;
            var children = this._children;

            var idx = zrUtil.indexOf(children, child);
            if (idx < 0) {
                return this;
            }
            children.splice(idx, 1);

            child.parent = null;

            if (storage) {

                storage.delFromStorage(child);

                if (child instanceof Group) {
                    child.delChildrenFromStorage(storage);
                }
            }

            zr && zr.refresh();

            return this;
        },

        /**
         * 移除所有子节点
         */
        removeAll: function () {
            var children = this._children;
            var storage = this.__storage;
            var child;
            var i;
            for (i = 0; i < children.length; i++) {
                child = children[i];
                if (storage) {
                    storage.delFromStorage(child);
                    if (child instanceof Group) {
                        child.delChildrenFromStorage(storage);
                    }
                }
                child.parent = null;
            }
            children.length = 0;

            return this;
        },

        /**
         * 遍历所有子节点
         * @param  {Function} cb
         * @param  {}   context
         */
        eachChild: function (cb, context) {
            var children = this._children;
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                cb.call(context, child, i);
            }
            return this;
        },

        /**
         * 深度优先遍历所有子孙节点
         * @param  {Function} cb
         * @param  {}   context
         */
        traverse: function (cb, context) {
            for (var i = 0; i < this._children.length; i++) {
                var child = this._children[i];
                cb.call(context, child);

                if (child.type === 'group') {
                    child.traverse(cb, context);
                }
            }
            return this;
        },

        addChildrenToStorage: function (storage) {
            for (var i = 0; i < this._children.length; i++) {
                var child = this._children[i];
                storage.addToStorage(child);
                if (child instanceof Group) {
                    child.addChildrenToStorage(storage);
                }
            }
        },

        delChildrenFromStorage: function (storage) {
            for (var i = 0; i < this._children.length; i++) {
                var child = this._children[i];
                storage.delFromStorage(child);
                if (child instanceof Group) {
                    child.delChildrenFromStorage(storage);
                }
            }
        },

        dirty: function () {
            this.__dirty = true;
            this.__zr && this.__zr.refresh();
            return this;
        },

        /**
         * @return {module:zrender/core/BoundingRect}
         */
        getBoundingRect: function (includeChildren) {
            // TODO Caching
            var rect = null;
            var tmpRect = new BoundingRect(0, 0, 0, 0);
            var children = includeChildren || this._children;
            var tmpMat = [];

            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                if (child.ignore || child.invisible) {
                    continue;
                }

                var childRect = child.getBoundingRect();
                var transform = child.getLocalTransform(tmpMat);
                // TODO
                // The boundingRect cacluated by transforming original
                // rect may be bigger than the actual bundingRect when rotation
                // is used. (Consider a circle rotated aginst its center, where
                // the actual boundingRect should be the same as that not be
                // rotated.) But we can not find better approach to calculate
                // actual boundingRect yet, considering performance.
                if (transform) {
                    tmpRect.copy(childRect);
                    tmpRect.applyTransform(transform);
                    rect = rect || tmpRect.clone();
                    rect.union(tmpRect);
                }
                else {
                    rect = rect || childRect.clone();
                    rect.union(childRect);
                }
            }
            return rect || tmpRect;
        }
    };

    zrUtil.inherits(Group, Element);

    return Group;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _RadialGradient = __webpack_require__(342);

var _RadialGradient2 = _interopRequireDefault(_RadialGradient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = function Config() {
    _classCallCheck(this, Config);
};

Config.animationDefaultDuring = 3000;
Config.animationEasing = 'linear';
Config.pointAnimateDuring = 3000;
Config.wsServer = 'ws://localhost:9000';
Config.gradient = new _RadialGradient2.default(0.5, 0.5, 0.5, [{
    offset: 0,
    color: 'rgba(255, 255, 0, 0)'
}, {
    offset: 0.65,
    color: 'rgba(255, 255, 0, 0)'
}, {
    offset: 0.65,
    color: 'rgba(255, 255, 0, 0)'
}, {
    offset: 1,
    color: 'rgba(255, 255, 0, 1)'
}]);
exports.default = Config;

/***/ }),

/***/ 122:
/***/ (function(module, exports) {


module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    var dpr = 1;
    // If in browser environment
    if (typeof window !== 'undefined') {
        dpr = Math.max(window.devicePixelRatio || 1, 1);
    }
    /**
     * config默认配置项
     * @exports zrender/config
     * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
     */
    var config = {
        /**
         * debug日志选项：catchBrushException为true下有效
         * 0 : 不生成debug数据，发布用
         * 1 : 异常抛出，调试用
         * 2 : 控制台输出，调试用
         */
        debugMode: 0,

        // retina 屏幕优化
        devicePixelRatio: dpr
    };
    return config;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));



/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Path 代理，可以在`buildPath`中用于替代`ctx`, 会保存每个path操作的命令到pathCommands属性中
 * 可以用于 isInsidePath 判断以及获取boundingRect
 *
 * @module zrender/core/PathProxy
 * @author Yi Shen (http://www.github.com/pissang)
 */

 // TODO getTotalLength, getPointAtLength
!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
    'use strict';

    var curve = __webpack_require__(91);
    var vec2 = __webpack_require__(74);
    var bbox = __webpack_require__(773);
    var BoundingRect = __webpack_require__(90);
    var dpr = __webpack_require__(152).devicePixelRatio;

    var CMD = {
        M: 1,
        L: 2,
        C: 3,
        Q: 4,
        A: 5,
        Z: 6,
        // Rect
        R: 7
    };

    // var CMD_MEM_SIZE = {
    //     M: 3,
    //     L: 3,
    //     C: 7,
    //     Q: 5,
    //     A: 9,
    //     R: 5,
    //     Z: 1
    // };

    var min = [];
    var max = [];
    var min2 = [];
    var max2 = [];
    var mathMin = Math.min;
    var mathMax = Math.max;
    var mathCos = Math.cos;
    var mathSin = Math.sin;
    var mathSqrt = Math.sqrt;
    var mathAbs = Math.abs;

    var hasTypedArray = typeof Float32Array != 'undefined';

    /**
     * @alias module:zrender/core/PathProxy
     * @constructor
     */
    var PathProxy = function (notSaveData) {

        this._saveData = !(notSaveData || false);

        if (this._saveData) {
            /**
             * Path data. Stored as flat array
             * @type {Array.<Object>}
             */
            this.data = [];
        }

        this._ctx = null;
    };

    /**
     * 快速计算Path包围盒（并不是最小包围盒）
     * @return {Object}
     */
    PathProxy.prototype = {

        constructor: PathProxy,

        _xi: 0,
        _yi: 0,

        _x0: 0,
        _y0: 0,
        // Unit x, Unit y. Provide for avoiding drawing that too short line segment
        _ux: 0,
        _uy: 0,

        _len: 0,

        _lineDash: null,

        _dashOffset: 0,

        _dashIdx: 0,

        _dashSum: 0,

        /**
         * @readOnly
         */
        setScale: function (sx, sy) {
            this._ux = mathAbs(1 / dpr / sx) || 0;
            this._uy = mathAbs(1 / dpr / sy) || 0;
        },

        getContext: function () {
            return this._ctx;
        },

        /**
         * @param  {CanvasRenderingContext2D} ctx
         * @return {module:zrender/core/PathProxy}
         */
        beginPath: function (ctx) {

            this._ctx = ctx;

            ctx && ctx.beginPath();

            ctx && (this.dpr = ctx.dpr);

            // Reset
            if (this._saveData) {
                this._len = 0;
            }

            if (this._lineDash) {
                this._lineDash = null;

                this._dashOffset = 0;
            }

            return this;
        },

        /**
         * @param  {number} x
         * @param  {number} y
         * @return {module:zrender/core/PathProxy}
         */
        moveTo: function (x, y) {
            this.addData(CMD.M, x, y);
            this._ctx && this._ctx.moveTo(x, y);

            // x0, y0, xi, yi 是记录在 _dashedXXXXTo 方法中使用
            // xi, yi 记录当前点, x0, y0 在 closePath 的时候回到起始点。
            // 有可能在 beginPath 之后直接调用 lineTo，这时候 x0, y0 需要
            // 在 lineTo 方法中记录，这里先不考虑这种情况，dashed line 也只在 IE10- 中不支持
            this._x0 = x;
            this._y0 = y;

            this._xi = x;
            this._yi = y;

            return this;
        },

        /**
         * @param  {number} x
         * @param  {number} y
         * @return {module:zrender/core/PathProxy}
         */
        lineTo: function (x, y) {
            var exceedUnit = mathAbs(x - this._xi) > this._ux
                || mathAbs(y - this._yi) > this._uy
                // Force draw the first segment
                || this._len < 5;

            this.addData(CMD.L, x, y);

            if (this._ctx && exceedUnit) {
                this._needsDash() ? this._dashedLineTo(x, y)
                    : this._ctx.lineTo(x, y);
            }
            if (exceedUnit) {
                this._xi = x;
                this._yi = y;
            }

            return this;
        },

        /**
         * @param  {number} x1
         * @param  {number} y1
         * @param  {number} x2
         * @param  {number} y2
         * @param  {number} x3
         * @param  {number} y3
         * @return {module:zrender/core/PathProxy}
         */
        bezierCurveTo: function (x1, y1, x2, y2, x3, y3) {
            this.addData(CMD.C, x1, y1, x2, y2, x3, y3);
            if (this._ctx) {
                this._needsDash() ? this._dashedBezierTo(x1, y1, x2, y2, x3, y3)
                    : this._ctx.bezierCurveTo(x1, y1, x2, y2, x3, y3);
            }
            this._xi = x3;
            this._yi = y3;
            return this;
        },

        /**
         * @param  {number} x1
         * @param  {number} y1
         * @param  {number} x2
         * @param  {number} y2
         * @return {module:zrender/core/PathProxy}
         */
        quadraticCurveTo: function (x1, y1, x2, y2) {
            this.addData(CMD.Q, x1, y1, x2, y2);
            if (this._ctx) {
                this._needsDash() ? this._dashedQuadraticTo(x1, y1, x2, y2)
                    : this._ctx.quadraticCurveTo(x1, y1, x2, y2);
            }
            this._xi = x2;
            this._yi = y2;
            return this;
        },

        /**
         * @param  {number} cx
         * @param  {number} cy
         * @param  {number} r
         * @param  {number} startAngle
         * @param  {number} endAngle
         * @param  {boolean} anticlockwise
         * @return {module:zrender/core/PathProxy}
         */
        arc: function (cx, cy, r, startAngle, endAngle, anticlockwise) {
            this.addData(
                CMD.A, cx, cy, r, r, startAngle, endAngle - startAngle, 0, anticlockwise ? 0 : 1
            );
            this._ctx && this._ctx.arc(cx, cy, r, startAngle, endAngle, anticlockwise);

            this._xi = mathCos(endAngle) * r + cx;
            this._yi = mathSin(endAngle) * r + cx;
            return this;
        },

        // TODO
        arcTo: function (x1, y1, x2, y2, radius) {
            if (this._ctx) {
                this._ctx.arcTo(x1, y1, x2, y2, radius);
            }
            return this;
        },

        // TODO
        rect: function (x, y, w, h) {
            this._ctx && this._ctx.rect(x, y, w, h);
            this.addData(CMD.R, x, y, w, h);
            return this;
        },

        /**
         * @return {module:zrender/core/PathProxy}
         */
        closePath: function () {
            this.addData(CMD.Z);

            var ctx = this._ctx;
            var x0 = this._x0;
            var y0 = this._y0;
            if (ctx) {
                this._needsDash() && this._dashedLineTo(x0, y0);
                ctx.closePath();
            }

            this._xi = x0;
            this._yi = y0;
            return this;
        },

        /**
         * Context 从外部传入，因为有可能是 rebuildPath 完之后再 fill。
         * stroke 同样
         * @param {CanvasRenderingContext2D} ctx
         * @return {module:zrender/core/PathProxy}
         */
        fill: function (ctx) {
            ctx && ctx.fill();
            this.toStatic();
        },

        /**
         * @param {CanvasRenderingContext2D} ctx
         * @return {module:zrender/core/PathProxy}
         */
        stroke: function (ctx) {
            ctx && ctx.stroke();
            this.toStatic();
        },

        /**
         * 必须在其它绘制命令前调用
         * Must be invoked before all other path drawing methods
         * @return {module:zrender/core/PathProxy}
         */
        setLineDash: function (lineDash) {
            if (lineDash instanceof Array) {
                this._lineDash = lineDash;

                this._dashIdx = 0;

                var lineDashSum = 0;
                for (var i = 0; i < lineDash.length; i++) {
                    lineDashSum += lineDash[i];
                }
                this._dashSum = lineDashSum;
            }
            return this;
        },

        /**
         * 必须在其它绘制命令前调用
         * Must be invoked before all other path drawing methods
         * @return {module:zrender/core/PathProxy}
         */
        setLineDashOffset: function (offset) {
            this._dashOffset = offset;
            return this;
        },

        /**
         *
         * @return {boolean}
         */
        len: function () {
            return this._len;
        },

        /**
         * 直接设置 Path 数据
         */
        setData: function (data) {

            var len = data.length;

            if (! (this.data && this.data.length == len) && hasTypedArray) {
                this.data = new Float32Array(len);
            }

            for (var i = 0; i < len; i++) {
                this.data[i] = data[i];
            }

            this._len = len;
        },

        /**
         * 添加子路径
         * @param {module:zrender/core/PathProxy|Array.<module:zrender/core/PathProxy>} path
         */
        appendPath: function (path) {
            if (!(path instanceof Array)) {
                path = [path];
            }
            var len = path.length;
            var appendSize = 0;
            var offset = this._len;
            for (var i = 0; i < len; i++) {
                appendSize += path[i].len();
            }
            if (hasTypedArray && (this.data instanceof Float32Array)) {
                this.data = new Float32Array(offset + appendSize);
            }
            for (var i = 0; i < len; i++) {
                var appendPathData = path[i].data;
                for (var k = 0; k < appendPathData.length; k++) {
                    this.data[offset++] = appendPathData[k];
                }
            }
            this._len = offset;
        },

        /**
         * 填充 Path 数据。
         * 尽量复用而不申明新的数组。大部分图形重绘的指令数据长度都是不变的。
         */
        addData: function (cmd) {
            if (!this._saveData) {
                return;
            }

            var data = this.data;
            if (this._len + arguments.length > data.length) {
                // 因为之前的数组已经转换成静态的 Float32Array
                // 所以不够用时需要扩展一个新的动态数组
                this._expandData();
                data = this.data;
            }
            for (var i = 0; i < arguments.length; i++) {
                data[this._len++] = arguments[i];
            }

            this._prevCmd = cmd;
        },

        _expandData: function () {
            // Only if data is Float32Array
            if (!(this.data instanceof Array)) {
                var newData = [];
                for (var i = 0; i < this._len; i++) {
                    newData[i] = this.data[i];
                }
                this.data = newData;
            }
        },

        /**
         * If needs js implemented dashed line
         * @return {boolean}
         * @private
         */
        _needsDash: function () {
            return this._lineDash;
        },

        _dashedLineTo: function (x1, y1) {
            var dashSum = this._dashSum;
            var offset = this._dashOffset;
            var lineDash = this._lineDash;
            var ctx = this._ctx;

            var x0 = this._xi;
            var y0 = this._yi;
            var dx = x1 - x0;
            var dy = y1 - y0;
            var dist = mathSqrt(dx * dx + dy * dy);
            var x = x0;
            var y = y0;
            var dash;
            var nDash = lineDash.length;
            var idx;
            dx /= dist;
            dy /= dist;

            if (offset < 0) {
                // Convert to positive offset
                offset = dashSum + offset;
            }
            offset %= dashSum;
            x -= offset * dx;
            y -= offset * dy;

            while ((dx > 0 && x <= x1) || (dx < 0 && x >= x1)
            || (dx == 0 && ((dy > 0 && y <= y1) || (dy < 0 && y >= y1)))) {
                idx = this._dashIdx;
                dash = lineDash[idx];
                x += dx * dash;
                y += dy * dash;
                this._dashIdx = (idx + 1) % nDash;
                // Skip positive offset
                if ((dx > 0 && x < x0) || (dx < 0 && x > x0) || (dy > 0 && y < y0) || (dy < 0 && y > y0)) {
                    continue;
                }
                ctx[idx % 2 ? 'moveTo' : 'lineTo'](
                    dx >= 0 ? mathMin(x, x1) : mathMax(x, x1),
                    dy >= 0 ? mathMin(y, y1) : mathMax(y, y1)
                );
            }
            // Offset for next lineTo
            dx = x - x1;
            dy = y - y1;
            this._dashOffset = -mathSqrt(dx * dx + dy * dy);
        },

        // Not accurate dashed line to
        _dashedBezierTo: function (x1, y1, x2, y2, x3, y3) {
            var dashSum = this._dashSum;
            var offset = this._dashOffset;
            var lineDash = this._lineDash;
            var ctx = this._ctx;

            var x0 = this._xi;
            var y0 = this._yi;
            var t;
            var dx;
            var dy;
            var cubicAt = curve.cubicAt;
            var bezierLen = 0;
            var idx = this._dashIdx;
            var nDash = lineDash.length;

            var x;
            var y;

            var tmpLen = 0;

            if (offset < 0) {
                // Convert to positive offset
                offset = dashSum + offset;
            }
            offset %= dashSum;
            // Bezier approx length
            for (t = 0; t < 1; t += 0.1) {
                dx = cubicAt(x0, x1, x2, x3, t + 0.1)
                    - cubicAt(x0, x1, x2, x3, t);
                dy = cubicAt(y0, y1, y2, y3, t + 0.1)
                    - cubicAt(y0, y1, y2, y3, t);
                bezierLen += mathSqrt(dx * dx + dy * dy);
            }

            // Find idx after add offset
            for (; idx < nDash; idx++) {
                tmpLen += lineDash[idx];
                if (tmpLen > offset) {
                    break;
                }
            }
            t = (tmpLen - offset) / bezierLen;

            while (t <= 1) {

                x = cubicAt(x0, x1, x2, x3, t);
                y = cubicAt(y0, y1, y2, y3, t);

                // Use line to approximate dashed bezier
                // Bad result if dash is long
                idx % 2 ? ctx.moveTo(x, y)
                    : ctx.lineTo(x, y);

                t += lineDash[idx] / bezierLen;

                idx = (idx + 1) % nDash;
            }

            // Finish the last segment and calculate the new offset
            (idx % 2 !== 0) && ctx.lineTo(x3, y3);
            dx = x3 - x;
            dy = y3 - y;
            this._dashOffset = -mathSqrt(dx * dx + dy * dy);
        },

        _dashedQuadraticTo: function (x1, y1, x2, y2) {
            // Convert quadratic to cubic using degree elevation
            var x3 = x2;
            var y3 = y2;
            x2 = (x2 + 2 * x1) / 3;
            y2 = (y2 + 2 * y1) / 3;
            x1 = (this._xi + 2 * x1) / 3;
            y1 = (this._yi + 2 * y1) / 3;

            this._dashedBezierTo(x1, y1, x2, y2, x3, y3);
        },

        /**
         * 转成静态的 Float32Array 减少堆内存占用
         * Convert dynamic array to static Float32Array
         */
        toStatic: function () {
            var data = this.data;
            if (data instanceof Array) {
                data.length = this._len;
                if (hasTypedArray) {
                    this.data = new Float32Array(data);
                }
            }
        },

        /**
         * @return {module:zrender/core/BoundingRect}
         */
        getBoundingRect: function () {
            min[0] = min[1] = min2[0] = min2[1] = Number.MAX_VALUE;
            max[0] = max[1] = max2[0] = max2[1] = -Number.MAX_VALUE;

            var data = this.data;
            var xi = 0;
            var yi = 0;
            var x0 = 0;
            var y0 = 0;

            for (var i = 0; i < data.length;) {
                var cmd = data[i++];

                if (i == 1) {
                    // 如果第一个命令是 L, C, Q
                    // 则 previous point 同绘制命令的第一个 point
                    //
                    // 第一个命令为 Arc 的情况下会在后面特殊处理
                    xi = data[i];
                    yi = data[i + 1];

                    x0 = xi;
                    y0 = yi;
                }

                switch (cmd) {
                    case CMD.M:
                        // moveTo 命令重新创建一个新的 subpath, 并且更新新的起点
                        // 在 closePath 的时候使用
                        x0 = data[i++];
                        y0 = data[i++];
                        xi = x0;
                        yi = y0;
                        min2[0] = x0;
                        min2[1] = y0;
                        max2[0] = x0;
                        max2[1] = y0;
                        break;
                    case CMD.L:
                        bbox.fromLine(xi, yi, data[i], data[i + 1], min2, max2);
                        xi = data[i++];
                        yi = data[i++];
                        break;
                    case CMD.C:
                        bbox.fromCubic(
                            xi, yi, data[i++], data[i++], data[i++], data[i++], data[i], data[i + 1],
                            min2, max2
                        );
                        xi = data[i++];
                        yi = data[i++];
                        break;
                    case CMD.Q:
                        bbox.fromQuadratic(
                            xi, yi, data[i++], data[i++], data[i], data[i + 1],
                            min2, max2
                        );
                        xi = data[i++];
                        yi = data[i++];
                        break;
                    case CMD.A:
                        // TODO Arc 判断的开销比较大
                        var cx = data[i++];
                        var cy = data[i++];
                        var rx = data[i++];
                        var ry = data[i++];
                        var startAngle = data[i++];
                        var endAngle = data[i++] + startAngle;
                        // TODO Arc 旋转
                        var psi = data[i++];
                        var anticlockwise = 1 - data[i++];

                        if (i == 1) {
                            // 直接使用 arc 命令
                            // 第一个命令起点还未定义
                            x0 = mathCos(startAngle) * rx + cx;
                            y0 = mathSin(startAngle) * ry + cy;
                        }

                        bbox.fromArc(
                            cx, cy, rx, ry, startAngle, endAngle,
                            anticlockwise, min2, max2
                        );

                        xi = mathCos(endAngle) * rx + cx;
                        yi = mathSin(endAngle) * ry + cy;
                        break;
                    case CMD.R:
                        x0 = xi = data[i++];
                        y0 = yi = data[i++];
                        var width = data[i++];
                        var height = data[i++];
                        // Use fromLine
                        bbox.fromLine(x0, y0, x0 + width, y0 + height, min2, max2);
                        break;
                    case CMD.Z:
                        xi = x0;
                        yi = y0;
                        break;
                }

                // Union
                vec2.min(min, min, min2);
                vec2.max(max, max, max2);
            }

            // No data
            if (i === 0) {
                min[0] = min[1] = max[0] = max[1] = 0;
            }

            return new BoundingRect(
                min[0], min[1], max[0] - min[0], max[1] - min[1]
            );
        },

        /**
         * Rebuild path from current data
         * Rebuild path will not consider javascript implemented line dash.
         * @param {CanvasRenderingContext} ctx
         */
        rebuildPath: function (ctx) {
            var d = this.data;
            var x0, y0;
            var xi, yi;
            var x, y;
            var ux = this._ux;
            var uy = this._uy;
            var len = this._len;
            for (var i = 0; i < len;) {
                var cmd = d[i++];

                if (i == 1) {
                    // 如果第一个命令是 L, C, Q
                    // 则 previous point 同绘制命令的第一个 point
                    //
                    // 第一个命令为 Arc 的情况下会在后面特殊处理
                    xi = d[i];
                    yi = d[i + 1];

                    x0 = xi;
                    y0 = yi;
                }
                switch (cmd) {
                    case CMD.M:
                        x0 = xi = d[i++];
                        y0 = yi = d[i++];
                        ctx.moveTo(xi, yi);
                        break;
                    case CMD.L:
                        x = d[i++];
                        y = d[i++];
                        // Not draw too small seg between
                        if (mathAbs(x - xi) > ux || mathAbs(y - yi) > uy || i === len - 1) {
                            ctx.lineTo(x, y);
                            xi = x;
                            yi = y;
                        }
                        break;
                    case CMD.C:
                        ctx.bezierCurveTo(
                            d[i++], d[i++], d[i++], d[i++], d[i++], d[i++]
                        );
                        xi = d[i - 2];
                        yi = d[i - 1];
                        break;
                    case CMD.Q:
                        ctx.quadraticCurveTo(d[i++], d[i++], d[i++], d[i++]);
                        xi = d[i - 2];
                        yi = d[i - 1];
                        break;
                    case CMD.A:
                        var cx = d[i++];
                        var cy = d[i++];
                        var rx = d[i++];
                        var ry = d[i++];
                        var theta = d[i++];
                        var dTheta = d[i++];
                        var psi = d[i++];
                        var fs = d[i++];
                        var r = (rx > ry) ? rx : ry;
                        var scaleX = (rx > ry) ? 1 : rx / ry;
                        var scaleY = (rx > ry) ? ry / rx : 1;
                        var isEllipse = Math.abs(rx - ry) > 1e-3;
                        var endAngle = theta + dTheta;
                        if (isEllipse) {
                            ctx.translate(cx, cy);
                            ctx.rotate(psi);
                            ctx.scale(scaleX, scaleY);
                            ctx.arc(0, 0, r, theta, endAngle, 1 - fs);
                            ctx.scale(1 / scaleX, 1 / scaleY);
                            ctx.rotate(-psi);
                            ctx.translate(-cx, -cy);
                        }
                        else {
                            ctx.arc(cx, cy, r, theta, endAngle, 1 - fs);
                        }

                        if (i == 1) {
                            // 直接使用 arc 命令
                            // 第一个命令起点还未定义
                            x0 = mathCos(theta) * rx + cx;
                            y0 = mathSin(theta) * ry + cy;
                        }
                        xi = mathCos(endAngle) * rx + cx;
                        yi = mathSin(endAngle) * ry + cy;
                        break;
                    case CMD.R:
                        x0 = xi = d[i];
                        y0 = yi = d[i + 1];
                        ctx.rect(d[i++], d[i++], d[i++], d[i++]);
                        break;
                    case CMD.Z:
                        ctx.closePath();
                        xi = x0;
                        yi = y0;
                }
            }
        }
    };

    PathProxy.CMD = CMD;

    return PathProxy;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * echarts设备环境识别
 *
 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
 * @author firede[firede@firede.us]
 * @desc thanks zepto.
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    var env = {};
    if (typeof navigator === 'undefined') {
        // In node
        env = {
            browser: {},
            os: {},
            node: true,
            // Assume canvas is supported
            canvasSupported: true
        };
    }
    else {
        env = detect(navigator.userAgent);
    }

    return env;

    // Zepto.js
    // (c) 2010-2013 Thomas Fuchs
    // Zepto.js may be freely distributed under the MIT license.

    function detect(ua) {
        var os = {};
        var browser = {};
        // var webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/);
        // var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
        // var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
        // var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        // var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
        // var webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/);
        // var touchpad = webos && ua.match(/TouchPad/);
        // var kindle = ua.match(/Kindle\/([\d.]+)/);
        // var silk = ua.match(/Silk\/([\d._]+)/);
        // var blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/);
        // var bb10 = ua.match(/(BB10).*Version\/([\d.]+)/);
        // var rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/);
        // var playbook = ua.match(/PlayBook/);
        // var chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/);
        var firefox = ua.match(/Firefox\/([\d.]+)/);
        // var safari = webkit && ua.match(/Mobile\//) && !chrome;
        // var webview = ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) && !chrome;
        var ie = ua.match(/MSIE\s([\d.]+)/)
            // IE 11 Trident/7.0; rv:11.0
            || ua.match(/Trident\/.+?rv:(([\d.]+))/);
        var edge = ua.match(/Edge\/([\d.]+)/); // IE 12 and 12+

        var weChat = (/micromessenger/i).test(ua);

        // Todo: clean this up with a better OS/browser seperation:
        // - discern (more) between multiple browsers on android
        // - decide if kindle fire in silk mode is android or not
        // - Firefox on Android doesn't specify the Android version
        // - possibly devide in os, device and browser hashes

        // if (browser.webkit = !!webkit) browser.version = webkit[1];

        // if (android) os.android = true, os.version = android[2];
        // if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.');
        // if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.');
        // if (ipod) os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
        // if (webos) os.webos = true, os.version = webos[2];
        // if (touchpad) os.touchpad = true;
        // if (blackberry) os.blackberry = true, os.version = blackberry[2];
        // if (bb10) os.bb10 = true, os.version = bb10[2];
        // if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2];
        // if (playbook) browser.playbook = true;
        // if (kindle) os.kindle = true, os.version = kindle[1];
        // if (silk) browser.silk = true, browser.version = silk[1];
        // if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true;
        // if (chrome) browser.chrome = true, browser.version = chrome[1];
        if (firefox) {
            browser.firefox = true;
            browser.version = firefox[1];
        }
        // if (safari && (ua.match(/Safari/) || !!os.ios)) browser.safari = true;
        // if (webview) browser.webview = true;

        if (ie) {
            browser.ie = true;
            browser.version = ie[1];
        }

        if (edge) {
            browser.edge = true;
            browser.version = edge[1];
        }

        // It is difficult to detect WeChat in Win Phone precisely, because ua can
        // not be set on win phone. So we do not consider Win Phone.
        if (weChat) {
            browser.weChat = true;
        }

        // os.tablet = !!(ipad || playbook || (android && !ua.match(/Mobile/)) ||
        //     (firefox && ua.match(/Tablet/)) || (ie && !ua.match(/Phone/) && ua.match(/Touch/)));
        // os.phone  = !!(!os.tablet && !os.ipod && (android || iphone || webos ||
        //     (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) ||
        //     (firefox && ua.match(/Mobile/)) || (ie && ua.match(/Touch/))));

        return {
            browser: browser,
            os: os,
            node: false,
            // 原生canvas支持，改极端点了
            // canvasSupported : !(browser.ie && parseFloat(browser.version) < 9)
            canvasSupported : document.createElement('canvas').getContext ? true : false,
            // @see <http://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript>
            // works on most browsers
            // IE10/11 does not support touch event, and MS Edge supports them but not by
            // default, so we dont check navigator.maxTouchPoints for them here.
            touchEventsSupported: 'ontouchstart' in window && !browser.ie && !browser.edge,
            // <http://caniuse.com/#search=pointer%20event>.
            pointerEventsSupported: 'onpointerdown' in window
                // Firefox supports pointer but not by default, only MS browsers are reliable on pointer
                // events currently. So we dont use that on other browsers unless tested sufficiently.
                // Although IE 10 supports pointer event, it use old style and is different from the
                // standard. So we exclude that. (IE 10 is hardly used on touch device)
                && (browser.edge || (browser.ie && browser.version >= 11))
        };
    }
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * 事件扩展
 * @module zrender/mixin/Eventful
 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
 *         pissang (https://www.github.com/pissang)
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var arrySlice = Array.prototype.slice;

    /**
     * 事件分发器
     * @alias module:zrender/mixin/Eventful
     * @constructor
     */
    var Eventful = function () {
        this._$handlers = {};
    };

    Eventful.prototype = {

        constructor: Eventful,

        /**
         * 单次触发绑定，trigger后销毁
         *
         * @param {string} event 事件名
         * @param {Function} handler 响应函数
         * @param {Object} context
         */
        one: function (event, handler, context) {
            var _h = this._$handlers;

            if (!handler || !event) {
                return this;
            }

            if (!_h[event]) {
                _h[event] = [];
            }

            for (var i = 0; i < _h[event].length; i++) {
                if (_h[event][i].h === handler) {
                    return this;
                }
            }

            _h[event].push({
                h: handler,
                one: true,
                ctx: context || this
            });

            return this;
        },

        /**
         * 绑定事件
         * @param {string} event 事件名
         * @param {Function} handler 事件处理函数
         * @param {Object} [context]
         */
        on: function (event, handler, context) {
            var _h = this._$handlers;

            if (!handler || !event) {
                return this;
            }

            if (!_h[event]) {
                _h[event] = [];
            }

            for (var i = 0; i < _h[event].length; i++) {
                if (_h[event][i].h === handler) {
                    return this;
                }
            }

            _h[event].push({
                h: handler,
                one: false,
                ctx: context || this
            });

            return this;
        },

        /**
         * 是否绑定了事件
         * @param  {string}  event
         * @return {boolean}
         */
        isSilent: function (event) {
            var _h = this._$handlers;
            return _h[event] && _h[event].length;
        },

        /**
         * 解绑事件
         * @param {string} event 事件名
         * @param {Function} [handler] 事件处理函数
         */
        off: function (event, handler) {
            var _h = this._$handlers;

            if (!event) {
                this._$handlers = {};
                return this;
            }

            if (handler) {
                if (_h[event]) {
                    var newList = [];
                    for (var i = 0, l = _h[event].length; i < l; i++) {
                        if (_h[event][i]['h'] != handler) {
                            newList.push(_h[event][i]);
                        }
                    }
                    _h[event] = newList;
                }

                if (_h[event] && _h[event].length === 0) {
                    delete _h[event];
                }
            }
            else {
                delete _h[event];
            }

            return this;
        },

        /**
         * 事件分发
         *
         * @param {string} type 事件类型
         */
        trigger: function (type) {
            if (this._$handlers[type]) {
                var args = arguments;
                var argLen = args.length;

                if (argLen > 3) {
                    args = arrySlice.call(args, 1);
                }

                var _h = this._$handlers[type];
                var len = _h.length;
                for (var i = 0; i < len;) {
                    // Optimize advise from backbone
                    switch (argLen) {
                        case 1:
                            _h[i]['h'].call(_h[i]['ctx']);
                            break;
                        case 2:
                            _h[i]['h'].call(_h[i]['ctx'], args[1]);
                            break;
                        case 3:
                            _h[i]['h'].call(_h[i]['ctx'], args[1], args[2]);
                            break;
                        default:
                            // have more than 2 given arguments
                            _h[i]['h'].apply(_h[i]['ctx'], args);
                            break;
                    }

                    if (_h[i]['one']) {
                        _h.splice(i, 1);
                        len--;
                    }
                    else {
                        i++;
                    }
                }
            }

            return this;
        },

        /**
         * 带有context的事件分发, 最后一个参数是事件回调的context
         * @param {string} type 事件类型
         */
        triggerWithContext: function (type) {
            if (this._$handlers[type]) {
                var args = arguments;
                var argLen = args.length;

                if (argLen > 4) {
                    args = arrySlice.call(args, 1, args.length - 1);
                }
                var ctx = args[args.length - 1];

                var _h = this._$handlers[type];
                var len = _h.length;
                for (var i = 0; i < len;) {
                    // Optimize advise from backbone
                    switch (argLen) {
                        case 1:
                            _h[i]['h'].call(ctx);
                            break;
                        case 2:
                            _h[i]['h'].call(ctx, args[1]);
                            break;
                        case 3:
                            _h[i]['h'].call(ctx, args[1], args[2]);
                            break;
                        default:
                            // have more than 2 given arguments
                            _h[i]['h'].apply(ctx, args);
                            break;
                    }

                    if (_h[i]['one']) {
                        _h.splice(i, 1);
                        len--;
                    }
                    else {
                        i++;
                    }
                }
            }

            return this;
        }
    };

    // 对象可以通过 onxxxx 绑定事件
    /**
     * @event module:zrender/mixin/Eventful#onclick
     * @type {Function}
     * @default null
     */
    /**
     * @event module:zrender/mixin/Eventful#onmouseover
     * @type {Function}
     * @default null
     */
    /**
     * @event module:zrender/mixin/Eventful#onmouseout
     * @type {Function}
     * @default null
     */
    /**
     * @event module:zrender/mixin/Eventful#onmousemove
     * @type {Function}
     * @default null
     */
    /**
     * @event module:zrender/mixin/Eventful#onmousewheel
     * @type {Function}
     * @default null
     */
    /**
     * @event module:zrender/mixin/Eventful#onmousedown
     * @type {Function}
     * @default null
     */
    /**
     * @event module:zrender/mixin/Eventful#onmouseup
     * @type {Function}
     * @default null
     */
    /**
     * @event module:zrender/mixin/Eventful#ondrag
     * @type {Function}
     * @default null
     */
    /**
     * @event module:zrender/mixin/Eventful#ondragstart
     * @type {Function}
     * @default null
     */
    /**
     * @event module:zrender/mixin/Eventful#ondragend
     * @type {Function}
     * @default null
     */
    /**
     * @event module:zrender/mixin/Eventful#ondragenter
     * @type {Function}
     * @default null
     */
    /**
     * @event module:zrender/mixin/Eventful#ondragleave
     * @type {Function}
     * @default null
     */
    /**
     * @event module:zrender/mixin/Eventful#ondragover
     * @type {Function}
     * @default null
     */
    /**
     * @event module:zrender/mixin/Eventful#ondrop
     * @type {Function}
     * @default null
     */

    return Eventful;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var parser = __webpack_require__(86);
var Emitter = __webpack_require__(81);

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport (opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
  this.forceNode = opts.forceNode;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;
  this.localAddress = opts.localAddress;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' === this.readyState || '' === this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function (packets) {
  if ('open' === this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function (data) {
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// browser shim for xmlhttprequest module

var hasCORS = __webpack_require__(563);

module.exports = function (opts) {
  var xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  var xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  var enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) { }

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) { }

  if (!xdomain) {
    try {
      return new global[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch (e) { }
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var debug = __webpack_require__(52)('socket.io-parser');
var Emitter = __webpack_require__(81);
var hasBin = __webpack_require__(270);
var binary = __webpack_require__(724);
var isBuf = __webpack_require__(317);

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 4;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = [
  'CONNECT',
  'DISCONNECT',
  'EVENT',
  'ACK',
  'ERROR',
  'BINARY_EVENT',
  'BINARY_ACK'
];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;

/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;

/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;

/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function(obj, callback){
  if ((obj.type === exports.EVENT || obj.type === exports.ACK) && hasBin(obj.data)) {
    obj.type = obj.type === exports.EVENT ? exports.BINARY_EVENT : exports.BINARY_ACK;
  }

  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    encodeAsBinary(obj, callback);
  }
  else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {

  // first is type
  var str = '' + obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    str += obj.attachments + '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' !== obj.nsp) {
    str += obj.nsp + ',';
  }

  // immediately followed by the id
  if (null != obj.id) {
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    str += JSON.stringify(obj.data);
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an ecoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function(obj) {
  var packet;
  if (typeof obj === 'string') {
    packet = decodeString(obj);
    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) { // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);

      // no attachments, labeled binary but no binary data to follow
      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else { // non-binary full packet
      this.emit('decoded', packet);
    }
  }
  else if (isBuf(obj) || obj.base64) { // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) { // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  }
  else {
    throw new Error('Unknown type: ' + obj);
  }
};

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var i = 0;
  // look up type
  var p = {
    type: Number(str.charAt(0))
  };

  if (null == exports.types[p.type]) return error();

  // look up attachments if type binary
  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
    var buf = '';
    while (str.charAt(++i) !== '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }
    if (buf != Number(buf) || str.charAt(i) !== '-') {
      throw new Error('Illegal attachments');
    }
    p.attachments = Number(buf);
  }

  // look up namespace (if any)
  if ('/' === str.charAt(i + 1)) {
    p.nsp = '';
    while (++i) {
      var c = str.charAt(i);
      if (',' === c) break;
      p.nsp += c;
      if (i === str.length) break;
    }
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' !== next && Number(next) == next) {
    p.id = '';
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      p.id += str.charAt(i);
      if (i === str.length) break;
    }
    p.id = Number(p.id);
  }

  // look up json data
  if (str.charAt(++i)) {
    p = tryParse(p, str.substr(i));
  }

  debug('decoded %s as %j', str, p);
  return p;
}

function tryParse(p, str) {
  try {
    p.data = JSON.parse(str);
  } catch(e){
    return error();
  }
  return p; 
}

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function() {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function(binData) {
  this.buffers.push(binData);
  if (this.buffers.length === this.reconPack.attachments) { // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
};

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function() {
  this.reconPack = null;
  this.buffers = [];
};

function error() {
  return {
    type: exports.ERROR,
    data: 'parser error'
  };
}


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * 事件辅助类
 * @module zrender/core/event
 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

    'use strict';

    var Eventful = __webpack_require__(155);
    var env = __webpack_require__(154);

    var isDomLevel2 = (typeof window !== 'undefined') && !!window.addEventListener;

    function getBoundingClientRect(el) {
        // BlackBerry 5, iOS 3 (original iPhone) don't have getBoundingRect
        return el.getBoundingClientRect ? el.getBoundingClientRect() : {left: 0, top: 0};
    }

    // `calculate` is optional, default false
    function clientToLocal(el, e, out, calculate) {
        out = out || {};

        // According to the W3C Working Draft, offsetX and offsetY should be relative
        // to the padding edge of the target element. The only browser using this convention
        // is IE. Webkit uses the border edge, Opera uses the content edge, and FireFox does
        // not support the properties.
        // (see http://www.jacklmoore.com/notes/mouse-position/)
        // In zr painter.dom, padding edge equals to border edge.

        // FIXME
        // When mousemove event triggered on ec tooltip, target is not zr painter.dom, and
        // offsetX/Y is relative to e.target, where the calculation of zrX/Y via offsetX/Y
        // is too complex. So css-transfrom dont support in this case temporarily.
        if (calculate || !env.canvasSupported) {
            defaultGetZrXY(el, e, out);
        }
        // Caution: In FireFox, layerX/layerY Mouse position relative to the closest positioned
        // ancestor element, so we should make sure el is positioned (e.g., not position:static).
        // BTW1, Webkit don't return the same results as FF in non-simple cases (like add
        // zoom-factor, overflow / opacity layers, transforms ...)
        // BTW2, (ev.offsetY || ev.pageY - $(ev.target).offset().top) is not correct in preserve-3d.
        // <https://bugs.jquery.com/ticket/8523#comment:14>
        // BTW3, In ff, offsetX/offsetY is always 0.
        else if (env.browser.firefox && e.layerX != null && e.layerX !== e.offsetX) {
            out.zrX = e.layerX;
            out.zrY = e.layerY;
        }
        // For IE6+, chrome, safari, opera. (When will ff support offsetX?)
        else if (e.offsetX != null) {
            out.zrX = e.offsetX;
            out.zrY = e.offsetY;
        }
        // For some other device, e.g., IOS safari.
        else {
            defaultGetZrXY(el, e, out);
        }

        return out;
    }

    function defaultGetZrXY(el, e, out) {
        // This well-known method below does not support css transform.
        var box = getBoundingClientRect(el);
        out.zrX = e.clientX - box.left;
        out.zrY = e.clientY - box.top;
    }

    /**
     * 如果存在第三方嵌入的一些dom触发的事件，或touch事件，需要转换一下事件坐标.
     * `calculate` is optional, default false.
     */
    function normalizeEvent(el, e, calculate) {

        e = e || window.event;

        if (e.zrX != null) {
            return e;
        }

        var eventType = e.type;
        var isTouch = eventType && eventType.indexOf('touch') >= 0;

        if (!isTouch) {
            clientToLocal(el, e, e, calculate);
            e.zrDelta = (e.wheelDelta) ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
        }
        else {
            var touch = eventType != 'touchend'
                ? e.targetTouches[0]
                : e.changedTouches[0];
            touch && clientToLocal(el, touch, e, calculate);
        }

        return e;
    }

    function addEventListener(el, name, handler) {
        if (isDomLevel2) {
            el.addEventListener(name, handler);
        }
        else {
            el.attachEvent('on' + name, handler);
        }
    }

    function removeEventListener(el, name, handler) {
        if (isDomLevel2) {
            el.removeEventListener(name, handler);
        }
        else {
            el.detachEvent('on' + name, handler);
        }
    }

    /**
     * preventDefault and stopPropagation.
     * Notice: do not do that in zrender. Upper application
     * do that if necessary.
     *
     * @memberOf module:zrender/core/event
     * @method
     * @param {Event} e : event对象
     */
    var stop = isDomLevel2
        ? function (e) {
            e.preventDefault();
            e.stopPropagation();
            e.cancelBubble = true;
        }
        : function (e) {
            e.returnValue = false;
            e.cancelBubble = true;
        };

    return {
        clientToLocal: clientToLocal,
        normalizeEvent: normalizeEvent,
        addEventListener: addEventListener,
        removeEventListener: removeEventListener,

        stop: stop,
        // 做向上兼容
        Dispatcher: Eventful
    };
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Path element
 * @module zrender/graphic/Path
 */

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var Displayable = __webpack_require__(340);
    var zrUtil = __webpack_require__(33);
    var PathProxy = __webpack_require__(153);
    var pathContain = __webpack_require__(768);

    var Pattern = __webpack_require__(341);
    var getCanvasPattern = Pattern.prototype.getCanvasPattern;

    var abs = Math.abs;

    var pathProxyForDraw = new PathProxy(true);
    /**
     * @alias module:zrender/graphic/Path
     * @extends module:zrender/graphic/Displayable
     * @constructor
     * @param {Object} opts
     */
    function Path(opts) {
        Displayable.call(this, opts);

        /**
         * @type {module:zrender/core/PathProxy}
         * @readOnly
         */
        this.path = null;
    }

    Path.prototype = {

        constructor: Path,

        type: 'path',

        __dirtyPath: true,

        strokeContainThreshold: 5,

        brush: function (ctx, prevEl) {
            var style = this.style;
            var path = this.path || pathProxyForDraw;
            var hasStroke = style.hasStroke();
            var hasFill = style.hasFill();
            var fill = style.fill;
            var stroke = style.stroke;
            var hasFillGradient = hasFill && !!(fill.colorStops);
            var hasStrokeGradient = hasStroke && !!(stroke.colorStops);
            var hasFillPattern = hasFill && !!(fill.image);
            var hasStrokePattern = hasStroke && !!(stroke.image);

            style.bind(ctx, this, prevEl);
            this.setTransform(ctx);

            if (this.__dirty) {
                var rect;
                // Update gradient because bounding rect may changed
                if (hasFillGradient) {
                    rect = rect || this.getBoundingRect();
                    this._fillGradient = style.getGradient(ctx, fill, rect);
                }
                if (hasStrokeGradient) {
                    rect = rect || this.getBoundingRect();
                    this._strokeGradient = style.getGradient(ctx, stroke, rect);
                }
            }
            // Use the gradient or pattern
            if (hasFillGradient) {
                // PENDING If may have affect the state
                ctx.fillStyle = this._fillGradient;
            }
            else if (hasFillPattern) {
                ctx.fillStyle = getCanvasPattern.call(fill, ctx);
            }
            if (hasStrokeGradient) {
                ctx.strokeStyle = this._strokeGradient;
            }
            else if (hasStrokePattern) {
                ctx.strokeStyle = getCanvasPattern.call(stroke, ctx);
            }

            var lineDash = style.lineDash;
            var lineDashOffset = style.lineDashOffset;

            var ctxLineDash = !!ctx.setLineDash;

            // Update path sx, sy
            var scale = this.getGlobalScale();
            path.setScale(scale[0], scale[1]);

            // Proxy context
            // Rebuild path in following 2 cases
            // 1. Path is dirty
            // 2. Path needs javascript implemented lineDash stroking.
            //    In this case, lineDash information will not be saved in PathProxy
            if (this.__dirtyPath
                || (lineDash && !ctxLineDash && hasStroke)
            ) {
                path.beginPath(ctx);

                // Setting line dash before build path
                if (lineDash && !ctxLineDash) {
                    path.setLineDash(lineDash);
                    path.setLineDashOffset(lineDashOffset);
                }

                this.buildPath(path, this.shape, false);

                // Clear path dirty flag
                if (this.path) {
                    this.__dirtyPath = false;
                }
            }
            else {
                // Replay path building
                ctx.beginPath();
                this.path.rebuildPath(ctx);
            }

            hasFill && path.fill(ctx);

            if (lineDash && ctxLineDash) {
                ctx.setLineDash(lineDash);
                ctx.lineDashOffset = lineDashOffset;
            }

            hasStroke && path.stroke(ctx);

            if (lineDash && ctxLineDash) {
                // PENDING
                // Remove lineDash
                ctx.setLineDash([]);
            }


            this.restoreTransform(ctx);

            // Draw rect text
            if (style.text != null) {
                this.drawRectText(ctx, this.getBoundingRect());
            }
        },

        // When bundling path, some shape may decide if use moveTo to begin a new subpath or closePath
        // Like in circle
        buildPath: function (ctx, shapeCfg, inBundle) {},

        createPathProxy: function () {
            this.path = new PathProxy();
        },

        getBoundingRect: function () {
            var rect = this._rect;
            var style = this.style;
            var needsUpdateRect = !rect;
            if (needsUpdateRect) {
                var path = this.path;
                if (!path) {
                    // Create path on demand.
                    path = this.path = new PathProxy();
                }
                if (this.__dirtyPath) {
                    path.beginPath();
                    this.buildPath(path, this.shape, false);
                }
                rect = path.getBoundingRect();
            }
            this._rect = rect;

            if (style.hasStroke()) {
                // Needs update rect with stroke lineWidth when
                // 1. Element changes scale or lineWidth
                // 2. Shape is changed
                var rectWithStroke = this._rectWithStroke || (this._rectWithStroke = rect.clone());
                if (this.__dirty || needsUpdateRect) {
                    rectWithStroke.copy(rect);
                    // FIXME Must after updateTransform
                    var w = style.lineWidth;
                    // PENDING, Min line width is needed when line is horizontal or vertical
                    var lineScale = style.strokeNoScale ? this.getLineScale() : 1;

                    // Only add extra hover lineWidth when there are no fill
                    if (!style.hasFill()) {
                        w = Math.max(w, this.strokeContainThreshold || 4);
                    }
                    // Consider line width
                    // Line scale can't be 0;
                    if (lineScale > 1e-10) {
                        rectWithStroke.width += w / lineScale;
                        rectWithStroke.height += w / lineScale;
                        rectWithStroke.x -= w / lineScale / 2;
                        rectWithStroke.y -= w / lineScale / 2;
                    }
                }

                // Return rect with stroke
                return rectWithStroke;
            }

            return rect;
        },

        contain: function (x, y) {
            var localPos = this.transformCoordToLocal(x, y);
            var rect = this.getBoundingRect();
            var style = this.style;
            x = localPos[0];
            y = localPos[1];

            if (rect.contain(x, y)) {
                var pathData = this.path.data;
                if (style.hasStroke()) {
                    var lineWidth = style.lineWidth;
                    var lineScale = style.strokeNoScale ? this.getLineScale() : 1;
                    // Line scale can't be 0;
                    if (lineScale > 1e-10) {
                        // Only add extra hover lineWidth when there are no fill
                        if (!style.hasFill()) {
                            lineWidth = Math.max(lineWidth, this.strokeContainThreshold);
                        }
                        if (pathContain.containStroke(
                            pathData, lineWidth / lineScale, x, y
                        )) {
                            return true;
                        }
                    }
                }
                if (style.hasFill()) {
                    return pathContain.contain(pathData, x, y);
                }
            }
            return false;
        },

        /**
         * @param  {boolean} dirtyPath
         */
        dirty: function (dirtyPath) {
            if (dirtyPath == null) {
                dirtyPath = true;
            }
            // Only mark dirty, not mark clean
            if (dirtyPath) {
                this.__dirtyPath = dirtyPath;
                this._rect = null;
            }

            this.__dirty = true;

            this.__zr && this.__zr.refresh();

            // Used as a clipping path
            if (this.__clipTarget) {
                this.__clipTarget.dirty();
            }
        },

        /**
         * Alias for animate('shape')
         * @param {boolean} loop
         */
        animateShape: function (loop) {
            return this.animate('shape', loop);
        },

        // Overwrite attrKV
        attrKV: function (key, value) {
            // FIXME
            if (key === 'shape') {
                this.setShape(value);
                this.__dirtyPath = true;
                this._rect = null;
            }
            else {
                Displayable.prototype.attrKV.call(this, key, value);
            }
        },

        /**
         * @param {Object|string} key
         * @param {*} value
         */
        setShape: function (key, value) {
            var shape = this.shape;
            // Path from string may not have shape
            if (shape) {
                if (zrUtil.isObject(key)) {
                    for (var name in key) {
                        if (key.hasOwnProperty(name)) {
                            shape[name] = key[name];
                        }
                    }
                }
                else {
                    shape[key] = value;
                }
                this.dirty(true);
            }
            return this;
        },

        getLineScale: function () {
            var m = this.transform;
            // Get the line scale.
            // Determinant of `m` means how much the area is enlarged by the
            // transformation. So its square root can be used as a scale factor
            // for width.
            return m && abs(m[0] - 1) > 1e-10 && abs(m[3] - 1) > 1e-10
                ? Math.sqrt(abs(m[0] * m[3] - m[2] * m[1]))
                : 1;
        }
    };

    /**
     * 扩展一个 Path element, 比如星形，圆等。
     * Extend a path element
     * @param {Object} props
     * @param {string} props.type Path type
     * @param {Function} props.init Initialize
     * @param {Function} props.buildPath Overwrite buildPath method
     * @param {Object} [props.style] Extended default style config
     * @param {Object} [props.shape] Extended default shape config
     */
    Path.extend = function (defaults) {
        var Sub = function (opts) {
            Path.call(this, opts);

            if (defaults.style) {
                // Extend default style
                this.style.extendFrom(defaults.style, false);
            }

            // Extend default shape
            var defaultShape = defaults.shape;
            if (defaultShape) {
                this.shape = this.shape || {};
                var thisShape = this.shape;
                for (var name in defaultShape) {
                    if (
                        ! thisShape.hasOwnProperty(name)
                        && defaultShape.hasOwnProperty(name)
                    ) {
                        thisShape[name] = defaultShape[name];
                    }
                }
            }

            defaults.init && defaults.init.call(this, opts);
        };

        zrUtil.inherits(Sub, Path);

        // FIXME 不能 extend position, rotation 等引用对象
        for (var name in defaults) {
            // Extending prototype values and methods
            if (name !== 'style' && name !== 'shape') {
                Sub.prototype[name] = defaults[name];
            }
        }

        return Sub;
    };

    zrUtil.inherits(Path, Displayable);

    return Path;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 241:
/***/ (function(module, exports) {


var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    return uri;
};


/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
  , length = 64
  , map = {}
  , seed = 0
  , i = 0
  , prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now +'.'+ encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) map[alphabet[i]] = i;

//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;


/***/ }),

/***/ 268:
/***/ (function(module, exports) {

/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};


/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/* global Blob File */

/*
 * Module requirements.
 */

var isArray = __webpack_require__(301);

var toString = Object.prototype.toString;
var withNativeBlob = typeof global.Blob === 'function' || toString.call(global.Blob) === '[object BlobConstructor]';
var withNativeFile = typeof global.File === 'function' || toString.call(global.File) === '[object FileConstructor]';

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary (obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }

  if ((typeof global.Buffer === 'function' && global.Buffer.isBuffer && global.Buffer.isBuffer(obj)) ||
     (typeof global.ArrayBuffer === 'function' && obj instanceof ArrayBuffer) ||
     (withNativeBlob && obj instanceof Blob) ||
     (withNativeFile && obj instanceof File)
    ) {
    return true;
  }

  // see: https://github.com/Automattic/has-binary/pull/4
  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var eio = __webpack_require__(718);
var Socket = __webpack_require__(304);
var Emitter = __webpack_require__(81);
var parser = __webpack_require__(208);
var on = __webpack_require__(303);
var bind = __webpack_require__(268);
var debug = __webpack_require__(52)('socket.io-client:manager');
var indexOf = __webpack_require__(241);
var Backoff = __webpack_require__(562);

/**
 * IE6+ hasOwnProperty
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager (uri, opts) {
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if (uri && ('object' === typeof uri)) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];
  var _parser = opts.parser || parser;
  this.encoder = new _parser.Encoder();
  this.decoder = new _parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}

/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */

Manager.prototype.emitAll = function () {
  this.emit.apply(this, arguments);
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};

/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */

Manager.prototype.updateSocketIds = function () {
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.generateId(nsp);
    }
  }
};

/**
 * generate `socket.id` for the given `nsp`
 *
 * @param {String} nsp
 * @return {String}
 * @api private
 */

Manager.prototype.generateId = function (nsp) {
  return (nsp === '/' ? '' : (nsp + '#')) + this.engine.id;
};

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function (v) {
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function (v) {
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function (v) {
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function (v) {
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function (v) {
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function (v) {
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function () {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};

/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open =
Manager.prototype.connect = function (fn, opts) {
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false;

  // emit `open`
  var openSub = on(socket, 'open', function () {
    self.onopen();
    fn && fn();
  });

  // emit `connect_error`
  var errorSub = on(socket, 'error', function (data) {
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  });

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    // set timer
    var timer = setTimeout(function () {
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function () {
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};

/**
 * Called upon a ping.
 *
 * @api private
 */

Manager.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll('ping');
};

/**
 * Called upon a packet.
 *
 * @api private
 */

Manager.prototype.onpong = function () {
  this.emitAll('pong', new Date() - this.lastPing);
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function (data) {
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function (err) {
  debug('error', err);
  this.emitAll('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function (nsp, opts) {
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp, opts);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', function () {
      socket.id = self.generateId(nsp);
    });

    if (this.autoConnect) {
      // manually call here since connecting event is fired before listening
      onConnecting();
    }
  }

  function onConnecting () {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function (socket) {
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;

  this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function (packet) {
  debug('writing packet %j', packet);
  var self = this;
  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function (encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }
      self.encoding = false;
      self.processPacketQueue();
    });
  } else { // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function () {
  debug('cleanup');

  var subsLength = this.subs.length;
  for (var i = 0; i < subsLength; i++) {
    var sub = this.subs.shift();
    sub.destroy();
  }

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close =
Manager.prototype.disconnect = function () {
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;
  if ('opening' === this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }
  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function (reason) {
  debug('onclose');

  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) return this;

  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout(function () {
      if (self.skipReconnect) return;

      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts);

      // check again for the case socket closed in above events
      if (self.skipReconnect) return;

      self.open(function (err) {
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function () {
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};


/***/ }),

/***/ 303:
/***/ (function(module, exports) {


/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on (obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function () {
      obj.removeListener(ev, fn);
    }
  };
}


/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var parser = __webpack_require__(208);
var Emitter = __webpack_require__(81);
var toArray = __webpack_require__(401);
var on = __webpack_require__(303);
var bind = __webpack_require__(268);
var debug = __webpack_require__(52)('socket.io-client:socket');
var parseqs = __webpack_require__(123);

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket (io, nsp, opts) {
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  if (opts && opts.query) {
    this.query = opts.query;
  }
  if (this.io.autoConnect) this.open();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function () {
  if (this.subs) return;

  var io = this.io;
  this.subs = [
    on(io, 'open', bind(this, 'onopen')),
    on(io, 'packet', bind(this, 'onpacket')),
    on(io, 'close', bind(this, 'onclose'))
  ];
};

/**
 * "Opens" the socket.
 *
 * @api public
 */

Socket.prototype.open =
Socket.prototype.connect = function () {
  if (this.connected) return this;

  this.subEvents();
  this.io.open(); // ensure open
  if ('open' === this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function () {
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function (ev) {
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var packet = { type: parser.EVENT, data: args };

  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress;

  // event ack callback
  if ('function' === typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  delete this.flags;

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function (packet) {
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.onopen = function () {
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' !== this.nsp) {
    if (this.query) {
      var query = typeof this.query === 'object' ? parseqs.encode(this.query) : this.query;
      debug('sending connect packet with query %s', query);
      this.packet({type: parser.CONNECT, query: query});
    } else {
      this.packet({type: parser.CONNECT});
    }
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function (reason) {
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function (packet) {
  if (packet.nsp !== this.nsp) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function (packet) {
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function (id) {
  var self = this;
  var sent = false;
  return function () {
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);

    self.packet({
      type: parser.ACK,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function (packet) {
  var ack = this.acks[packet.id];
  if ('function' === typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function () {
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */

Socket.prototype.emitBuffered = function () {
  var i;
  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }
  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }
  this.sendBuffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function () {
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function () {
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }
    this.subs = null;
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close =
Socket.prototype.disconnect = function () {
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({ type: parser.DISCONNECT });
  }

  // remove socket from pool
  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }
  return this;
};

/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */

Socket.prototype.compress = function (compress) {
  this.flags = this.flags || {};
  this.flags.compress = compress;
  return this;
};


/***/ }),

/***/ 314:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies
 */

var XMLHttpRequest = __webpack_require__(207);
var XHR = __webpack_require__(722);
var JSONP = __webpack_require__(721);
var websocket = __webpack_require__(723);

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling (opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (global.location) {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var Transport = __webpack_require__(206);
var parseqs = __webpack_require__(123);
var parser = __webpack_require__(86);
var inherit = __webpack_require__(122);
var yeast = __webpack_require__(243);
var debug = __webpack_require__(52)('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function () {
  var XMLHttpRequest = __webpack_require__(207);
  var xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function () {
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function (onPause) {
  var self = this;

  this.readyState = 'pausing';

  function pause () {
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function () {
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function () {
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function () {
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function (data) {
  var self = this;
  debug('polling got data %s', data);
  var callback = function (packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' === self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' === packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' !== this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' === this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function () {
  var self = this;

  function close () {
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' === this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function (packets) {
  var self = this;
  this.writable = false;
  var callbackfn = function () {
    self.writable = true;
    self.emit('drain');
  };

  parser.encodePayload(packets, this.supportsBinary, function (data) {
    self.doWrite(data, callbackfn);
  });
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced
  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // avoid port if default for schema
  if (this.port && (('https' === schema && Number(this.port) !== 443) ||
     ('http' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};


/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = isBuf;

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @module zrender/core/util
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

    // 用于处理merge时无法遍历Date等对象的问题
    var BUILTIN_OBJECT = {
        '[object Function]': 1,
        '[object RegExp]': 1,
        '[object Date]': 1,
        '[object Error]': 1,
        '[object CanvasGradient]': 1,
        '[object CanvasPattern]': 1,
        // For node-canvas
        '[object Image]': 1,
        '[object Canvas]': 1
    };

    var TYPED_ARRAY = {
        '[object Int8Array]': 1,
        '[object Uint8Array]': 1,
        '[object Uint8ClampedArray]': 1,
        '[object Int16Array]': 1,
        '[object Uint16Array]': 1,
        '[object Int32Array]': 1,
        '[object Uint32Array]': 1,
        '[object Float32Array]': 1,
        '[object Float64Array]': 1
    };

    var objToString = Object.prototype.toString;

    var arrayProto = Array.prototype;
    var nativeForEach = arrayProto.forEach;
    var nativeFilter = arrayProto.filter;
    var nativeSlice = arrayProto.slice;
    var nativeMap = arrayProto.map;
    var nativeReduce = arrayProto.reduce;

    /**
     * Those data types can be cloned:
     *     Plain object, Array, TypedArray, number, string, null, undefined.
     * Those data types will be assgined using the orginal data:
     *     BUILTIN_OBJECT
     * Instance of user defined class will be cloned to a plain object, without
     * properties in prototype.
     * Other data types is not supported (not sure what will happen).
     *
     * Caution: do not support clone Date, for performance consideration.
     * (There might be a large number of date in `series.data`).
     * So date should not be modified in and out of echarts.
     *
     * @param {*} source
     * @return {*} new
     */
    function clone(source) {
        if (source == null || typeof source != 'object') {
            return source;
        }

        var result = source;
        var typeStr = objToString.call(source);

        if (typeStr === '[object Array]') {
            result = [];
            for (var i = 0, len = source.length; i < len; i++) {
                result[i] = clone(source[i]);
            }
        }
        else if (TYPED_ARRAY[typeStr]) {
            result = source.constructor.from(source);
        }
        else if (!BUILTIN_OBJECT[typeStr] && !isPrimitive(source) && !isDom(source)) {
            result = {};
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    result[key] = clone(source[key]);
                }
            }
        }

        return result;
    }

    /**
     * @memberOf module:zrender/core/util
     * @param {*} target
     * @param {*} source
     * @param {boolean} [overwrite=false]
     */
    function merge(target, source, overwrite) {
        // We should escapse that source is string
        // and enter for ... in ...
        if (!isObject(source) || !isObject(target)) {
            return overwrite ? clone(source) : target;
        }

        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                var targetProp = target[key];
                var sourceProp = source[key];

                if (isObject(sourceProp)
                    && isObject(targetProp)
                    && !isArray(sourceProp)
                    && !isArray(targetProp)
                    && !isDom(sourceProp)
                    && !isDom(targetProp)
                    && !isBuiltInObject(sourceProp)
                    && !isBuiltInObject(targetProp)
                    && !isPrimitive(sourceProp)
                    && !isPrimitive(targetProp)
                ) {
                    // 如果需要递归覆盖，就递归调用merge
                    merge(targetProp, sourceProp, overwrite);
                }
                else if (overwrite || !(key in target)) {
                    // 否则只处理overwrite为true，或者在目标对象中没有此属性的情况
                    // NOTE，在 target[key] 不存在的时候也是直接覆盖
                    target[key] = clone(source[key], true);
                }
            }
        }

        return target;
    }

    /**
     * @param {Array} targetAndSources The first item is target, and the rests are source.
     * @param {boolean} [overwrite=false]
     * @return {*} target
     */
    function mergeAll(targetAndSources, overwrite) {
        var result = targetAndSources[0];
        for (var i = 1, len = targetAndSources.length; i < len; i++) {
            result = merge(result, targetAndSources[i], overwrite);
        }
        return result;
    }

    /**
     * @param {*} target
     * @param {*} source
     * @memberOf module:zrender/core/util
     */
    function extend(target, source) {
        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key];
            }
        }
        return target;
    }

    /**
     * @param {*} target
     * @param {*} source
     * @param {boolen} [overlay=false]
     * @memberOf module:zrender/core/util
     */
    function defaults(target, source, overlay) {
        for (var key in source) {
            if (source.hasOwnProperty(key)
                && (overlay ? source[key] != null : target[key] == null)
            ) {
                target[key] = source[key];
            }
        }
        return target;
    }

    function createCanvas() {
        return document.createElement('canvas');
    }
    // FIXME
    var _ctx;
    function getContext() {
        if (!_ctx) {
            // Use util.createCanvas instead of createCanvas
            // because createCanvas may be overwritten in different environment
            _ctx = util.createCanvas().getContext('2d');
        }
        return _ctx;
    }

    /**
     * 查询数组中元素的index
     * @memberOf module:zrender/core/util
     */
    function indexOf(array, value) {
        if (array) {
            if (array.indexOf) {
                return array.indexOf(value);
            }
            for (var i = 0, len = array.length; i < len; i++) {
                if (array[i] === value) {
                    return i;
                }
            }
        }
        return -1;
    }

    /**
     * 构造类继承关系
     *
     * @memberOf module:zrender/core/util
     * @param {Function} clazz 源类
     * @param {Function} baseClazz 基类
     */
    function inherits(clazz, baseClazz) {
        var clazzPrototype = clazz.prototype;
        function F() {}
        F.prototype = baseClazz.prototype;
        clazz.prototype = new F();

        for (var prop in clazzPrototype) {
            clazz.prototype[prop] = clazzPrototype[prop];
        }
        clazz.prototype.constructor = clazz;
        clazz.superClass = baseClazz;
    }

    /**
     * @memberOf module:zrender/core/util
     * @param {Object|Function} target
     * @param {Object|Function} sorce
     * @param {boolean} overlay
     */
    function mixin(target, source, overlay) {
        target = 'prototype' in target ? target.prototype : target;
        source = 'prototype' in source ? source.prototype : source;

        defaults(target, source, overlay);
    }

    /**
     * Consider typed array.
     * @param {Array|TypedArray} data
     */
    function isArrayLike(data) {
        if (! data) {
            return;
        }
        if (typeof data == 'string') {
            return false;
        }
        return typeof data.length == 'number';
    }

    /**
     * 数组或对象遍历
     * @memberOf module:zrender/core/util
     * @param {Object|Array} obj
     * @param {Function} cb
     * @param {*} [context]
     */
    function each(obj, cb, context) {
        if (!(obj && cb)) {
            return;
        }
        if (obj.forEach && obj.forEach === nativeForEach) {
            obj.forEach(cb, context);
        }
        else if (obj.length === +obj.length) {
            for (var i = 0, len = obj.length; i < len; i++) {
                cb.call(context, obj[i], i, obj);
            }
        }
        else {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    cb.call(context, obj[key], key, obj);
                }
            }
        }
    }

    /**
     * 数组映射
     * @memberOf module:zrender/core/util
     * @param {Array} obj
     * @param {Function} cb
     * @param {*} [context]
     * @return {Array}
     */
    function map(obj, cb, context) {
        if (!(obj && cb)) {
            return;
        }
        if (obj.map && obj.map === nativeMap) {
            return obj.map(cb, context);
        }
        else {
            var result = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                result.push(cb.call(context, obj[i], i, obj));
            }
            return result;
        }
    }

    /**
     * @memberOf module:zrender/core/util
     * @param {Array} obj
     * @param {Function} cb
     * @param {Object} [memo]
     * @param {*} [context]
     * @return {Array}
     */
    function reduce(obj, cb, memo, context) {
        if (!(obj && cb)) {
            return;
        }
        if (obj.reduce && obj.reduce === nativeReduce) {
            return obj.reduce(cb, memo, context);
        }
        else {
            for (var i = 0, len = obj.length; i < len; i++) {
                memo = cb.call(context, memo, obj[i], i, obj);
            }
            return memo;
        }
    }

    /**
     * 数组过滤
     * @memberOf module:zrender/core/util
     * @param {Array} obj
     * @param {Function} cb
     * @param {*} [context]
     * @return {Array}
     */
    function filter(obj, cb, context) {
        if (!(obj && cb)) {
            return;
        }
        if (obj.filter && obj.filter === nativeFilter) {
            return obj.filter(cb, context);
        }
        else {
            var result = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                if (cb.call(context, obj[i], i, obj)) {
                    result.push(obj[i]);
                }
            }
            return result;
        }
    }

    /**
     * 数组项查找
     * @memberOf module:zrender/core/util
     * @param {Array} obj
     * @param {Function} cb
     * @param {*} [context]
     * @return {Array}
     */
    function find(obj, cb, context) {
        if (!(obj && cb)) {
            return;
        }
        for (var i = 0, len = obj.length; i < len; i++) {
            if (cb.call(context, obj[i], i, obj)) {
                return obj[i];
            }
        }
    }

    /**
     * @memberOf module:zrender/core/util
     * @param {Function} func
     * @param {*} context
     * @return {Function}
     */
    function bind(func, context) {
        var args = nativeSlice.call(arguments, 2);
        return function () {
            return func.apply(context, args.concat(nativeSlice.call(arguments)));
        };
    }

    /**
     * @memberOf module:zrender/core/util
     * @param {Function} func
     * @return {Function}
     */
    function curry(func) {
        var args = nativeSlice.call(arguments, 1);
        return function () {
            return func.apply(this, args.concat(nativeSlice.call(arguments)));
        };
    }

    /**
     * @memberOf module:zrender/core/util
     * @param {*} value
     * @return {boolean}
     */
    function isArray(value) {
        return objToString.call(value) === '[object Array]';
    }

    /**
     * @memberOf module:zrender/core/util
     * @param {*} value
     * @return {boolean}
     */
    function isFunction(value) {
        return typeof value === 'function';
    }

    /**
     * @memberOf module:zrender/core/util
     * @param {*} value
     * @return {boolean}
     */
    function isString(value) {
        return objToString.call(value) === '[object String]';
    }

    /**
     * @memberOf module:zrender/core/util
     * @param {*} value
     * @return {boolean}
     */
    function isObject(value) {
        // Avoid a V8 JIT bug in Chrome 19-20.
        // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
        var type = typeof value;
        return type === 'function' || (!!value && type == 'object');
    }

    /**
     * @memberOf module:zrender/core/util
     * @param {*} value
     * @return {boolean}
     */
    function isBuiltInObject(value) {
        return !!BUILTIN_OBJECT[objToString.call(value)];
    }

    /**
     * @memberOf module:zrender/core/util
     * @param {*} value
     * @return {boolean}
     */
    function isDom(value) {
        return typeof value === 'object'
            && typeof value.nodeType === 'number'
            && typeof value.ownerDocument === 'object';
    }

    /**
     * Whether is exactly NaN. Notice isNaN('a') returns true.
     * @param {*} value
     * @return {boolean}
     */
    function eqNaN(value) {
        return value !== value;
    }

    /**
     * If value1 is not null, then return value1, otherwise judget rest of values.
     * @memberOf module:zrender/core/util
     * @return {*} Final value
     */
    function retrieve(values) {
        for (var i = 0, len = arguments.length; i < len; i++) {
            if (arguments[i] != null) {
                return arguments[i];
            }
        }
    }

    /**
     * @memberOf module:zrender/core/util
     * @param {Array} arr
     * @param {number} startIndex
     * @param {number} endIndex
     * @return {Array}
     */
    function slice() {
        return Function.call.apply(nativeSlice, arguments);
    }

    /**
     * @memberOf module:zrender/core/util
     * @param {boolean} condition
     * @param {string} message
     */
    function assert(condition, message) {
        if (!condition) {
            throw new Error(message);
        }
    }

    var primitiveKey = '__ec_primitive__';
    /**
     * Set an object as primitive to be ignored traversing children in clone or merge
     */
    function setAsPrimitive(obj) {
        obj[primitiveKey] = true;
    }

    function isPrimitive(obj) {
        return obj[primitiveKey];
    }

    /**
     * @constructor
     * @param {Object} obj Only apply `ownProperty`.
     */
    function HashMap(obj) {
        obj && each(obj, function (value, key) {
            this.set(key, value);
        }, this);
    }

    // Add prefix to avoid conflict with Object.prototype.
    var HASH_MAP_PREFIX = '_ec_';
    var HASH_MAP_PREFIX_LENGTH = 4;

    HashMap.prototype = {
        constructor: HashMap,
        // Do not provide `has` method to avoid defining what is `has`.
        // (We usually treat `null` and `undefined` as the same, different
        // from ES6 Map).
        get: function (key) {
            return this[HASH_MAP_PREFIX + key];
        },
        set: function (key, value) {
            this[HASH_MAP_PREFIX + key] = value;
            // Comparing with invocation chaining, `return value` is more commonly
            // used in this case: `var someVal = map.set('a', genVal());`
            return value;
        },
        // Although util.each can be performed on this hashMap directly, user
        // should not use the exposed keys, who are prefixed.
        each: function (cb, context) {
            context !== void 0 && (cb = bind(cb, context));
            for (var prefixedKey in this) {
                this.hasOwnProperty(prefixedKey)
                    && cb(this[prefixedKey], prefixedKey.slice(HASH_MAP_PREFIX_LENGTH));
            }
        },
        // Do not use this method if performance sensitive.
        removeKey: function (key) {
            delete this[key];
        }
    };

    function createHashMap(obj) {
        return new HashMap(obj);
    }

    var util = {
        inherits: inherits,
        mixin: mixin,
        clone: clone,
        merge: merge,
        mergeAll: mergeAll,
        extend: extend,
        defaults: defaults,
        getContext: getContext,
        createCanvas: createCanvas,
        indexOf: indexOf,
        slice: slice,
        find: find,
        isArrayLike: isArrayLike,
        each: each,
        map: map,
        reduce: reduce,
        filter: filter,
        bind: bind,
        curry: curry,
        isArray: isArray,
        isString: isString,
        isObject: isObject,
        isFunction: isFunction,
        isBuiltInObject: isBuiltInObject,
        isDom: isDom,
        eqNaN: eqNaN,
        retrieve: retrieve,
        assert: assert,
        setAsPrimitive: setAsPrimitive,
        createHashMap: createHashMap,
        noop: function () {}
    };
    return util;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @module zrender/Element
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {
    'use strict';

    var guid = __webpack_require__(336);
    var Eventful = __webpack_require__(155);
    var Transformable = __webpack_require__(781);
    var Animatable = __webpack_require__(779);
    var zrUtil = __webpack_require__(33);

    /**
     * @alias module:zrender/Element
     * @constructor
     * @extends {module:zrender/mixin/Animatable}
     * @extends {module:zrender/mixin/Transformable}
     * @extends {module:zrender/mixin/Eventful}
     */
    var Element = function (opts) {

        Transformable.call(this, opts);
        Eventful.call(this, opts);
        Animatable.call(this, opts);

        /**
         * 画布元素ID
         * @type {string}
         */
        this.id = opts.id || guid();
    };

    Element.prototype = {

        /**
         * 元素类型
         * Element type
         * @type {string}
         */
        type: 'element',

        /**
         * 元素名字
         * Element name
         * @type {string}
         */
        name: '',

        /**
         * ZRender 实例对象，会在 element 添加到 zrender 实例中后自动赋值
         * ZRender instance will be assigned when element is associated with zrender
         * @name module:/zrender/Element#__zr
         * @type {module:zrender/ZRender}
         */
        __zr: null,

        /**
         * 图形是否忽略，为true时忽略图形的绘制以及事件触发
         * If ignore drawing and events of the element object
         * @name module:/zrender/Element#ignore
         * @type {boolean}
         * @default false
         */
        ignore: false,

        /**
         * 用于裁剪的路径(shape)，所有 Group 内的路径在绘制时都会被这个路径裁剪
         * 该路径会继承被裁减对象的变换
         * @type {module:zrender/graphic/Path}
         * @see http://www.w3.org/TR/2dcontext/#clipping-region
         * @readOnly
         */
        clipPath: null,

        /**
         * Drift element
         * @param  {number} dx dx on the global space
         * @param  {number} dy dy on the global space
         */
        drift: function (dx, dy) {
            switch (this.draggable) {
                case 'horizontal':
                    dy = 0;
                    break;
                case 'vertical':
                    dx = 0;
                    break;
            }

            var m = this.transform;
            if (!m) {
                m = this.transform = [1, 0, 0, 1, 0, 0];
            }
            m[4] += dx;
            m[5] += dy;

            this.decomposeTransform();
            this.dirty(false);
        },

        /**
         * Hook before update
         */
        beforeUpdate: function () {},
        /**
         * Hook after update
         */
        afterUpdate: function () {},
        /**
         * Update each frame
         */
        update: function () {
            this.updateTransform();
        },

        /**
         * @param  {Function} cb
         * @param  {}   context
         */
        traverse: function (cb, context) {},

        /**
         * @protected
         */
        attrKV: function (key, value) {
            if (key === 'position' || key === 'scale' || key === 'origin') {
                // Copy the array
                if (value) {
                    var target = this[key];
                    if (!target) {
                        target = this[key] = [];
                    }
                    target[0] = value[0];
                    target[1] = value[1];
                }
            }
            else {
                this[key] = value;
            }
        },

        /**
         * Hide the element
         */
        hide: function () {
            this.ignore = true;
            this.__zr && this.__zr.refresh();
        },

        /**
         * Show the element
         */
        show: function () {
            this.ignore = false;
            this.__zr && this.__zr.refresh();
        },

        /**
         * @param {string|Object} key
         * @param {*} value
         */
        attr: function (key, value) {
            if (typeof key === 'string') {
                this.attrKV(key, value);
            }
            else if (zrUtil.isObject(key)) {
                for (var name in key) {
                    if (key.hasOwnProperty(name)) {
                        this.attrKV(name, key[name]);
                    }
                }
            }

            this.dirty(false);

            return this;
        },

        /**
         * @param {module:zrender/graphic/Path} clipPath
         */
        setClipPath: function (clipPath) {
            var zr = this.__zr;
            if (zr) {
                clipPath.addSelfToZr(zr);
            }

            // Remove previous clip path
            if (this.clipPath && this.clipPath !== clipPath) {
                this.removeClipPath();
            }

            this.clipPath = clipPath;
            clipPath.__zr = zr;
            clipPath.__clipTarget = this;

            this.dirty(false);
        },

        /**
         */
        removeClipPath: function () {
            var clipPath = this.clipPath;
            if (clipPath) {
                if (clipPath.__zr) {
                    clipPath.removeSelfFromZr(clipPath.__zr);
                }

                clipPath.__zr = null;
                clipPath.__clipTarget = null;
                this.clipPath = null;

                this.dirty(false);
            }
        },

        /**
         * Add self from zrender instance.
         * Not recursively because it will be invoked when element added to storage.
         * @param {module:zrender/ZRender} zr
         */
        addSelfToZr: function (zr) {
            this.__zr = zr;
            // 添加动画
            var animators = this.animators;
            if (animators) {
                for (var i = 0; i < animators.length; i++) {
                    zr.animation.addAnimator(animators[i]);
                }
            }

            if (this.clipPath) {
                this.clipPath.addSelfToZr(zr);
            }
        },

        /**
         * Remove self from zrender instance.
         * Not recursively because it will be invoked when element added to storage.
         * @param {module:zrender/ZRender} zr
         */
        removeSelfFromZr: function (zr) {
            this.__zr = null;
            // 移除动画
            var animators = this.animators;
            if (animators) {
                for (var i = 0; i < animators.length; i++) {
                    zr.animation.removeAnimator(animators[i]);
                }
            }

            if (this.clipPath) {
                this.clipPath.removeSelfFromZr(zr);
            }
        }
    };

    zrUtil.mixin(Element, Animatable);
    zrUtil.mixin(Element, Transformable);
    zrUtil.mixin(Element, Eventful);

    return Element;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @module echarts/animation/Animator
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var Clip = __webpack_require__(763);
    var color = __webpack_require__(782);
    var util = __webpack_require__(33);
    var isArrayLike = util.isArrayLike;

    var arraySlice = Array.prototype.slice;

    function defaultGetter(target, key) {
        return target[key];
    }

    function defaultSetter(target, key, value) {
        target[key] = value;
    }

    /**
     * @param  {number} p0
     * @param  {number} p1
     * @param  {number} percent
     * @return {number}
     */
    function interpolateNumber(p0, p1, percent) {
        return (p1 - p0) * percent + p0;
    }

    /**
     * @param  {string} p0
     * @param  {string} p1
     * @param  {number} percent
     * @return {string}
     */
    function interpolateString(p0, p1, percent) {
        return percent > 0.5 ? p1 : p0;
    }

    /**
     * @param  {Array} p0
     * @param  {Array} p1
     * @param  {number} percent
     * @param  {Array} out
     * @param  {number} arrDim
     */
    function interpolateArray(p0, p1, percent, out, arrDim) {
        var len = p0.length;
        if (arrDim == 1) {
            for (var i = 0; i < len; i++) {
                out[i] = interpolateNumber(p0[i], p1[i], percent);
            }
        }
        else {
            var len2 = len && p0[0].length;
            for (var i = 0; i < len; i++) {
                for (var j = 0; j < len2; j++) {
                    out[i][j] = interpolateNumber(
                        p0[i][j], p1[i][j], percent
                    );
                }
            }
        }
    }

    // arr0 is source array, arr1 is target array.
    // Do some preprocess to avoid error happened when interpolating from arr0 to arr1
    function fillArr(arr0, arr1, arrDim) {
        var arr0Len = arr0.length;
        var arr1Len = arr1.length;
        if (arr0Len !== arr1Len) {
            // FIXME Not work for TypedArray
            var isPreviousLarger = arr0Len > arr1Len;
            if (isPreviousLarger) {
                // Cut the previous
                arr0.length = arr1Len;
            }
            else {
                // Fill the previous
                for (var i = arr0Len; i < arr1Len; i++) {
                    arr0.push(
                        arrDim === 1 ? arr1[i] : arraySlice.call(arr1[i])
                    );
                }
            }
        }
        // Handling NaN value
        var len2 = arr0[0] && arr0[0].length;
        for (var i = 0; i < arr0.length; i++) {
            if (arrDim === 1) {
                if (isNaN(arr0[i])) {
                    arr0[i] = arr1[i];
                }
            }
            else {
                for (var j = 0; j < len2; j++) {
                    if (isNaN(arr0[i][j])) {
                        arr0[i][j] = arr1[i][j];
                    }
                }
            }
        }
    }

    /**
     * @param  {Array} arr0
     * @param  {Array} arr1
     * @param  {number} arrDim
     * @return {boolean}
     */
    function isArraySame(arr0, arr1, arrDim) {
        if (arr0 === arr1) {
            return true;
        }
        var len = arr0.length;
        if (len !== arr1.length) {
            return false;
        }
        if (arrDim === 1) {
            for (var i = 0; i < len; i++) {
                if (arr0[i] !== arr1[i]) {
                    return false;
                }
            }
        }
        else {
            var len2 = arr0[0].length;
            for (var i = 0; i < len; i++) {
                for (var j = 0; j < len2; j++) {
                    if (arr0[i][j] !== arr1[i][j]) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    /**
     * Catmull Rom interpolate array
     * @param  {Array} p0
     * @param  {Array} p1
     * @param  {Array} p2
     * @param  {Array} p3
     * @param  {number} t
     * @param  {number} t2
     * @param  {number} t3
     * @param  {Array} out
     * @param  {number} arrDim
     */
    function catmullRomInterpolateArray(
        p0, p1, p2, p3, t, t2, t3, out, arrDim
    ) {
        var len = p0.length;
        if (arrDim == 1) {
            for (var i = 0; i < len; i++) {
                out[i] = catmullRomInterpolate(
                    p0[i], p1[i], p2[i], p3[i], t, t2, t3
                );
            }
        }
        else {
            var len2 = p0[0].length;
            for (var i = 0; i < len; i++) {
                for (var j = 0; j < len2; j++) {
                    out[i][j] = catmullRomInterpolate(
                        p0[i][j], p1[i][j], p2[i][j], p3[i][j],
                        t, t2, t3
                    );
                }
            }
        }
    }

    /**
     * Catmull Rom interpolate number
     * @param  {number} p0
     * @param  {number} p1
     * @param  {number} p2
     * @param  {number} p3
     * @param  {number} t
     * @param  {number} t2
     * @param  {number} t3
     * @return {number}
     */
    function catmullRomInterpolate(p0, p1, p2, p3, t, t2, t3) {
        var v0 = (p2 - p0) * 0.5;
        var v1 = (p3 - p1) * 0.5;
        return (2 * (p1 - p2) + v0 + v1) * t3
                + (-3 * (p1 - p2) - 2 * v0 - v1) * t2
                + v0 * t + p1;
    }

    function cloneValue(value) {
        if (isArrayLike(value)) {
            var len = value.length;
            if (isArrayLike(value[0])) {
                var ret = [];
                for (var i = 0; i < len; i++) {
                    ret.push(arraySlice.call(value[i]));
                }
                return ret;
            }

            return arraySlice.call(value);
        }

        return value;
    }

    function rgba2String(rgba) {
        rgba[0] = Math.floor(rgba[0]);
        rgba[1] = Math.floor(rgba[1]);
        rgba[2] = Math.floor(rgba[2]);

        return 'rgba(' + rgba.join(',') + ')';
    }

    function getArrayDim(keyframes) {
        var lastValue = keyframes[keyframes.length - 1].value;
        return isArrayLike(lastValue && lastValue[0]) ? 2 : 1;
    }

    function createTrackClip (animator, easing, oneTrackDone, keyframes, propName) {
        var getter = animator._getter;
        var setter = animator._setter;
        var useSpline = easing === 'spline';

        var trackLen = keyframes.length;
        if (!trackLen) {
            return;
        }
        // Guess data type
        var firstVal = keyframes[0].value;
        var isValueArray = isArrayLike(firstVal);
        var isValueColor = false;
        var isValueString = false;

        // For vertices morphing
        var arrDim = isValueArray ? getArrayDim(keyframes) : 0;

        var trackMaxTime;
        // Sort keyframe as ascending
        keyframes.sort(function(a, b) {
            return a.time - b.time;
        });

        trackMaxTime = keyframes[trackLen - 1].time;
        // Percents of each keyframe
        var kfPercents = [];
        // Value of each keyframe
        var kfValues = [];
        var prevValue = keyframes[0].value;
        var isAllValueEqual = true;
        for (var i = 0; i < trackLen; i++) {
            kfPercents.push(keyframes[i].time / trackMaxTime);
            // Assume value is a color when it is a string
            var value = keyframes[i].value;

            // Check if value is equal, deep check if value is array
            if (!((isValueArray && isArraySame(value, prevValue, arrDim))
                || (!isValueArray && value === prevValue))) {
                isAllValueEqual = false;
            }
            prevValue = value;

            // Try converting a string to a color array
            if (typeof value == 'string') {
                var colorArray = color.parse(value);
                if (colorArray) {
                    value = colorArray;
                    isValueColor = true;
                }
                else {
                    isValueString = true;
                }
            }
            kfValues.push(value);
        }
        if (isAllValueEqual) {
            return;
        }

        var lastValue = kfValues[trackLen - 1];
        // Polyfill array and NaN value
        for (var i = 0; i < trackLen - 1; i++) {
            if (isValueArray) {
                fillArr(kfValues[i], lastValue, arrDim);
            }
            else {
                if (isNaN(kfValues[i]) && !isNaN(lastValue) && !isValueString && !isValueColor) {
                    kfValues[i] = lastValue;
                }
            }
        }
        isValueArray && fillArr(getter(animator._target, propName), lastValue, arrDim);

        // Cache the key of last frame to speed up when
        // animation playback is sequency
        var lastFrame = 0;
        var lastFramePercent = 0;
        var start;
        var w;
        var p0;
        var p1;
        var p2;
        var p3;

        if (isValueColor) {
            var rgba = [0, 0, 0, 0];
        }

        var onframe = function (target, percent) {
            // Find the range keyframes
            // kf1-----kf2---------current--------kf3
            // find kf2 and kf3 and do interpolation
            var frame;
            // In the easing function like elasticOut, percent may less than 0
            if (percent < 0) {
                frame = 0;
            }
            else if (percent < lastFramePercent) {
                // Start from next key
                // PENDING start from lastFrame ?
                start = Math.min(lastFrame + 1, trackLen - 1);
                for (frame = start; frame >= 0; frame--) {
                    if (kfPercents[frame] <= percent) {
                        break;
                    }
                }
                // PENDING really need to do this ?
                frame = Math.min(frame, trackLen - 2);
            }
            else {
                for (frame = lastFrame; frame < trackLen; frame++) {
                    if (kfPercents[frame] > percent) {
                        break;
                    }
                }
                frame = Math.min(frame - 1, trackLen - 2);
            }
            lastFrame = frame;
            lastFramePercent = percent;

            var range = (kfPercents[frame + 1] - kfPercents[frame]);
            if (range === 0) {
                return;
            }
            else {
                w = (percent - kfPercents[frame]) / range;
            }
            if (useSpline) {
                p1 = kfValues[frame];
                p0 = kfValues[frame === 0 ? frame : frame - 1];
                p2 = kfValues[frame > trackLen - 2 ? trackLen - 1 : frame + 1];
                p3 = kfValues[frame > trackLen - 3 ? trackLen - 1 : frame + 2];
                if (isValueArray) {
                    catmullRomInterpolateArray(
                        p0, p1, p2, p3, w, w * w, w * w * w,
                        getter(target, propName),
                        arrDim
                    );
                }
                else {
                    var value;
                    if (isValueColor) {
                        value = catmullRomInterpolateArray(
                            p0, p1, p2, p3, w, w * w, w * w * w,
                            rgba, 1
                        );
                        value = rgba2String(rgba);
                    }
                    else if (isValueString) {
                        // String is step(0.5)
                        return interpolateString(p1, p2, w);
                    }
                    else {
                        value = catmullRomInterpolate(
                            p0, p1, p2, p3, w, w * w, w * w * w
                        );
                    }
                    setter(
                        target,
                        propName,
                        value
                    );
                }
            }
            else {
                if (isValueArray) {
                    interpolateArray(
                        kfValues[frame], kfValues[frame + 1], w,
                        getter(target, propName),
                        arrDim
                    );
                }
                else {
                    var value;
                    if (isValueColor) {
                        interpolateArray(
                            kfValues[frame], kfValues[frame + 1], w,
                            rgba, 1
                        );
                        value = rgba2String(rgba);
                    }
                    else if (isValueString) {
                        // String is step(0.5)
                        return interpolateString(kfValues[frame], kfValues[frame + 1], w);
                    }
                    else {
                        value = interpolateNumber(kfValues[frame], kfValues[frame + 1], w);
                    }
                    setter(
                        target,
                        propName,
                        value
                    );
                }
            }
        };

        var clip = new Clip({
            target: animator._target,
            life: trackMaxTime,
            loop: animator._loop,
            delay: animator._delay,
            onframe: onframe,
            ondestroy: oneTrackDone
        });

        if (easing && easing !== 'spline') {
            clip.easing = easing;
        }

        return clip;
    }

    /**
     * @alias module:zrender/animation/Animator
     * @constructor
     * @param {Object} target
     * @param {boolean} loop
     * @param {Function} getter
     * @param {Function} setter
     */
    var Animator = function(target, loop, getter, setter) {
        this._tracks = {};
        this._target = target;

        this._loop = loop || false;

        this._getter = getter || defaultGetter;
        this._setter = setter || defaultSetter;

        this._clipCount = 0;

        this._delay = 0;

        this._doneList = [];

        this._onframeList = [];

        this._clipList = [];
    };

    Animator.prototype = {
        /**
         * 设置动画关键帧
         * @param  {number} time 关键帧时间，单位是ms
         * @param  {Object} props 关键帧的属性值，key-value表示
         * @return {module:zrender/animation/Animator}
         */
        when: function(time /* ms */, props) {
            var tracks = this._tracks;
            for (var propName in props) {
                if (!props.hasOwnProperty(propName)) {
                    continue;
                }

                if (!tracks[propName]) {
                    tracks[propName] = [];
                    // Invalid value
                    var value = this._getter(this._target, propName);
                    if (value == null) {
                        // zrLog('Invalid property ' + propName);
                        continue;
                    }
                    // If time is 0
                    //  Then props is given initialize value
                    // Else
                    //  Initialize value from current prop value
                    if (time !== 0) {
                        tracks[propName].push({
                            time: 0,
                            value: cloneValue(value)
                        });
                    }
                }
                tracks[propName].push({
                    time: time,
                    value: props[propName]
                });
            }
            return this;
        },
        /**
         * 添加动画每一帧的回调函数
         * @param  {Function} callback
         * @return {module:zrender/animation/Animator}
         */
        during: function (callback) {
            this._onframeList.push(callback);
            return this;
        },

        pause: function () {
            for (var i = 0; i < this._clipList.length; i++) {
                this._clipList[i].pause();
            }
            this._paused = true;
        },

        resume: function () {
            for (var i = 0; i < this._clipList.length; i++) {
                this._clipList[i].resume();
            }
            this._paused = false;
        },

        isPaused: function () {
            return !!this._paused;
        },

        _doneCallback: function () {
            // Clear all tracks
            this._tracks = {};
            // Clear all clips
            this._clipList.length = 0;

            var doneList = this._doneList;
            var len = doneList.length;
            for (var i = 0; i < len; i++) {
                doneList[i].call(this);
            }
        },
        /**
         * 开始执行动画
         * @param  {string|Function} easing
         *         动画缓动函数，详见{@link module:zrender/animation/easing}
         * @return {module:zrender/animation/Animator}
         */
        start: function (easing) {

            var self = this;
            var clipCount = 0;

            var oneTrackDone = function() {
                clipCount--;
                if (!clipCount) {
                    self._doneCallback();
                }
            };

            var lastClip;
            for (var propName in this._tracks) {
                if (!this._tracks.hasOwnProperty(propName)) {
                    continue;
                }
                var clip = createTrackClip(
                    this, easing, oneTrackDone,
                    this._tracks[propName], propName
                );
                if (clip) {
                    this._clipList.push(clip);
                    clipCount++;

                    // If start after added to animation
                    if (this.animation) {
                        this.animation.addClip(clip);
                    }

                    lastClip = clip;
                }
            }

            // Add during callback on the last clip
            if (lastClip) {
                var oldOnFrame = lastClip.onframe;
                lastClip.onframe = function (target, percent) {
                    oldOnFrame(target, percent);

                    for (var i = 0; i < self._onframeList.length; i++) {
                        self._onframeList[i](target, percent);
                    }
                };
            }

            if (!clipCount) {
                this._doneCallback();
            }
            return this;
        },
        /**
         * 停止动画
         * @param {boolean} forwardToLast If move to last frame before stop
         */
        stop: function (forwardToLast) {
            var clipList = this._clipList;
            var animation = this.animation;
            for (var i = 0; i < clipList.length; i++) {
                var clip = clipList[i];
                if (forwardToLast) {
                    // Move to last frame before stop
                    clip.onframe(this._target, 1);
                }
                animation && animation.removeClip(clip);
            }
            clipList.length = 0;
        },
        /**
         * 设置动画延迟开始的时间
         * @param  {number} time 单位ms
         * @return {module:zrender/animation/Animator}
         */
        delay: function (time) {
            this._delay = time;
            return this;
        },
        /**
         * 添加动画结束的回调
         * @param  {Function} cb
         * @return {module:zrender/animation/Animator}
         */
        done: function(cb) {
            if (cb) {
                this._doneList.push(cb);
            }
            return this;
        },

        /**
         * @return {Array.<module:zrender/animation/Clip>}
         */
        getClips: function () {
            return this._clipList;
        }
    };

    return Animator;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

    return (typeof window !== 'undefined' &&
                ((window.requestAnimationFrame && window.requestAnimationFrame.bind(window))
                // https://github.com/ecomfe/zrender/issues/189#issuecomment-224919809
                || (window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window))
                || window.mozRequestAnimationFrame
                || window.webkitRequestAnimationFrame)
            )
            || function (func) {
                setTimeout(func, 16);
            };
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var PI2 = Math.PI * 2;
    return {
        normalizeRadian: function(angle) {
            angle %= PI2;
            if (angle < 0) {
                angle += PI2;
            }
            return angle;
        }
    };
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// Simple LRU cache use doubly linked list
// @module zrender/core/LRU
!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    /**
     * Simple double linked list. Compared with array, it has O(1) remove operation.
     * @constructor
     */
    var LinkedList = function () {

        /**
         * @type {module:zrender/core/LRU~Entry}
         */
        this.head = null;

        /**
         * @type {module:zrender/core/LRU~Entry}
         */
        this.tail = null;

        this._len = 0;
    };

    var linkedListProto = LinkedList.prototype;
    /**
     * Insert a new value at the tail
     * @param  {} val
     * @return {module:zrender/core/LRU~Entry}
     */
    linkedListProto.insert = function (val) {
        var entry = new Entry(val);
        this.insertEntry(entry);
        return entry;
    };

    /**
     * Insert an entry at the tail
     * @param  {module:zrender/core/LRU~Entry} entry
     */
    linkedListProto.insertEntry = function (entry) {
        if (!this.head) {
            this.head = this.tail = entry;
        }
        else {
            this.tail.next = entry;
            entry.prev = this.tail;
            entry.next = null;
            this.tail = entry;
        }
        this._len++;
    };

    /**
     * Remove entry.
     * @param  {module:zrender/core/LRU~Entry} entry
     */
    linkedListProto.remove = function (entry) {
        var prev = entry.prev;
        var next = entry.next;
        if (prev) {
            prev.next = next;
        }
        else {
            // Is head
            this.head = next;
        }
        if (next) {
            next.prev = prev;
        }
        else {
            // Is tail
            this.tail = prev;
        }
        entry.next = entry.prev = null;
        this._len--;
    };

    /**
     * @return {number}
     */
    linkedListProto.len = function () {
        return this._len;
    };

    /**
     * Clear list
     */
    linkedListProto.clear = function () {
        this.head = this.tail = null;
        this._len = 0;
    };

    /**
     * @constructor
     * @param {} val
     */
    var Entry = function (val) {
        /**
         * @type {}
         */
        this.value = val;

        /**
         * @type {module:zrender/core/LRU~Entry}
         */
        this.next;

        /**
         * @type {module:zrender/core/LRU~Entry}
         */
        this.prev;
    };

    /**
     * LRU Cache
     * @constructor
     * @alias module:zrender/core/LRU
     */
    var LRU = function (maxSize) {

        this._list = new LinkedList();

        this._map = {};

        this._maxSize = maxSize || 10;

        this._lastRemovedEntry = null;
    };

    var LRUProto = LRU.prototype;

    /**
     * @param  {string} key
     * @param  {} value
     * @return {} Removed value
     */
    LRUProto.put = function (key, value) {
        var list = this._list;
        var map = this._map;
        var removed = null;
        if (map[key] == null) {
            var len = list.len();
            // Reuse last removed entry
            var entry = this._lastRemovedEntry;

            if (len >= this._maxSize && len > 0) {
                // Remove the least recently used
                var leastUsedEntry = list.head;
                list.remove(leastUsedEntry);
                delete map[leastUsedEntry.key];

                removed = leastUsedEntry.value;
                this._lastRemovedEntry = leastUsedEntry;
            }

            if (entry) {
                entry.value = value;
            }
            else {
                entry = new Entry(value);
            }
            entry.key = key;
            list.insertEntry(entry);
            map[key] = entry;
        }

        return removed;
    };

    /**
     * @param  {string} key
     * @return {}
     */
    LRUProto.get = function (key) {
        var entry = this._map[key];
        var list = this._list;
        if (entry != null) {
            // Put the latest used entry in the tail
            if (entry !== list.tail) {
                list.remove(entry);
                list.insertEntry(entry);
            }

            return entry.value;
        }
    };

    /**
     * Clear the cache
     */
    LRUProto.clear = function () {
        this._list.clear();
        this._map = {};
    };

    return LRU;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * zrender: 生成唯一id
 *
 * @author errorrik (errorrik@gmail.com)
 */

!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
    var idStart = 0x0907;

    return function () {
        return idStart++;
    };
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
        var config = __webpack_require__(152);

        /**
         * @exports zrender/tool/log
         * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
         */
        return function() {
            if (config.debugMode === 0) {
                return;
            }
            else if (config.debugMode == 1) {
                for (var k in arguments) {
                    throw new Error(arguments[k]);
                }
            }
            else if (config.debugMode > 1) {
                for (var k in arguments) {
                    console.log(arguments[k]);
                }
            }
        };

        /* for debug
        return function(mes) {
            document.getElementById('wrong-message').innerHTML =
                mes + ' ' + (new Date() - 0)
                + '<br/>'
                + document.getElementById('wrong-message').innerHTML;
        };
        */
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    var ArrayCtor = typeof Float32Array === 'undefined'
        ? Array
        : Float32Array;
    /**
     * 3x2矩阵操作类
     * @exports zrender/tool/matrix
     */
    var matrix = {
        /**
         * 创建一个单位矩阵
         * @return {Float32Array|Array.<number>}
         */
        create : function() {
            var out = new ArrayCtor(6);
            matrix.identity(out);

            return out;
        },
        /**
         * 设置矩阵为单位矩阵
         * @param {Float32Array|Array.<number>} out
         */
        identity : function(out) {
            out[0] = 1;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            out[4] = 0;
            out[5] = 0;
            return out;
        },
        /**
         * 复制矩阵
         * @param {Float32Array|Array.<number>} out
         * @param {Float32Array|Array.<number>} m
         */
        copy: function(out, m) {
            out[0] = m[0];
            out[1] = m[1];
            out[2] = m[2];
            out[3] = m[3];
            out[4] = m[4];
            out[5] = m[5];
            return out;
        },
        /**
         * 矩阵相乘
         * @param {Float32Array|Array.<number>} out
         * @param {Float32Array|Array.<number>} m1
         * @param {Float32Array|Array.<number>} m2
         */
        mul : function (out, m1, m2) {
            // Consider matrix.mul(m, m2, m);
            // where out is the same as m2.
            // So use temp variable to escape error.
            var out0 = m1[0] * m2[0] + m1[2] * m2[1];
            var out1 = m1[1] * m2[0] + m1[3] * m2[1];
            var out2 = m1[0] * m2[2] + m1[2] * m2[3];
            var out3 = m1[1] * m2[2] + m1[3] * m2[3];
            var out4 = m1[0] * m2[4] + m1[2] * m2[5] + m1[4];
            var out5 = m1[1] * m2[4] + m1[3] * m2[5] + m1[5];
            out[0] = out0;
            out[1] = out1;
            out[2] = out2;
            out[3] = out3;
            out[4] = out4;
            out[5] = out5;
            return out;
        },
        /**
         * 平移变换
         * @param {Float32Array|Array.<number>} out
         * @param {Float32Array|Array.<number>} a
         * @param {Float32Array|Array.<number>} v
         */
        translate : function(out, a, v) {
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            out[4] = a[4] + v[0];
            out[5] = a[5] + v[1];
            return out;
        },
        /**
         * 旋转变换
         * @param {Float32Array|Array.<number>} out
         * @param {Float32Array|Array.<number>} a
         * @param {number} rad
         */
        rotate : function(out, a, rad) {
            var aa = a[0];
            var ac = a[2];
            var atx = a[4];
            var ab = a[1];
            var ad = a[3];
            var aty = a[5];
            var st = Math.sin(rad);
            var ct = Math.cos(rad);

            out[0] = aa * ct + ab * st;
            out[1] = -aa * st + ab * ct;
            out[2] = ac * ct + ad * st;
            out[3] = -ac * st + ct * ad;
            out[4] = ct * atx + st * aty;
            out[5] = ct * aty - st * atx;
            return out;
        },
        /**
         * 缩放变换
         * @param {Float32Array|Array.<number>} out
         * @param {Float32Array|Array.<number>} a
         * @param {Float32Array|Array.<number>} v
         */
        scale : function(out, a, v) {
            var vx = v[0];
            var vy = v[1];
            out[0] = a[0] * vx;
            out[1] = a[1] * vy;
            out[2] = a[2] * vx;
            out[3] = a[3] * vy;
            out[4] = a[4] * vx;
            out[5] = a[5] * vy;
            return out;
        },
        /**
         * 求逆矩阵
         * @param {Float32Array|Array.<number>} out
         * @param {Float32Array|Array.<number>} a
         */
        invert : function(out, a) {

            var aa = a[0];
            var ac = a[2];
            var atx = a[4];
            var ab = a[1];
            var ad = a[3];
            var aty = a[5];

            var det = aa * ad - ab * ac;
            if (!det) {
                return null;
            }
            det = 1.0 / det;

            out[0] = ad * det;
            out[1] = -ab * det;
            out[2] = -ac * det;
            out[3] = aa * det;
            out[4] = (ac * aty - ad * atx) * det;
            out[5] = (ab * atx - aa * aty) * det;
            return out;
        }
    };

    return matrix;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// https://github.com/mziccard/node-timsort
!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    var DEFAULT_MIN_MERGE = 32;

    var DEFAULT_MIN_GALLOPING = 7;

    var DEFAULT_TMP_STORAGE_LENGTH = 256;

    function minRunLength(n) {
        var r = 0;

        while (n >= DEFAULT_MIN_MERGE) {
            r |= n & 1;
            n >>= 1;
        }

        return n + r;
    }

    function makeAscendingRun(array, lo, hi, compare) {
        var runHi = lo + 1;

        if (runHi === hi) {
            return 1;
        }

        if (compare(array[runHi++], array[lo]) < 0) {
            while (runHi < hi && compare(array[runHi], array[runHi - 1]) < 0) {
                runHi++;
            }

            reverseRun(array, lo, runHi);
        }
        else {
            while (runHi < hi && compare(array[runHi], array[runHi - 1]) >= 0) {
                runHi++;
            }
        }

        return runHi - lo;
    }

    function reverseRun(array, lo, hi) {
        hi--;

        while (lo < hi) {
            var t = array[lo];
            array[lo++] = array[hi];
            array[hi--] = t;
        }
    }

    function binaryInsertionSort(array, lo, hi, start, compare) {
        if (start === lo) {
            start++;
        }

        for (; start < hi; start++) {
            var pivot = array[start];

            var left = lo;
            var right = start;
            var mid;

            while (left < right) {
                mid = left + right >>> 1;

                if (compare(pivot, array[mid]) < 0) {
                    right = mid;
                }
                else {
                    left = mid + 1;
                }
            }

            var n = start - left;

            switch (n) {
                case 3:
                    array[left + 3] = array[left + 2];

                case 2:
                    array[left + 2] = array[left + 1];

                case 1:
                    array[left + 1] = array[left];
                    break;
                default:
                    while (n > 0) {
                        array[left + n] = array[left + n - 1];
                        n--;
                    }
            }

            array[left] = pivot;
        }
    }

    function gallopLeft(value, array, start, length, hint, compare) {
        var lastOffset = 0;
        var maxOffset = 0;
        var offset = 1;

        if (compare(value, array[start + hint]) > 0) {
            maxOffset = length - hint;

            while (offset < maxOffset && compare(value, array[start + hint + offset]) > 0) {
                lastOffset = offset;
                offset = (offset << 1) + 1;

                if (offset <= 0) {
                    offset = maxOffset;
                }
            }

            if (offset > maxOffset) {
                offset = maxOffset;
            }

            lastOffset += hint;
            offset += hint;
        }
        else {
            maxOffset = hint + 1;
            while (offset < maxOffset && compare(value, array[start + hint - offset]) <= 0) {
                lastOffset = offset;
                offset = (offset << 1) + 1;

                if (offset <= 0) {
                    offset = maxOffset;
                }
            }
            if (offset > maxOffset) {
                offset = maxOffset;
            }

            var tmp = lastOffset;
            lastOffset = hint - offset;
            offset = hint - tmp;
        }

        lastOffset++;
        while (lastOffset < offset) {
            var m = lastOffset + (offset - lastOffset >>> 1);

            if (compare(value, array[start + m]) > 0) {
                lastOffset = m + 1;
            }
            else {
                offset = m;
            }
        }
        return offset;
    }

    function gallopRight(value, array, start, length, hint, compare) {
        var lastOffset = 0;
        var maxOffset = 0;
        var offset = 1;

        if (compare(value, array[start + hint]) < 0) {
            maxOffset = hint + 1;

            while (offset < maxOffset && compare(value, array[start + hint - offset]) < 0) {
                lastOffset = offset;
                offset = (offset << 1) + 1;

                if (offset <= 0) {
                    offset = maxOffset;
                }
            }

            if (offset > maxOffset) {
                offset = maxOffset;
            }

            var tmp = lastOffset;
            lastOffset = hint - offset;
            offset = hint - tmp;
        }
        else {
            maxOffset = length - hint;

            while (offset < maxOffset && compare(value, array[start + hint + offset]) >= 0) {
                lastOffset = offset;
                offset = (offset << 1) + 1;

                if (offset <= 0) {
                    offset = maxOffset;
                }
            }

            if (offset > maxOffset) {
                offset = maxOffset;
            }

            lastOffset += hint;
            offset += hint;
        }

        lastOffset++;

        while (lastOffset < offset) {
            var m = lastOffset + (offset - lastOffset >>> 1);

            if (compare(value, array[start + m]) < 0) {
                offset = m;
            }
            else {
                lastOffset = m + 1;
            }
        }

        return offset;
    }

    function TimSort(array, compare) {
        var minGallop = DEFAULT_MIN_GALLOPING;
        var length = 0;
        var tmpStorageLength = DEFAULT_TMP_STORAGE_LENGTH;
        var stackLength = 0;
        var runStart;
        var runLength;
        var stackSize = 0;

        length = array.length;

        if (length < 2 * DEFAULT_TMP_STORAGE_LENGTH) {
            tmpStorageLength = length >>> 1;
        }

        var tmp = [];

        stackLength = length < 120 ? 5 : length < 1542 ? 10 : length < 119151 ? 19 : 40;

        runStart = [];
        runLength = [];

        function pushRun(_runStart, _runLength) {
            runStart[stackSize] = _runStart;
            runLength[stackSize] = _runLength;
            stackSize += 1;
        }

        function mergeRuns() {
            while (stackSize > 1) {
                var n = stackSize - 2;

                if (n >= 1 && runLength[n - 1] <= runLength[n] + runLength[n + 1] || n >= 2 && runLength[n - 2] <= runLength[n] + runLength[n - 1]) {
                    if (runLength[n - 1] < runLength[n + 1]) {
                        n--;
                    }
                }
                else if (runLength[n] > runLength[n + 1]) {
                    break;
                }
                mergeAt(n);
            }
        }

        function forceMergeRuns() {
            while (stackSize > 1) {
                var n = stackSize - 2;

                if (n > 0 && runLength[n - 1] < runLength[n + 1]) {
                    n--;
                }

                mergeAt(n);
            }
        }

        function mergeAt(i) {
            var start1 = runStart[i];
            var length1 = runLength[i];
            var start2 = runStart[i + 1];
            var length2 = runLength[i + 1];

            runLength[i] = length1 + length2;

            if (i === stackSize - 3) {
                runStart[i + 1] = runStart[i + 2];
                runLength[i + 1] = runLength[i + 2];
            }

            stackSize--;

            var k = gallopRight(array[start2], array, start1, length1, 0, compare);
            start1 += k;
            length1 -= k;

            if (length1 === 0) {
                return;
            }

            length2 = gallopLeft(array[start1 + length1 - 1], array, start2, length2, length2 - 1, compare);

            if (length2 === 0) {
                return;
            }

            if (length1 <= length2) {
                mergeLow(start1, length1, start2, length2);
            }
            else {
                mergeHigh(start1, length1, start2, length2);
            }
        }

        function mergeLow(start1, length1, start2, length2) {
            var i = 0;

            for (i = 0; i < length1; i++) {
                tmp[i] = array[start1 + i];
            }

            var cursor1 = 0;
            var cursor2 = start2;
            var dest = start1;

            array[dest++] = array[cursor2++];

            if (--length2 === 0) {
                for (i = 0; i < length1; i++) {
                    array[dest + i] = tmp[cursor1 + i];
                }
                return;
            }

            if (length1 === 1) {
                for (i = 0; i < length2; i++) {
                    array[dest + i] = array[cursor2 + i];
                }
                array[dest + length2] = tmp[cursor1];
                return;
            }

            var _minGallop = minGallop;
            var count1, count2, exit;

            while (1) {
                count1 = 0;
                count2 = 0;
                exit = false;

                do {
                    if (compare(array[cursor2], tmp[cursor1]) < 0) {
                        array[dest++] = array[cursor2++];
                        count2++;
                        count1 = 0;

                        if (--length2 === 0) {
                            exit = true;
                            break;
                        }
                    }
                    else {
                        array[dest++] = tmp[cursor1++];
                        count1++;
                        count2 = 0;
                        if (--length1 === 1) {
                            exit = true;
                            break;
                        }
                    }
                } while ((count1 | count2) < _minGallop);

                if (exit) {
                    break;
                }

                do {
                    count1 = gallopRight(array[cursor2], tmp, cursor1, length1, 0, compare);

                    if (count1 !== 0) {
                        for (i = 0; i < count1; i++) {
                            array[dest + i] = tmp[cursor1 + i];
                        }

                        dest += count1;
                        cursor1 += count1;
                        length1 -= count1;
                        if (length1 <= 1) {
                            exit = true;
                            break;
                        }
                    }

                    array[dest++] = array[cursor2++];

                    if (--length2 === 0) {
                        exit = true;
                        break;
                    }

                    count2 = gallopLeft(tmp[cursor1], array, cursor2, length2, 0, compare);

                    if (count2 !== 0) {
                        for (i = 0; i < count2; i++) {
                            array[dest + i] = array[cursor2 + i];
                        }

                        dest += count2;
                        cursor2 += count2;
                        length2 -= count2;

                        if (length2 === 0) {
                            exit = true;
                            break;
                        }
                    }
                    array[dest++] = tmp[cursor1++];

                    if (--length1 === 1) {
                        exit = true;
                        break;
                    }

                    _minGallop--;
                } while (count1 >= DEFAULT_MIN_GALLOPING || count2 >= DEFAULT_MIN_GALLOPING);

                if (exit) {
                    break;
                }

                if (_minGallop < 0) {
                    _minGallop = 0;
                }

                _minGallop += 2;
            }

            minGallop = _minGallop;

            minGallop < 1 && (minGallop = 1);

            if (length1 === 1) {
                for (i = 0; i < length2; i++) {
                    array[dest + i] = array[cursor2 + i];
                }
                array[dest + length2] = tmp[cursor1];
            }
            else if (length1 === 0) {
                throw new Error();
                // throw new Error('mergeLow preconditions were not respected');
            }
            else {
                for (i = 0; i < length1; i++) {
                    array[dest + i] = tmp[cursor1 + i];
                }
            }
        }

        function mergeHigh (start1, length1, start2, length2) {
            var i = 0;

            for (i = 0; i < length2; i++) {
                tmp[i] = array[start2 + i];
            }

            var cursor1 = start1 + length1 - 1;
            var cursor2 = length2 - 1;
            var dest = start2 + length2 - 1;
            var customCursor = 0;
            var customDest = 0;

            array[dest--] = array[cursor1--];

            if (--length1 === 0) {
                customCursor = dest - (length2 - 1);

                for (i = 0; i < length2; i++) {
                    array[customCursor + i] = tmp[i];
                }

                return;
            }

            if (length2 === 1) {
                dest -= length1;
                cursor1 -= length1;
                customDest = dest + 1;
                customCursor = cursor1 + 1;

                for (i = length1 - 1; i >= 0; i--) {
                    array[customDest + i] = array[customCursor + i];
                }

                array[dest] = tmp[cursor2];
                return;
            }

            var _minGallop = minGallop;

            while (true) {
                var count1 = 0;
                var count2 = 0;
                var exit = false;

                do {
                    if (compare(tmp[cursor2], array[cursor1]) < 0) {
                        array[dest--] = array[cursor1--];
                        count1++;
                        count2 = 0;
                        if (--length1 === 0) {
                            exit = true;
                            break;
                        }
                    }
                    else {
                        array[dest--] = tmp[cursor2--];
                        count2++;
                        count1 = 0;
                        if (--length2 === 1) {
                            exit = true;
                            break;
                        }
                    }
                } while ((count1 | count2) < _minGallop);

                if (exit) {
                    break;
                }

                do {
                    count1 = length1 - gallopRight(tmp[cursor2], array, start1, length1, length1 - 1, compare);

                    if (count1 !== 0) {
                        dest -= count1;
                        cursor1 -= count1;
                        length1 -= count1;
                        customDest = dest + 1;
                        customCursor = cursor1 + 1;

                        for (i = count1 - 1; i >= 0; i--) {
                            array[customDest + i] = array[customCursor + i];
                        }

                        if (length1 === 0) {
                            exit = true;
                            break;
                        }
                    }

                    array[dest--] = tmp[cursor2--];

                    if (--length2 === 1) {
                        exit = true;
                        break;
                    }

                    count2 = length2 - gallopLeft(array[cursor1], tmp, 0, length2, length2 - 1, compare);

                    if (count2 !== 0) {
                        dest -= count2;
                        cursor2 -= count2;
                        length2 -= count2;
                        customDest = dest + 1;
                        customCursor = cursor2 + 1;

                        for (i = 0; i < count2; i++) {
                            array[customDest + i] = tmp[customCursor + i];
                        }

                        if (length2 <= 1) {
                            exit = true;
                            break;
                        }
                    }

                    array[dest--] = array[cursor1--];

                    if (--length1 === 0) {
                        exit = true;
                        break;
                    }

                    _minGallop--;
                } while (count1 >= DEFAULT_MIN_GALLOPING || count2 >= DEFAULT_MIN_GALLOPING);

                if (exit) {
                    break;
                }

                if (_minGallop < 0) {
                    _minGallop = 0;
                }

                _minGallop += 2;
            }

            minGallop = _minGallop;

            if (minGallop < 1) {
                minGallop = 1;
            }

            if (length2 === 1) {
                dest -= length1;
                cursor1 -= length1;
                customDest = dest + 1;
                customCursor = cursor1 + 1;

                for (i = length1 - 1; i >= 0; i--) {
                    array[customDest + i] = array[customCursor + i];
                }

                array[dest] = tmp[cursor2];
            }
            else if (length2 === 0) {
                throw new Error();
                // throw new Error('mergeHigh preconditions were not respected');
            }
            else {
                customCursor = dest - (length2 - 1);
                for (i = 0; i < length2; i++) {
                    array[customCursor + i] = tmp[i];
                }
            }
        }

        this.mergeRuns = mergeRuns;
        this.forceMergeRuns = forceMergeRuns;
        this.pushRun = pushRun;
    }

    function sort(array, compare, lo, hi) {
        if (!lo) {
            lo = 0;
        }
        if (!hi) {
            hi = array.length;
        }

        var remaining = hi - lo;

        if (remaining < 2) {
            return;
        }

        var runLength = 0;

        if (remaining < DEFAULT_MIN_MERGE) {
            runLength = makeAscendingRun(array, lo, hi, compare);
            binaryInsertionSort(array, lo, hi, lo + runLength, compare);
            return;
        }

        var ts = new TimSort(array, compare);

        var minRun = minRunLength(remaining);

        do {
            runLength = makeAscendingRun(array, lo, hi, compare);
            if (runLength < minRun) {
                var force = remaining;
                if (force > minRun) {
                    force = minRun;
                }

                binaryInsertionSort(array, lo, lo + force, lo + runLength, compare);
                runLength = force;
            }

            ts.pushRun(lo, runLength);
            ts.mergeRuns();

            remaining -= runLength;
            lo += runLength;
        } while (remaining !== 0);

        ts.forceMergeRuns();
    }

    return sort;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * 可绘制的图形基类
 * Base class of all displayable graphic objects
 * @module zrender/graphic/Displayable
 */

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var zrUtil = __webpack_require__(33);

    var Style = __webpack_require__(343);

    var Element = __webpack_require__(331);
    var RectText = __webpack_require__(777);
    // var Stateful = require('./mixin/Stateful');

    /**
     * @alias module:zrender/graphic/Displayable
     * @extends module:zrender/Element
     * @extends module:zrender/graphic/mixin/RectText
     */
    function Displayable(opts) {

        opts = opts || {};

        Element.call(this, opts);

        // Extend properties
        for (var name in opts) {
            if (
                opts.hasOwnProperty(name) &&
                name !== 'style'
            ) {
                this[name] = opts[name];
            }
        }

        /**
         * @type {module:zrender/graphic/Style}
         */
        this.style = new Style(opts.style);

        this._rect = null;
        // Shapes for cascade clipping.
        this.__clipPaths = [];

        // FIXME Stateful must be mixined after style is setted
        // Stateful.call(this, opts);
    }

    Displayable.prototype = {

        constructor: Displayable,

        type: 'displayable',

        /**
         * Displayable 是否为脏，Painter 中会根据该标记判断是否需要是否需要重新绘制
         * Dirty flag. From which painter will determine if this displayable object needs brush
         * @name module:zrender/graphic/Displayable#__dirty
         * @type {boolean}
         */
        __dirty: true,

        /**
         * 图形是否可见，为true时不绘制图形，但是仍能触发鼠标事件
         * If ignore drawing of the displayable object. Mouse event will still be triggered
         * @name module:/zrender/graphic/Displayable#invisible
         * @type {boolean}
         * @default false
         */
        invisible: false,

        /**
         * @name module:/zrender/graphic/Displayable#z
         * @type {number}
         * @default 0
         */
        z: 0,

        /**
         * @name module:/zrender/graphic/Displayable#z
         * @type {number}
         * @default 0
         */
        z2: 0,

        /**
         * z层level，决定绘画在哪层canvas中
         * @name module:/zrender/graphic/Displayable#zlevel
         * @type {number}
         * @default 0
         */
        zlevel: 0,

        /**
         * 是否可拖拽
         * @name module:/zrender/graphic/Displayable#draggable
         * @type {boolean}
         * @default false
         */
        draggable: false,

        /**
         * 是否正在拖拽
         * @name module:/zrender/graphic/Displayable#draggable
         * @type {boolean}
         * @default false
         */
        dragging: false,

        /**
         * 是否相应鼠标事件
         * @name module:/zrender/graphic/Displayable#silent
         * @type {boolean}
         * @default false
         */
        silent: false,

        /**
         * If enable culling
         * @type {boolean}
         * @default false
         */
        culling: false,

        /**
         * Mouse cursor when hovered
         * @name module:/zrender/graphic/Displayable#cursor
         * @type {string}
         */
        cursor: 'pointer',

        /**
         * If hover area is bounding rect
         * @name module:/zrender/graphic/Displayable#rectHover
         * @type {string}
         */
        rectHover: false,

        /**
         * Render the element progressively when the value >= 0,
         * usefull for large data.
         * @type {number}
         */
        progressive: -1,

        beforeBrush: function (ctx) {},

        afterBrush: function (ctx) {},

        /**
         * 图形绘制方法
         * @param {Canvas2DRenderingContext} ctx
         */
        // Interface
        brush: function (ctx, prevEl) {},

        /**
         * 获取最小包围盒
         * @return {module:zrender/core/BoundingRect}
         */
        // Interface
        getBoundingRect: function () {},

        /**
         * 判断坐标 x, y 是否在图形上
         * If displayable element contain coord x, y
         * @param  {number} x
         * @param  {number} y
         * @return {boolean}
         */
        contain: function (x, y) {
            return this.rectContain(x, y);
        },

        /**
         * @param  {Function} cb
         * @param  {}   context
         */
        traverse: function (cb, context) {
            cb.call(context, this);
        },

        /**
         * 判断坐标 x, y 是否在图形的包围盒上
         * If bounding rect of element contain coord x, y
         * @param  {number} x
         * @param  {number} y
         * @return {boolean}
         */
        rectContain: function (x, y) {
            var coord = this.transformCoordToLocal(x, y);
            var rect = this.getBoundingRect();
            return rect.contain(coord[0], coord[1]);
        },

        /**
         * 标记图形元素为脏，并且在下一帧重绘
         * Mark displayable element dirty and refresh next frame
         */
        dirty: function () {
            this.__dirty = true;

            this._rect = null;

            this.__zr && this.__zr.refresh();
        },

        /**
         * 图形是否会触发事件
         * If displayable object binded any event
         * @return {boolean}
         */
        // TODO, 通过 bind 绑定的事件
        // isSilent: function () {
        //     return !(
        //         this.hoverable || this.draggable
        //         || this.onmousemove || this.onmouseover || this.onmouseout
        //         || this.onmousedown || this.onmouseup || this.onclick
        //         || this.ondragenter || this.ondragover || this.ondragleave
        //         || this.ondrop
        //     );
        // },
        /**
         * Alias for animate('style')
         * @param {boolean} loop
         */
        animateStyle: function (loop) {
            return this.animate('style', loop);
        },

        attrKV: function (key, value) {
            if (key !== 'style') {
                Element.prototype.attrKV.call(this, key, value);
            }
            else {
                this.style.set(value);
            }
        },

        /**
         * @param {Object|string} key
         * @param {*} value
         */
        setStyle: function (key, value) {
            this.style.set(key, value);
            this.dirty(false);
            return this;
        },

        /**
         * Use given style object
         * @param  {Object} obj
         */
        useStyle: function (obj) {
            this.style = new Style(obj);
            this.dirty(false);
            return this;
        }
    };

    zrUtil.inherits(Displayable, Element);

    zrUtil.mixin(Displayable, RectText);
    // zrUtil.mixin(Displayable, Stateful);

    return Displayable;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var Pattern = function (image, repeat) {
        // Should do nothing more in this constructor. Because gradient can be
        // declard by `color: {image: ...}`, where this constructor will not be called.

        this.image = image;
        this.repeat = repeat;

        // Can be cloned
        this.type = 'pattern';
    };

    Pattern.prototype.getCanvasPattern = function (ctx) {
        return ctx.createPattern(this.image, this.repeat || 'repeat');
    };

    return Pattern;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {
    'use strict';

    var zrUtil = __webpack_require__(33);

    var Gradient = __webpack_require__(775);

    /**
     * x, y, r are all percent from 0 to 1
     * @param {number} [x=0.5]
     * @param {number} [y=0.5]
     * @param {number} [r=0.5]
     * @param {Array.<Object>} [colorStops]
     * @param {boolean} [globalCoord=false]
     */
    var RadialGradient = function (x, y, r, colorStops, globalCoord) {
        // Should do nothing more in this constructor. Because gradient can be
        // declard by `color: {type: 'radial', colorStops: ...}`, where
        // this constructor will not be called.

        this.x = x == null ? 0.5 : x;

        this.y = y == null ? 0.5 : y;

        this.r = r == null ? 0.5 : r;

        // Can be cloned
        this.type = 'radial';

        // If use global coord
        this.global = globalCoord || false;

        Gradient.call(this, colorStops);
    };

    RadialGradient.prototype = {

        constructor: RadialGradient
    };

    zrUtil.inherits(RadialGradient, Gradient);

    return RadialGradient;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @module zrender/graphic/Style
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var STYLE_COMMON_PROPS = [
        ['shadowBlur', 0], ['shadowOffsetX', 0], ['shadowOffsetY', 0], ['shadowColor', '#000'],
        ['lineCap', 'butt'], ['lineJoin', 'miter'], ['miterLimit', 10]
    ];

    // var SHADOW_PROPS = STYLE_COMMON_PROPS.slice(0, 4);
    // var LINE_PROPS = STYLE_COMMON_PROPS.slice(4);

    var Style = function (opts) {
        this.extendFrom(opts);
    };

    function createLinearGradient(ctx, obj, rect) {
        var x = obj.x == null ? 0 : obj.x;
        var x2 = obj.x2 == null ? 1 : obj.x2;
        var y = obj.y == null ? 0 : obj.y;
        var y2 = obj.y2 == null ? 0 : obj.y2;

        if (!obj.global) {
            x = x * rect.width + rect.x;
            x2 = x2 * rect.width + rect.x;
            y = y * rect.height + rect.y;
            y2 = y2 * rect.height + rect.y;
        }

        var canvasGradient = ctx.createLinearGradient(x, y, x2, y2);

        return canvasGradient;
    }

    function createRadialGradient(ctx, obj, rect) {
        var width = rect.width;
        var height = rect.height;
        var min = Math.min(width, height);

        var x = obj.x == null ? 0.5 : obj.x;
        var y = obj.y == null ? 0.5 : obj.y;
        var r = obj.r == null ? 0.5 : obj.r;
        if (!obj.global) {
            x = x * width + rect.x;
            y = y * height + rect.y;
            r = r * min;
        }

        var canvasGradient = ctx.createRadialGradient(x, y, 0, x, y, r);

        return canvasGradient;
    }


    Style.prototype = {

        constructor: Style,

        /**
         * @type {string}
         */
        fill: '#000000',

        /**
         * @type {string}
         */
        stroke: null,

        /**
         * @type {number}
         */
        opacity: 1,

        /**
         * @type {Array.<number>}
         */
        lineDash: null,

        /**
         * @type {number}
         */
        lineDashOffset: 0,

        /**
         * @type {number}
         */
        shadowBlur: 0,

        /**
         * @type {number}
         */
        shadowOffsetX: 0,

        /**
         * @type {number}
         */
        shadowOffsetY: 0,

        /**
         * @type {number}
         */
        lineWidth: 1,

        /**
         * If stroke ignore scale
         * @type {Boolean}
         */
        strokeNoScale: false,

        // Bounding rect text configuration
        // Not affected by element transform
        /**
         * @type {string}
         */
        text: null,

        /**
         * @type {string}
         */
        textFill: '#000',

        /**
         * @type {string}
         */
        textStroke: null,

        /**
         * 'inside', 'left', 'right', 'top', 'bottom'
         * [x, y]
         * @type {string|Array.<number>}
         * @default 'inside'
         */
        textPosition: 'inside',

        /**
         * If not specified, use the boundingRect of a `displayable`.
         * @type {Object}
         */
        textPositionRect: null,

        /**
         * [x, y]
         * @type {Array.<number>}
         */
        textOffset: null,

        /**
         * @type {string}
         */
        textBaseline: null,

        /**
         * @type {string}
         */
        textAlign: null,

        /**
         * @type {string}
         */
        textVerticalAlign: null,

        /**
         * Only useful in Path and Image element
         * @type {number}
         */
        textDistance: 5,

        /**
         * Only useful in Path and Image element
         * @type {number}
         */
        textShadowBlur: 0,

        /**
         * Only useful in Path and Image element
         * @type {number}
         */
        textShadowOffsetX: 0,

        /**
         * Only useful in Path and Image element
         * @type {number}
         */
        textShadowOffsetY: 0,

        /**
         * If transform text
         * Only useful in Path and Image element
         * @type {boolean}
         */
        textTransform: false,

        /**
         * Text rotate around position of Path or Image
         * Only useful in Path and Image element and textTransform is false.
         */
        textRotation: 0,

        /**
         * @type {string}
         * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
         */
        blend: null,

        /**
         * @param {CanvasRenderingContext2D} ctx
         */
        bind: function (ctx, el, prevEl) {
            var style = this;
            var prevStyle = prevEl && prevEl.style;
            var firstDraw = !prevStyle;

            for (var i = 0; i < STYLE_COMMON_PROPS.length; i++) {
                var prop = STYLE_COMMON_PROPS[i];
                var styleName = prop[0];

                if (firstDraw || style[styleName] !== prevStyle[styleName]) {
                    // FIXME Invalid property value will cause style leak from previous element.
                    ctx[styleName] = style[styleName] || prop[1];
                }
            }

            if ((firstDraw || style.fill !== prevStyle.fill)) {
                ctx.fillStyle = style.fill;
            }
            if ((firstDraw || style.stroke !== prevStyle.stroke)) {
                ctx.strokeStyle = style.stroke;
            }
            if ((firstDraw || style.opacity !== prevStyle.opacity)) {
                ctx.globalAlpha = style.opacity == null ? 1 : style.opacity;
            }

            if ((firstDraw || style.blend !== prevStyle.blend)) {
                ctx.globalCompositeOperation = style.blend || 'source-over';
            }
            if (this.hasStroke()) {
                var lineWidth = style.lineWidth;
                ctx.lineWidth = lineWidth / (
                    (this.strokeNoScale && el && el.getLineScale) ? el.getLineScale() : 1
                );
            }
        },

        hasFill: function () {
            var fill = this.fill;
            return fill != null && fill !== 'none';
        },

        hasStroke: function () {
            var stroke = this.stroke;
            return stroke != null && stroke !== 'none' && this.lineWidth > 0;
        },

        /**
         * Extend from other style
         * @param {zrender/graphic/Style} otherStyle
         * @param {boolean} overwrite
         */
        extendFrom: function (otherStyle, overwrite) {
            if (otherStyle) {
                var target = this;
                for (var name in otherStyle) {
                    if (otherStyle.hasOwnProperty(name)
                        && (overwrite || ! target.hasOwnProperty(name))
                    ) {
                        target[name] = otherStyle[name];
                    }
                }
            }
        },

        /**
         * Batch setting style with a given object
         * @param {Object|string} obj
         * @param {*} [obj]
         */
        set: function (obj, value) {
            if (typeof obj === 'string') {
                this[obj] = value;
            }
            else {
                this.extendFrom(obj, true);
            }
        },

        /**
         * Clone
         * @return {zrender/graphic/Style} [description]
         */
        clone: function () {
            var newStyle = new this.constructor();
            newStyle.extendFrom(this, true);
            return newStyle;
        },

        getGradient: function (ctx, obj, rect) {
            var method = obj.type === 'radial' ? createRadialGradient : createLinearGradient;
            var canvasGradient = method(ctx, obj, rect);
            var colorStops = obj.colorStops;
            for (var i = 0; i < colorStops.length; i++) {
                canvasGradient.addColorStop(
                    colorStops[i].offset, colorStops[i].color
                );
            }
            return canvasGradient;
        }
    };

    var styleProto = Style.prototype;
    for (var i = 0; i < STYLE_COMMON_PROPS.length; i++) {
        var prop = STYLE_COMMON_PROPS[i];
        if (!(prop[0] in styleProto)) {
            styleProto[prop[0]] = prop[1];
        }
    }

    // Provide for others
    Style.getGradient = styleProto.getGradient;

    return Style;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * 圆形
 * @module zrender/shape/Circle
 */

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
    'use strict';

    return __webpack_require__(218).extend({

        type: 'circle',

        shape: {
            cx: 0,
            cy: 0,
            r: 0
        },


        buildPath : function (ctx, shape, inBundle) {
            // Better stroking in ShapeBundle
            // Always do it may have performence issue ( fill may be 2x more cost)
            if (inBundle) {
                ctx.moveTo(shape.cx + shape.r, shape.cy);
            }
            // else {
            //     if (ctx.allocate && !ctx.data.length) {
            //         ctx.allocate(ctx.CMD_MEM_SIZE.A);
            //     }
            // }
            // Better stroking in ShapeBundle
            // ctx.moveTo(shape.cx + shape.r, shape.cy);
            ctx.arc(shape.cx, shape.cy, shape.r, 0, Math.PI * 2, true);
        }
    });
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Config = __webpack_require__(121);

var _Config2 = _interopRequireDefault(_Config);

var _mathUtil = __webpack_require__(1036);

var _mathUtil2 = _interopRequireDefault(_mathUtil);

var _BezierCurve = __webpack_require__(778);

var _BezierCurve2 = _interopRequireDefault(_BezierCurve);

var _Group = __webpack_require__(112);

var _Group2 = _interopRequireDefault(_Group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Link = function () {
    function Link(opts) {
        _classCallCheck(this, Link);

        this.from = opts['from'] || 0;
        this.to = opts['to'] || 0;
        this.loop = opts['loop'];
        this.callback = opts['callback'];
        this.lineWidth = opts['lineWidth'] || 2;
        this.stroke = opts['stroke'] || 'rgba(255, 255, 0, 1)';
        this.lineJoin = opts['lineJoin'] || 'round';
        this.lineCap = opts['lineCap'] || 'round';
        this.during = opts['during'] || _Config2.default.animationDefaultDuring;
        this.shadowBlur = opts['shadowBlur'] || 25;
    }

    _createClass(Link, [{
        key: 'render',
        value: function render() {
            var from = this.from,
                to = this.to;

            var cp = _mathUtil2.default.getCurvenessPoint(this.from, this.to);

            var link = new _BezierCurve2.default({
                shape: {
                    x1: from.x,
                    y1: from.y,
                    x2: to.x,
                    y2: to.y,
                    cpx1: cp.x,
                    cpy1: cp.y
                },
                style: {
                    stroke: this.stroke,
                    lineWidth: this.lineWidth,
                    fill: null,
                    lineJoin: this.lineJoin,
                    lineCap: this.lineCap,
                    shadowBlur: this.shadowBlur,
                    shadowColor: this.stroke
                }
            });

            return link;
        }
    }]);

    return Link;
}();

exports.default = Link;

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Config = __webpack_require__(121);

var _Config2 = _interopRequireDefault(_Config);

var _Link = __webpack_require__(395);

var _Link2 = _interopRequireDefault(_Link);

var _Circle = __webpack_require__(344);

var _Circle2 = _interopRequireDefault(_Circle);

var _Group = __webpack_require__(112);

var _Group2 = _interopRequireDefault(_Group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tail = function () {
    function Tail(opts) {
        _classCallCheck(this, Tail);

        this.link = opts['link'] || null;
        this.size = opts['size'] || 2;
        this.during = opts['during'] || _Config2.default.animationDefaultDuring;
        this.loop = opts['loop'];
        this.callback = opts['callback'];
    }

    _createClass(Tail, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var g = new _Group2.default();

            for (var index = 60; index > 0; index--) {
                var c = new _Circle2.default({
                    shape: {
                        cx: 0,
                        cy: 0,
                        r: this.size
                    },
                    style: {
                        fill: 'rgba(255, 255, 255, ' + index * 0.003 + ')'
                    },
                    position: [0, 0]
                });

                g.add(c);
            }

            if (this.link) {
                g.animate('', this.loop).when(this.during, {
                    position: [1, 0]
                }).during(function (i, t) {
                    var tmp = t;

                    for (var _index = 0; _index < g.childCount(); _index++) {
                        if (tmp >= 0) {
                            var child = g.childAt(_index);

                            if (tmp >= 0.98) {
                                var _pos = _this.link.pointAt(1);
                                child.position = _pos;
                                child.style.opacity = 0;
                                continue;
                            }

                            var pos = _this.link.pointAt(tmp);
                            child.position = pos;
                            child.style.opacity = 1;
                        }

                        tmp -= 0.005;
                    }
                }).start(_Config2.default.animationEasing).done(this.callback);
            }

            return g;
        }
    }]);

    return Tail;
}();

exports.default = Tail;

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Attack = __webpack_require__(1029);

var _Attack2 = _interopRequireDefault(_Attack);

var _Detector = __webpack_require__(1035);

var _Detector2 = _interopRequireDefault(_Detector);

var _Globe = __webpack_require__(1030);

var _Globe2 = _interopRequireDefault(_Globe);

var _InfoContainer = __webpack_require__(1027);

var _InfoContainer2 = _interopRequireDefault(_InfoContainer);

var _InfoPanel = __webpack_require__(1028);

var _InfoPanel2 = _interopRequireDefault(_InfoPanel);

var _socket = __webpack_require__(653);

var _socket2 = _interopRequireDefault(_socket);

var _react = __webpack_require__(57);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(658);

__webpack_require__(661);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            nodes: {},
            edges: [],
            flight: [],
            origins: [], //攻击源
            types: [], //攻击类型
            targets: [], //攻击目标
            attacks: [], //实时信息
            data: {
                info: {
                    origin: {},
                    target: {},
                    type: {},
                    live: {}
                }
            }
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            // add SocketIO.
            var socket = (0, _socket2.default)('http://localhost:4000');
            window.webSocket = socket; // 存入全局变量.

            socket.on('connect', function (c) {
                console.log("连接成功..." + new Date().getTime());
                socket.emit('hello', 'hello world!');
            });

            socket.on('disconnect', function () {
                console.log('you have been disconnected.');
            });

            socket.on('reconnect', function () {
                console.log('you have been reconnected');
            });

            socket.on('reconnect_error', function () {
                console.log('attempt to reconnect has failed');
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            window.webSocket.on('link', function (data) {
                var _JSON$parse = JSON.parse(data.info),
                    origin = _JSON$parse.origin,
                    target = _JSON$parse.target,
                    type = _JSON$parse.type,
                    live = _JSON$parse.live;

                var _state = _this2.state,
                    origins = _state.origins,
                    targets = _state.targets,
                    types = _state.types,
                    attacks = _state.attacks;


                origins.push(origin);
                targets.push(target);
                types.push(type);
                attacks.push(live);

                [origins, targets, types, attacks].forEach(function (a) {
                    if (a.length >= 8) {
                        a.shift();
                    }
                });

                _this2.setState({
                    'origins': origins,
                    'targets': targets,
                    'types': types,
                    'attacks': attacks
                });
            });
        }
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            if (window.webSocket) {
                delete window.webSocket;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'app' },
                _react2.default.createElement(_Attack2.default, null),
                _react2.default.createElement(
                    _InfoContainer2.default,
                    null,
                    _react2.default.createElement(_InfoPanel2.default, { items: this.state.origins, title: 'ATTACK ORIGINS' }),
                    _react2.default.createElement(_InfoPanel2.default, { items: this.state.types, title: 'ATTACK TYPES' }),
                    _react2.default.createElement(_InfoPanel2.default, { items: this.state.targets, title: 'ATTACK TARGETS' }),
                    _react2.default.createElement(_InfoPanel2.default, { items: this.state.attacks, title: 'LIVE ATTACKS' })
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * JSON parse.
 *
 * @see Based on jQuery#parseJSON (MIT) and JSON2
 * @api private
 */

var rvalidchars = /^[\],:{}\s]*$/;
var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
var rtrimLeft = /^\s+/;
var rtrimRight = /\s+$/;

module.exports = function parsejson(data) {
  if ('string' != typeof data || !data) {
    return null;
  }

  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

  // Attempt to parse using the native JSON parser first
  if (global.JSON && JSON.parse) {
    return JSON.parse(data);
  }

  if (rvalidchars.test(data.replace(rvalidescape, '@')
      .replace(rvalidtokens, ']')
      .replace(rvalidbraces, ''))) {
    return (new Function('return ' + data))();
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = global.BlobBuilder
  || global.WebKitBlobBuilder
  || global.MSBlobBuilder
  || global.MozBlobBuilder;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function() {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */

var blobSupportsArrayBufferView = blobSupported && (function() {
  try {
    var b = new Blob([new Uint8Array([1,2])]);
    return b.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder
  && BlobBuilder.prototype.append
  && BlobBuilder.prototype.getBlob;

/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  for (var i = 0; i < ary.length; i++) {
    var chunk = ary[i];
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer;

      // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer
      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      ary[i] = buf;
    }
  }
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  mapArrayBufferViews(ary);

  for (var i = 0; i < ary.length; i++) {
    bb.append(ary[i]);
  }

  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
};

function BlobConstructor(ary, options) {
  mapArrayBufferViews(ary);
  return new Blob(ary, options || {});
};

module.exports = (function() {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 400:
/***/ (function(module, exports) {

/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function(arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

  if (start < 0) { start += bytes; }
  if (end < 0) { end += bytes; }
  if (end > bytes) { end = bytes; }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};


/***/ }),

/***/ 401:
/***/ (function(module, exports) {

module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}


/***/ }),

/***/ 402:
/***/ (function(module, exports) {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(){
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i+1)];
      encoded3 = lookup[base64.charCodeAt(i+2)];
      encoded4 = lookup[base64.charCodeAt(i+3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})();


/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(403);
exports.encode = exports.stringify = __webpack_require__(404);


/***/ }),

/***/ 461:
/***/ (function(module, exports) {

module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(717);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 562:
/***/ (function(module, exports) {


/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};



/***/ }),

/***/ 563:
/***/ (function(module, exports) {


/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' &&
    'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}


/***/ }),

/***/ 652:
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var url = __webpack_require__(654);
var parser = __webpack_require__(208);
var Manager = __webpack_require__(302);
var debug = __webpack_require__(52)('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup (uri, opts) {
  if (typeof uri === 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] ||
                      false === opts.multiplex || sameNamespace;

  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.query;
  }
  return io.socket(parsed.path, opts);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = __webpack_require__(302);
exports.Socket = __webpack_require__(304);


/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module dependencies.
 */

var parseuri = __webpack_require__(242);
var debug = __webpack_require__(52)('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url (uri, loc) {
  var obj = uri;

  // default to window.location
  loc = loc || global.location;
  if (null == uri) uri = loc.protocol + '//' + loc.host;

  // relative path support
  if ('string' === typeof uri) {
    if ('/' === uri.charAt(0)) {
      if ('/' === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' !== typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';

  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

  // define unique id
  obj.id = obj.protocol + '://' + host + ':' + obj.port;
  // define href
  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : (':' + obj.port));

  return obj;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 655:
/***/ (function(module, exports) {


/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys (obj){
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};


/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/utf8js v2.1.2 by @mathias */
;(function(root) {

	// Detect free variables `exports`
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	// Taken from https://mths.be/punycode
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		var value;
		var extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	// Taken from https://mths.be/punycode
	function ucs2encode(array) {
		var length = array.length;
		var index = -1;
		var value;
		var output = '';
		while (++index < length) {
			value = array[index];
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
		}
		return output;
	}

	function checkScalarValue(codePoint, strict) {
		if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
			if (strict) {
				throw Error(
					'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
					' is not a scalar value'
				);
			}
			return false;
		}
		return true;
	}
	/*--------------------------------------------------------------------------*/

	function createByte(codePoint, shift) {
		return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
	}

	function encodeCodePoint(codePoint, strict) {
		if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
			return stringFromCharCode(codePoint);
		}
		var symbol = '';
		if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
			symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
		}
		else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
			if (!checkScalarValue(codePoint, strict)) {
				codePoint = 0xFFFD;
			}
			symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
			symbol += createByte(codePoint, 6);
		}
		else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
			symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
			symbol += createByte(codePoint, 12);
			symbol += createByte(codePoint, 6);
		}
		symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
		return symbol;
	}

	function utf8encode(string, opts) {
		opts = opts || {};
		var strict = false !== opts.strict;

		var codePoints = ucs2decode(string);
		var length = codePoints.length;
		var index = -1;
		var codePoint;
		var byteString = '';
		while (++index < length) {
			codePoint = codePoints[index];
			byteString += encodeCodePoint(codePoint, strict);
		}
		return byteString;
	}

	/*--------------------------------------------------------------------------*/

	function readContinuationByte() {
		if (byteIndex >= byteCount) {
			throw Error('Invalid byte index');
		}

		var continuationByte = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		if ((continuationByte & 0xC0) == 0x80) {
			return continuationByte & 0x3F;
		}

		// If we end up here, it’s not a continuation byte
		throw Error('Invalid continuation byte');
	}

	function decodeSymbol(strict) {
		var byte1;
		var byte2;
		var byte3;
		var byte4;
		var codePoint;

		if (byteIndex > byteCount) {
			throw Error('Invalid byte index');
		}

		if (byteIndex == byteCount) {
			return false;
		}

		// Read first byte
		byte1 = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		// 1-byte sequence (no continuation bytes)
		if ((byte1 & 0x80) == 0) {
			return byte1;
		}

		// 2-byte sequence
		if ((byte1 & 0xE0) == 0xC0) {
			byte2 = readContinuationByte();
			codePoint = ((byte1 & 0x1F) << 6) | byte2;
			if (codePoint >= 0x80) {
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 3-byte sequence (may include unpaired surrogates)
		if ((byte1 & 0xF0) == 0xE0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
			if (codePoint >= 0x0800) {
				return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 4-byte sequence
		if ((byte1 & 0xF8) == 0xF0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			byte4 = readContinuationByte();
			codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
				(byte3 << 0x06) | byte4;
			if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
				return codePoint;
			}
		}

		throw Error('Invalid UTF-8 detected');
	}

	var byteArray;
	var byteCount;
	var byteIndex;
	function utf8decode(byteString, opts) {
		opts = opts || {};
		var strict = false !== opts.strict;

		byteArray = ucs2decode(byteString);
		byteCount = byteArray.length;
		byteIndex = 0;
		var codePoints = [];
		var tmp;
		while ((tmp = decodeSymbol(strict)) !== false) {
			codePoints.push(tmp);
		}
		return ucs2encode(codePoints);
	}

	/*--------------------------------------------------------------------------*/

	var utf8 = {
		'version': '2.1.2',
		'encode': utf8encode,
		'decode': utf8decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return utf8;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = utf8;
		} else { // in Narwhal or RingoJS v0.7.0-
			var object = {};
			var hasOwnProperty = object.hasOwnProperty;
			for (var key in utf8) {
				hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.utf8 = utf8;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(314)(module), __webpack_require__(31)))

/***/ }),

/***/ 657:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 658:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 659:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 660:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 661:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 662:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 663:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(652);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {


module.exports = __webpack_require__(719);


/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {


module.exports = __webpack_require__(720);

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = __webpack_require__(86);


/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies.
 */

var transports = __webpack_require__(315);
var Emitter = __webpack_require__(81);
var debug = __webpack_require__(52)('engine.io-client:socket');
var index = __webpack_require__(241);
var parser = __webpack_require__(86);
var parseuri = __webpack_require__(242);
var parsejson = __webpack_require__(398);
var parseqs = __webpack_require__(123);

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket (uri, opts) {
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure
    : (global.location && 'https:' === location.protocol);

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname ||
    (global.location ? location.hostname : 'localhost');
  this.port = opts.port || (global.location && location.port
      ? location.port
      : (this.secure ? 443 : 80));
  this.query = opts.query || {};
  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.transportOptions = opts.transportOptions || {};
  this.readyState = '';
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  }

  // SSL options for Node.js client
  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
  this.forceNode = !!opts.forceNode;

  // other options for Node.js client
  var freeGlobal = typeof global === 'object' && global;
  if (freeGlobal.global === freeGlobal) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }

    if (opts.localAddress) {
      this.localAddress = opts.localAddress;
    }
  }

  // set on handshake
  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null;

  // set on heartbeat
  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;

  this.open();
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = __webpack_require__(206);
Socket.transports = __webpack_require__(315);
Socket.parser = __webpack_require__(86);

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // per-transport options
  var options = this.transportOptions[name] || {};

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    query: query,
    socket: this,
    agent: options.agent || this.agent,
    hostname: options.hostname || this.hostname,
    port: options.port || this.port,
    secure: options.secure || this.secure,
    path: options.path || this.path,
    forceJSONP: options.forceJSONP || this.forceJSONP,
    jsonp: options.jsonp || this.jsonp,
    forceBase64: options.forceBase64 || this.forceBase64,
    enablesXDR: options.enablesXDR || this.enablesXDR,
    timestampRequests: options.timestampRequests || this.timestampRequests,
    timestampParam: options.timestampParam || this.timestampParam,
    policyPort: options.policyPort || this.policyPort,
    pfx: options.pfx || this.pfx,
    key: options.key || this.key,
    passphrase: options.passphrase || this.passphrase,
    cert: options.cert || this.cert,
    ca: options.ca || this.ca,
    ciphers: options.ciphers || this.ciphers,
    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: options.extraHeaders || this.extraHeaders,
    forceNode: options.forceNode || this.forceNode,
    localAddress: options.localAddress || this.localAddress,
    requestTimeout: options.requestTimeout || this.requestTimeout,
    protocols: options.protocols || void (0)
  });

  return transport;
};

function clone (obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function () {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';

  // Retry with the next transport if the transport is disabled (jsonp: false)
  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function (transport) {
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport
  .on('drain', function () {
    self.onDrain();
  })
  .on('packet', function (packet) {
    self.onPacket(packet);
  })
  .on('error', function (e) {
    self.onError(e);
  })
  .on('close', function () {
    self.onClose('transport close');
  });
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 });
  var failed = false;
  var self = this;

  Socket.priorWebsocketSuccess = false;

  function onTransportOpen () {
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', function (msg) {
      if (failed) return;
      if ('pong' === msg.type && 'probe' === msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' === transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' === self.readyState) return;
          debug('changing transport and sending upgrade packet');

          cleanup();

          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport () {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    cleanup();

    transport.close();
    transport = null;
  }

  // Handle any error that happens while probing
  function onerror (err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    freezeTransport();

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  function onTransportClose () {
    onerror('transport closed');
  }

  // When the socket is closed while we're probing
  function onclose () {
    onerror('socket closed');
  }

  // When the socket is upgraded while we're probing
  function onupgrade (to) {
    if (transport && to.name !== transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  }

  // Remove all listeners on the transport and on self
  function cleanup () {
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);

  this.once('close', onclose);
  this.once('upgrading', onupgrade);

  transport.open();
};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
  this.emit('open');
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' === this.readyState || 'open' === this.readyState ||
      'closing' === this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(parsejson(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  // In case open handler closes socket
  if ('closed' === this.readyState) return;
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' === self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || (self.pingInterval + self.pingTimeout));
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api private
*/

Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function () {
    self.emit('ping');
  });
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' !== this.readyState && this.transport.writable &&
    !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write =
Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, options, fn) {
  if ('function' === typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' === typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' === this.readyState || 'closed' === this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;

  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.readyState = 'closing';

    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function () {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close () {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose () {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade () {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // stop event from firing again for transport
    this.transport.removeAllListeners('close');

    // ensure transport won't stay open
    this.transport.close();

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);

    // clean buffers after, so users can still
    // grab the buffers on `close` event
    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i < j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module requirements.
 */

var Polling = __webpack_require__(316);
var inherit = __webpack_require__(122);

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Noop.
 */

function empty () { }

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling (opts) {
  Polling.call(this, opts);

  this.query = this.query || {};

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    if (!global.___eio) global.___eio = [];
    callbacks = global.___eio;
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  });

  // append to query string
  this.query.j = this.index;

  // prevent spurious errors from being emitted when the window is unloaded
  if (global.document && global.addEventListener) {
    global.addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}

/**
 * Inherits from Polling.
 */

inherit(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function (e) {
    self.onError('jsonp poll error', e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  } else {
    (document.head || document.body).appendChild(script);
  }
  this.script = script;

  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete () {
    initIframe();
    fn();
  }

  function initIframe () {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch (e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if (self.iframe.readyState === 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module requirements.
 */

var XMLHttpRequest = __webpack_require__(207);
var Polling = __webpack_require__(316);
var Emitter = __webpack_require__(81);
var inherit = __webpack_require__(122);
var debug = __webpack_require__(52)('engine.io-client:polling-xhr');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Empty function
 */

function empty () {}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR (opts) {
  Polling.call(this, opts);
  this.requestTimeout = opts.requestTimeout;
  this.extraHeaders = opts.extraHeaders;

  if (global.location) {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = opts.hostname !== global.location.hostname ||
      port !== opts.port;
    this.xs = opts.secure !== isSSL;
  }
}

/**
 * Inherits from Polling.
 */

inherit(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function (opts) {
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  opts.requestTimeout = this.requestTimeout;

  // other options for Node.js client
  opts.extraHeaders = this.extraHeaders;

  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function (data, fn) {
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', function (err) {
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function () {
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function (data) {
    self.onData(data);
  });
  req.on('error', function (err) {
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request (opts) {
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined !== opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.requestTimeout = opts.requestTimeout;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;

  this.create();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function () {
  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}

    if ('POST' === this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    try {
      xhr.setRequestHeader('Accept', '*/*');
    } catch (e) {}

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    if (this.requestTimeout) {
      xhr.timeout = this.requestTimeout;
    }

    if (this.hasXDR()) {
      xhr.onload = function () {
        self.onLoad();
      };
      xhr.onerror = function () {
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
          var contentType;
          try {
            contentType = xhr.getResponseHeader('Content-Type');
          } catch (e) {}
          if (contentType === 'application/octet-stream') {
            xhr.responseType = 'arraybuffer';
          }
        }
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function () {
            self.onError(xhr.status);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function () {
      self.onError(e);
    }, 0);
    return;
  }

  if (global.document) {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function () {
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function (data) {
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function (err) {
  this.emit('error', err);
  this.cleanup(true);
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function (fromError) {
  if ('undefined' === typeof this.xhr || null === this.xhr) {
    return;
  }
  // xmlhttprequest
  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch (e) {}
  }

  if (global.document) {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Called upon load.
 *
 * @api private
 */

Request.prototype.onLoad = function () {
  var data;
  try {
    var contentType;
    try {
      contentType = this.xhr.getResponseHeader('Content-Type');
    } catch (e) {}
    if (contentType === 'application/octet-stream') {
      data = this.xhr.response || this.xhr.responseText;
    } else {
      data = this.xhr.responseText;
    }
  } catch (e) {
    this.onError(e);
  }
  if (null != data) {
    this.onData(data);
  }
};

/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */

Request.prototype.hasXDR = function () {
  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function () {
  this.cleanup();
};

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

Request.requestsCount = 0;
Request.requests = {};

if (global.document) {
  if (global.attachEvent) {
    global.attachEvent('onunload', unloadHandler);
  } else if (global.addEventListener) {
    global.addEventListener('beforeunload', unloadHandler, false);
  }
}

function unloadHandler () {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies.
 */

var Transport = __webpack_require__(206);
var parser = __webpack_require__(86);
var parseqs = __webpack_require__(123);
var inherit = __webpack_require__(122);
var yeast = __webpack_require__(243);
var debug = __webpack_require__(52)('engine.io-client:websocket');
var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
var NodeWebSocket;
if (typeof window === 'undefined') {
  try {
    NodeWebSocket = __webpack_require__(1037);
  } catch (e) { }
}

/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */

var WebSocket = BrowserWebSocket;
if (!WebSocket && typeof window === 'undefined') {
  WebSocket = NodeWebSocket;
}

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (forceBase64) {
    this.supportsBinary = false;
  }
  this.perMessageDeflate = opts.perMessageDeflate;
  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
  this.protocols = opts.protocols;
  if (!this.usingBrowserWebSocket) {
    WebSocket = NodeWebSocket;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function () {
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var uri = this.uri();
  var protocols = this.protocols;
  var opts = {
    agent: this.agent,
    perMessageDeflate: this.perMessageDeflate
  };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }
  if (this.localAddress) {
    opts.localAddress = this.localAddress;
  }

  try {
    this.ws = this.usingBrowserWebSocket ? (protocols ? new WebSocket(uri, protocols) : new WebSocket(uri)) : new WebSocket(uri, protocols, opts);
  } catch (err) {
    return this.emit('error', err);
  }

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'nodebuffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function () {
  var self = this;

  this.ws.onopen = function () {
    self.onOpen();
  };
  this.ws.onclose = function () {
    self.onClose();
  };
  this.ws.onmessage = function (ev) {
    self.onData(ev.data);
  };
  this.ws.onerror = function (e) {
    self.onError('websocket error', e);
  };
};

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function (packets) {
  var self = this;
  this.writable = false;

  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  var total = packets.length;
  for (var i = 0, l = total; i < l; i++) {
    (function (packet) {
      parser.encodePacket(packet, self.supportsBinary, function (data) {
        if (!self.usingBrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' === typeof data ? global.Buffer.byteLength(data) : data.length;
            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }

        // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error
        try {
          if (self.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e) {
          debug('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done () {
    self.emit('flush');

    // fake drain
    // defer to next tick to allow Socket to clear writeBuffer
    setTimeout(function () {
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function () {
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function () {
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && (('wss' === schema && Number(this.port) !== 443) ||
    ('ws' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function () {
  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = __webpack_require__(301);
var isBuf = __webpack_require__(317);
var toString = Object.prototype.toString;
var withNativeBlob = typeof global.Blob === 'function' || toString.call(global.Blob) === '[object BlobConstructor]';
var withNativeFile = typeof global.File === 'function' || toString.call(global.File) === '[object FileConstructor]';

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function(packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return {packet: pack, buffers: buffers};
};

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBuf(data)) {
    var placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (isArray(data)) {
    var newData = new Array(data.length);
    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === 'object' && !(data instanceof Date)) {
    var newData = {};
    for (var key in data) {
      newData[key] = _deconstructPacket(data[key], buffers);
    }
    return newData;
  }
  return data;
}

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

exports.reconstructPacket = function(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful
  return packet;
};

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === 'object') {
    for (var key in data) {
      data[key] = _reconstructPacket(data[key], buffers);
    }
  }

  return data;
}

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function(data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if ((withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File)) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function() { // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        }
        else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if(! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) { // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (typeof obj === 'object' && !isBuf(obj)) { // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  _removeBlobs(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    var ArrayCtor = typeof Float32Array === 'undefined'
        ? Array
        : Float32Array;

    /**
     * @typedef {Float32Array|Array.<number>} Vector2
     */
    /**
     * 二维向量类
     * @exports zrender/tool/vector
     */
    var vector = {
        /**
         * 创建一个向量
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @return {Vector2}
         */
        create: function (x, y) {
            var out = new ArrayCtor(2);
            if (x == null) {
                x = 0;
            }
            if (y == null) {
                y = 0;
            }
            out[0] = x;
            out[1] = y;
            return out;
        },

        /**
         * 复制向量数据
         * @param {Vector2} out
         * @param {Vector2} v
         * @return {Vector2}
         */
        copy: function (out, v) {
            out[0] = v[0];
            out[1] = v[1];
            return out;
        },

        /**
         * 克隆一个向量
         * @param {Vector2} v
         * @return {Vector2}
         */
        clone: function (v) {
            var out = new ArrayCtor(2);
            out[0] = v[0];
            out[1] = v[1];
            return out;
        },

        /**
         * 设置向量的两个项
         * @param {Vector2} out
         * @param {number} a
         * @param {number} b
         * @return {Vector2} 结果
         */
        set: function (out, a, b) {
            out[0] = a;
            out[1] = b;
            return out;
        },

        /**
         * 向量相加
         * @param {Vector2} out
         * @param {Vector2} v1
         * @param {Vector2} v2
         */
        add: function (out, v1, v2) {
            out[0] = v1[0] + v2[0];
            out[1] = v1[1] + v2[1];
            return out;
        },

        /**
         * 向量缩放后相加
         * @param {Vector2} out
         * @param {Vector2} v1
         * @param {Vector2} v2
         * @param {number} a
         */
        scaleAndAdd: function (out, v1, v2, a) {
            out[0] = v1[0] + v2[0] * a;
            out[1] = v1[1] + v2[1] * a;
            return out;
        },

        /**
         * 向量相减
         * @param {Vector2} out
         * @param {Vector2} v1
         * @param {Vector2} v2
         */
        sub: function (out, v1, v2) {
            out[0] = v1[0] - v2[0];
            out[1] = v1[1] - v2[1];
            return out;
        },

        /**
         * 向量长度
         * @param {Vector2} v
         * @return {number}
         */
        len: function (v) {
            return Math.sqrt(this.lenSquare(v));
        },

        /**
         * 向量长度平方
         * @param {Vector2} v
         * @return {number}
         */
        lenSquare: function (v) {
            return v[0] * v[0] + v[1] * v[1];
        },

        /**
         * 向量乘法
         * @param {Vector2} out
         * @param {Vector2} v1
         * @param {Vector2} v2
         */
        mul: function (out, v1, v2) {
            out[0] = v1[0] * v2[0];
            out[1] = v1[1] * v2[1];
            return out;
        },

        /**
         * 向量除法
         * @param {Vector2} out
         * @param {Vector2} v1
         * @param {Vector2} v2
         */
        div: function (out, v1, v2) {
            out[0] = v1[0] / v2[0];
            out[1] = v1[1] / v2[1];
            return out;
        },

        /**
         * 向量点乘
         * @param {Vector2} v1
         * @param {Vector2} v2
         * @return {number}
         */
        dot: function (v1, v2) {
            return v1[0] * v2[0] + v1[1] * v2[1];
        },

        /**
         * 向量缩放
         * @param {Vector2} out
         * @param {Vector2} v
         * @param {number} s
         */
        scale: function (out, v, s) {
            out[0] = v[0] * s;
            out[1] = v[1] * s;
            return out;
        },

        /**
         * 向量归一化
         * @param {Vector2} out
         * @param {Vector2} v
         */
        normalize: function (out, v) {
            var d = vector.len(v);
            if (d === 0) {
                out[0] = 0;
                out[1] = 0;
            }
            else {
                out[0] = v[0] / d;
                out[1] = v[1] / d;
            }
            return out;
        },

        /**
         * 计算向量间距离
         * @param {Vector2} v1
         * @param {Vector2} v2
         * @return {number}
         */
        distance: function (v1, v2) {
            return Math.sqrt(
                (v1[0] - v2[0]) * (v1[0] - v2[0])
                + (v1[1] - v2[1]) * (v1[1] - v2[1])
            );
        },

        /**
         * 向量距离平方
         * @param {Vector2} v1
         * @param {Vector2} v2
         * @return {number}
         */
        distanceSquare: function (v1, v2) {
            return (v1[0] - v2[0]) * (v1[0] - v2[0])
                + (v1[1] - v2[1]) * (v1[1] - v2[1]);
        },

        /**
         * 求负向量
         * @param {Vector2} out
         * @param {Vector2} v
         */
        negate: function (out, v) {
            out[0] = -v[0];
            out[1] = -v[1];
            return out;
        },

        /**
         * 插值两个点
         * @param {Vector2} out
         * @param {Vector2} v1
         * @param {Vector2} v2
         * @param {number} t
         */
        lerp: function (out, v1, v2, t) {
            out[0] = v1[0] + t * (v2[0] - v1[0]);
            out[1] = v1[1] + t * (v2[1] - v1[1]);
            return out;
        },

        /**
         * 矩阵左乘向量
         * @param {Vector2} out
         * @param {Vector2} v
         * @param {Vector2} m
         */
        applyTransform: function (out, v, m) {
            var x = v[0];
            var y = v[1];
            out[0] = m[0] * x + m[2] * y + m[4];
            out[1] = m[1] * x + m[3] * y + m[5];
            return out;
        },
        /**
         * 求两个向量最小值
         * @param  {Vector2} out
         * @param  {Vector2} v1
         * @param  {Vector2} v2
         */
        min: function (out, v1, v2) {
            out[0] = Math.min(v1[0], v2[0]);
            out[1] = Math.min(v1[1], v2[1]);
            return out;
        },
        /**
         * 求两个向量最大值
         * @param  {Vector2} out
         * @param  {Vector2} v1
         * @param  {Vector2} v2
         */
        max: function (out, v1, v2) {
            out[0] = Math.max(v1[0], v2[0]);
            out[1] = Math.max(v1[1], v2[1]);
            return out;
        }
    };

    vector.length = vector.len;
    vector.lengthSquare = vector.lenSquare;
    vector.dist = vector.distance;
    vector.distSquare = vector.distanceSquare;

    return vector;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Handler
 * @module zrender/Handler
 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
 *         errorrik (errorrik@gmail.com)
 *         pissang (shenyi.914@gmail.com)
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    'use strict';

    var util = __webpack_require__(33);
    var Draggable = __webpack_require__(780);

    var Eventful = __webpack_require__(155);

    var SILENT = 'silent';

    function makeEventPacket(eveType, targetInfo, event) {
        return {
            type: eveType,
            event: event,
            // target can only be an element that is not silent.
            target: targetInfo.target,
            // topTarget can be a silent element.
            topTarget: targetInfo.topTarget,
            cancelBubble: false,
            offsetX: event.zrX,
            offsetY: event.zrY,
            gestureEvent: event.gestureEvent,
            pinchX: event.pinchX,
            pinchY: event.pinchY,
            pinchScale: event.pinchScale,
            wheelDelta: event.zrDelta,
            zrByTouch: event.zrByTouch
        };
    }

    function EmptyProxy () {}
    EmptyProxy.prototype.dispose = function () {};

    var handlerNames = [
        'click', 'dblclick', 'mousewheel', 'mouseout',
        'mouseup', 'mousedown', 'mousemove', 'contextmenu'
    ];
    /**
     * @alias module:zrender/Handler
     * @constructor
     * @extends module:zrender/mixin/Eventful
     * @param {module:zrender/Storage} storage Storage instance.
     * @param {module:zrender/Painter} painter Painter instance.
     * @param {module:zrender/dom/HandlerProxy} proxy HandlerProxy instance.
     * @param {HTMLElement} painterRoot painter.root (not painter.getViewportRoot()).
     */
    var Handler = function(storage, painter, proxy, painterRoot) {
        Eventful.call(this);

        this.storage = storage;

        this.painter = painter;

        this.painterRoot = painterRoot;

        proxy = proxy || new EmptyProxy();

        /**
         * Proxy of event. can be Dom, WebGLSurface, etc.
         */
        this.proxy = proxy;

        // Attach handler
        proxy.handler = this;

        /**
         * {target, topTarget}
         * @private
         * @type {Object}
         */
        this._hovered = {};

        /**
         * @private
         * @type {Date}
         */
        this._lastTouchMoment;

        /**
         * @private
         * @type {number}
         */
        this._lastX;

        /**
         * @private
         * @type {number}
         */
        this._lastY;


        Draggable.call(this);

        util.each(handlerNames, function (name) {
            proxy.on && proxy.on(name, this[name], this);
        }, this);
    };

    Handler.prototype = {

        constructor: Handler,

        mousemove: function (event) {
            var x = event.zrX;
            var y = event.zrY;

            var lastHovered = this._hovered;
            var hovered = this._hovered = this.findHover(x, y);
            var hoveredTarget = hovered.target;
            var lastHoveredTarget = lastHovered.target;

            var proxy = this.proxy;
            proxy.setCursor && proxy.setCursor(hoveredTarget ? hoveredTarget.cursor : 'default');

            // Mouse out on previous hovered element
            if (lastHoveredTarget && hoveredTarget !== lastHoveredTarget && lastHoveredTarget.__zr) {
                this.dispatchToElement(lastHovered, 'mouseout', event);
            }

            // Mouse moving on one element
            this.dispatchToElement(hovered, 'mousemove', event);

            // Mouse over on a new element
            if (hoveredTarget && hoveredTarget !== lastHoveredTarget) {
                this.dispatchToElement(hovered, 'mouseover', event);
            }
        },

        mouseout: function (event) {
            this.dispatchToElement(this._hovered, 'mouseout', event);

            // There might be some doms created by upper layer application
            // at the same level of painter.getViewportRoot() (e.g., tooltip
            // dom created by echarts), where 'globalout' event should not
            // be triggered when mouse enters these doms. (But 'mouseout'
            // should be triggered at the original hovered element as usual).
            var element = event.toElement || event.relatedTarget;
            var innerDom;
            do {
                element = element && element.parentNode;
            }
            while (element && element.nodeType != 9 && !(
                innerDom = element === this.painterRoot
            ));

            !innerDom && this.trigger('globalout', {event: event});
        },

        /**
         * Resize
         */
        resize: function (event) {
            this._hovered = {};
        },

        /**
         * Dispatch event
         * @param {string} eventName
         * @param {event=} eventArgs
         */
        dispatch: function (eventName, eventArgs) {
            var handler = this[eventName];
            handler && handler.call(this, eventArgs);
        },

        /**
         * Dispose
         */
        dispose: function () {

            this.proxy.dispose();

            this.storage =
            this.proxy =
            this.painter = null;
        },

        /**
         * 设置默认的cursor style
         * @param {string} [cursorStyle='default'] 例如 crosshair
         */
        setCursorStyle: function (cursorStyle) {
            var proxy = this.proxy;
            proxy.setCursor && proxy.setCursor(cursorStyle);
        },

        /**
         * 事件分发代理
         *
         * @private
         * @param {Object} targetInfo {target, topTarget} 目标图形元素
         * @param {string} eventName 事件名称
         * @param {Object} event 事件对象
         */
        dispatchToElement: function (targetInfo, eventName, event) {
            targetInfo = targetInfo || {};
            var eventHandler = 'on' + eventName;
            var eventPacket = makeEventPacket(eventName, targetInfo, event);

            var el = targetInfo.target;
            while (el) {
                el[eventHandler]
                    && (eventPacket.cancelBubble = el[eventHandler].call(el, eventPacket));

                el.trigger(eventName, eventPacket);

                el = el.parent;

                if (eventPacket.cancelBubble) {
                    break;
                }
            }

            if (!eventPacket.cancelBubble) {
                // 冒泡到顶级 zrender 对象
                this.trigger(eventName, eventPacket);
                // 分发事件到用户自定义层
                // 用户有可能在全局 click 事件中 dispose，所以需要判断下 painter 是否存在
                this.painter && this.painter.eachOtherLayer(function (layer) {
                    if (typeof(layer[eventHandler]) == 'function') {
                        layer[eventHandler].call(layer, eventPacket);
                    }
                    if (layer.trigger) {
                        layer.trigger(eventName, eventPacket);
                    }
                });
            }
        },

        /**
         * @private
         * @param {number} x
         * @param {number} y
         * @param {module:zrender/graphic/Displayable} exclude
         * @return {model:zrender/Element}
         * @method
         */
        findHover: function(x, y, exclude) {
            var list = this.storage.getDisplayList();
            var out = {};

            for (var i = list.length - 1; i >= 0 ; i--) {
                var hoverCheckResult;
                if (list[i] !== exclude
                    // getDisplayList may include ignored item in VML mode
                    && !list[i].ignore
                    && (hoverCheckResult = isHover(list[i], x, y))
                ) {
                    !out.topTarget && (out.topTarget = list[i]);
                    if (hoverCheckResult !== SILENT) {
                        out.target = list[i];
                        break;
                    }
                }
            }

            return out;
        }
    };

    // Common handlers
    util.each(['click', 'mousedown', 'mouseup', 'mousewheel', 'dblclick', 'contextmenu'], function (name) {
        Handler.prototype[name] = function (event) {
            // Find hover again to avoid click event is dispatched manually. Or click is triggered without mouseover
            var hovered = this.findHover(event.zrX, event.zrY);
            var hoveredTarget = hovered.target;

            if (name === 'mousedown') {
                this._downel = hoveredTarget;
                // In case click triggered before mouseup
                this._upel = hoveredTarget;
            }
            else if (name === 'mosueup') {
                this._upel = hoveredTarget;
            }
            else if (name === 'click') {
                if (this._downel !== this._upel) {
                    return;
                }
            }

            this.dispatchToElement(hovered, name, event);
        };
    });

    function isHover(displayable, x, y) {
        if (displayable[displayable.rectHover ? 'rectContain' : 'contain'](x, y)) {
            var el = displayable;
            var isSilent;
            while (el) {
                // If clipped by ancestor.
                // FIXME: If clipPath has neither stroke nor fill,
                // el.clipPath.contain(x, y) will always return false.
                if (el.clipPath && !el.clipPath.contain(x, y))  {
                    return false;
                }
                if (el.silent) {
                    isSilent = true;
                }
                el = el.parent;
            }
            return isSilent ? SILENT : true;
        }

        return false;
    }

    util.mixin(Handler, Eventful);
    util.mixin(Handler, Draggable);

    return Handler;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @module zrender/Layer
 * @author pissang(https://www.github.com/pissang)
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var util = __webpack_require__(33);
    var config = __webpack_require__(152);
    var Style = __webpack_require__(343);
    var Pattern = __webpack_require__(341);

    function returnFalse() {
        return false;
    }

    /**
     * 创建dom
     *
     * @inner
     * @param {string} id dom id 待用
     * @param {string} type dom type，such as canvas, div etc.
     * @param {Painter} painter painter instance
     * @param {number} number
     */
    function createDom(id, type, painter, dpr) {
        var newDom = document.createElement(type);
        var width = painter.getWidth();
        var height = painter.getHeight();

        var newDomStyle = newDom.style;
        // 没append呢，请原谅我这样写，清晰~
        newDomStyle.position = 'absolute';
        newDomStyle.left = 0;
        newDomStyle.top = 0;
        newDomStyle.width = width + 'px';
        newDomStyle.height = height + 'px';
        newDom.width = width * dpr;
        newDom.height = height * dpr;

        // id不作为索引用，避免可能造成的重名，定义为私有属性
        newDom.setAttribute('data-zr-dom-id', id);
        return newDom;
    }

    /**
     * @alias module:zrender/Layer
     * @constructor
     * @extends module:zrender/mixin/Transformable
     * @param {string} id
     * @param {module:zrender/Painter} painter
     * @param {number} [dpr]
     */
    var Layer = function(id, painter, dpr) {
        var dom;
        dpr = dpr || config.devicePixelRatio;
        if (typeof id === 'string') {
            dom = createDom(id, 'canvas', painter, dpr);
        }
        // Not using isDom because in node it will return false
        else if (util.isObject(id)) {
            dom = id;
            id = dom.id;
        }
        this.id = id;
        this.dom = dom;

        var domStyle = dom.style;
        if (domStyle) { // Not in node
            dom.onselectstart = returnFalse; // 避免页面选中的尴尬
            domStyle['-webkit-user-select'] = 'none';
            domStyle['user-select'] = 'none';
            domStyle['-webkit-touch-callout'] = 'none';
            domStyle['-webkit-tap-highlight-color'] = 'rgba(0,0,0,0)';
            domStyle['padding'] = 0;
            domStyle['margin'] = 0;
            domStyle['border-width'] = 0;
        }

        this.domBack = null;
        this.ctxBack = null;

        this.painter = painter;

        this.config = null;

        // Configs
        /**
         * 每次清空画布的颜色
         * @type {string}
         * @default 0
         */
        this.clearColor = 0;
        /**
         * 是否开启动态模糊
         * @type {boolean}
         * @default false
         */
        this.motionBlur = false;
        /**
         * 在开启动态模糊的时候使用，与上一帧混合的alpha值，值越大尾迹越明显
         * @type {number}
         * @default 0.7
         */
        this.lastFrameAlpha = 0.7;

        /**
         * Layer dpr
         * @type {number}
         */
        this.dpr = dpr;
    };

    Layer.prototype = {

        constructor: Layer,

        elCount: 0,

        __dirty: true,

        initContext: function () {
            this.ctx = this.dom.getContext('2d');

            this.ctx.dpr = this.dpr;
        },

        createBackBuffer: function () {
            var dpr = this.dpr;

            this.domBack = createDom('back-' + this.id, 'canvas', this.painter, dpr);
            this.ctxBack = this.domBack.getContext('2d');

            if (dpr != 1) {
                this.ctxBack.scale(dpr, dpr);
            }
        },

        /**
         * @param  {number} width
         * @param  {number} height
         */
        resize: function (width, height) {
            var dpr = this.dpr;

            var dom = this.dom;
            var domStyle = dom.style;
            var domBack = this.domBack;

            domStyle.width = width + 'px';
            domStyle.height = height + 'px';

            dom.width = width * dpr;
            dom.height = height * dpr;

            if (domBack) {
                domBack.width = width * dpr;
                domBack.height = height * dpr;

                if (dpr != 1) {
                    this.ctxBack.scale(dpr, dpr);
                }
            }
        },

        /**
         * 清空该层画布
         * @param {boolean} clearAll Clear all with out motion blur
         */
        clear: function (clearAll) {
            var dom = this.dom;
            var ctx = this.ctx;
            var width = dom.width;
            var height = dom.height;

            var clearColor = this.clearColor;
            var haveMotionBLur = this.motionBlur && !clearAll;
            var lastFrameAlpha = this.lastFrameAlpha;

            var dpr = this.dpr;

            if (haveMotionBLur) {
                if (!this.domBack) {
                    this.createBackBuffer();
                }

                this.ctxBack.globalCompositeOperation = 'copy';
                this.ctxBack.drawImage(
                    dom, 0, 0,
                    width / dpr,
                    height / dpr
                );
            }

            ctx.clearRect(0, 0, width, height);
            if (clearColor) {
                var clearColorGradientOrPattern;
                // Gradient
                if (clearColor.colorStops) {
                    // Cache canvas gradient
                    clearColorGradientOrPattern = clearColor.__canvasGradient || Style.getGradient(ctx, clearColor, {
                        x: 0,
                        y: 0,
                        width: width,
                        height: height
                    });

                    clearColor.__canvasGradient = clearColorGradientOrPattern;
                }
                // Pattern
                else if (clearColor.image) {
                    clearColorGradientOrPattern = Pattern.prototype.getCanvasPattern.call(clearColor, ctx);
                }
                ctx.save();
                ctx.fillStyle = clearColorGradientOrPattern || clearColor;
                ctx.fillRect(0, 0, width, height);
                ctx.restore();
            }

            if (haveMotionBLur) {
                var domBack = this.domBack;
                ctx.save();
                ctx.globalAlpha = lastFrameAlpha;
                ctx.drawImage(domBack, 0, 0, width, height);
                ctx.restore();
            }
        }
    };

    return Layer;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Default canvas painter
 * @module zrender/Painter
 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
 *         errorrik (errorrik@gmail.com)
 *         pissang (https://www.github.com/pissang)
 */
 !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
    'use strict';

    var config = __webpack_require__(152);
    var util = __webpack_require__(33);
    var log = __webpack_require__(337);
    var BoundingRect = __webpack_require__(90);
    var timsort = __webpack_require__(339);

    var Layer = __webpack_require__(759);

    var requestAnimationFrame = __webpack_require__(333);

    // PENDIGN
    // Layer exceeds MAX_PROGRESSIVE_LAYER_NUMBER may have some problem when flush directly second time.
    //
    // Maximum progressive layer. When exceeding this number. All elements will be drawed in the last layer.
    var MAX_PROGRESSIVE_LAYER_NUMBER = 5;

    function parseInt10(val) {
        return parseInt(val, 10);
    }

    function isLayerValid(layer) {
        if (!layer) {
            return false;
        }

        if (layer.__builtin__) {
            return true;
        }

        if (typeof(layer.resize) !== 'function'
            || typeof(layer.refresh) !== 'function'
        ) {
            return false;
        }

        return true;
    }

    function preProcessLayer(layer) {
        layer.__unusedCount++;
    }

    function postProcessLayer(layer) {
        if (layer.__unusedCount == 1) {
            layer.clear();
        }
    }

    var tmpRect = new BoundingRect(0, 0, 0, 0);
    var viewRect = new BoundingRect(0, 0, 0, 0);
    function isDisplayableCulled(el, width, height) {
        tmpRect.copy(el.getBoundingRect());
        if (el.transform) {
            tmpRect.applyTransform(el.transform);
        }
        viewRect.width = width;
        viewRect.height = height;
        return !tmpRect.intersect(viewRect);
    }

    function isClipPathChanged(clipPaths, prevClipPaths) {
        if (clipPaths == prevClipPaths) { // Can both be null or undefined
            return false;
        }

        if (!clipPaths || !prevClipPaths || (clipPaths.length !== prevClipPaths.length)) {
            return true;
        }
        for (var i = 0; i < clipPaths.length; i++) {
            if (clipPaths[i] !== prevClipPaths[i]) {
                return true;
            }
        }
    }

    function doClip(clipPaths, ctx) {
        for (var i = 0; i < clipPaths.length; i++) {
            var clipPath = clipPaths[i];

            clipPath.setTransform(ctx);
            ctx.beginPath();
            clipPath.buildPath(ctx, clipPath.shape);
            ctx.clip();
            // Transform back
            clipPath.restoreTransform(ctx);
        }
    }

    function createRoot(width, height) {
        var domRoot = document.createElement('div');

        // domRoot.onselectstart = returnFalse; // 避免页面选中的尴尬
        domRoot.style.cssText = [
            'position:relative',
            'overflow:hidden',
            'width:' + width + 'px',
            'height:' + height + 'px',
            'padding:0',
            'margin:0',
            'border-width:0'
        ].join(';') + ';';

        return domRoot;
    }

    /**
     * @alias module:zrender/Painter
     * @constructor
     * @param {HTMLElement} root 绘图容器
     * @param {module:zrender/Storage} storage
     * @param {Ojbect} opts
     */
    var Painter = function (root, storage, opts) {
        // In node environment using node-canvas
        var singleCanvas = !root.nodeName // In node ?
            || root.nodeName.toUpperCase() === 'CANVAS';

        this._opts = opts = util.extend({}, opts || {});

        /**
         * @type {number}
         */
        this.dpr = opts.devicePixelRatio || config.devicePixelRatio;
        /**
         * @type {boolean}
         * @private
         */
        this._singleCanvas = singleCanvas;
        /**
         * 绘图容器
         * @type {HTMLElement}
         */
        this.root = root;

        var rootStyle = root.style;

        if (rootStyle) {
            rootStyle['-webkit-tap-highlight-color'] = 'transparent';
            rootStyle['-webkit-user-select'] =
            rootStyle['user-select'] =
            rootStyle['-webkit-touch-callout'] = 'none';

            root.innerHTML = '';
        }

        /**
         * @type {module:zrender/Storage}
         */
        this.storage = storage;

        /**
         * @type {Array.<number>}
         * @private
         */
        var zlevelList = this._zlevelList = [];

        /**
         * @type {Object.<string, module:zrender/Layer>}
         * @private
         */
        var layers = this._layers = {};

        /**
         * @type {Object.<string, Object>}
         * @type {private}
         */
        this._layerConfig = {};

        if (!singleCanvas) {
            this._width = this._getSize(0);
            this._height = this._getSize(1);

            var domRoot = this._domRoot = createRoot(
                this._width, this._height
            );
            root.appendChild(domRoot);
        }
        else {
            if (opts.width != null) {
                root.width = opts.width;
            }
            if (opts.height != null) {
                root.height = opts.height;
            }
            // Use canvas width and height directly
            var width = root.width;
            var height = root.height;
            this._width = width;
            this._height = height;

            // Create layer if only one given canvas
            // Device pixel ratio is fixed to 1 because given canvas has its specified width and height
            var mainLayer = new Layer(root, this, 1);
            mainLayer.initContext();
            // FIXME Use canvas width and height
            // mainLayer.resize(width, height);
            layers[0] = mainLayer;
            zlevelList.push(0);

            this._domRoot = root;
        }

        // Layers for progressive rendering
        this._progressiveLayers = [];

        /**
         * @type {module:zrender/Layer}
         * @private
         */
        this._hoverlayer;

        this._hoverElements = [];
    };

    Painter.prototype = {

        constructor: Painter,

        /**
         * If painter use a single canvas
         * @return {boolean}
         */
        isSingleCanvas: function () {
            return this._singleCanvas;
        },
        /**
         * @return {HTMLDivElement}
         */
        getViewportRoot: function () {
            return this._domRoot;
        },

        /**
         * 刷新
         * @param {boolean} [paintAll=false] 强制绘制所有displayable
         */
        refresh: function (paintAll) {

            var list = this.storage.getDisplayList(true);

            var zlevelList = this._zlevelList;

            this._paintList(list, paintAll);

            // Paint custum layers
            for (var i = 0; i < zlevelList.length; i++) {
                var z = zlevelList[i];
                var layer = this._layers[z];
                if (!layer.__builtin__ && layer.refresh) {
                    layer.refresh();
                }
            }

            this.refreshHover();

            if (this._progressiveLayers.length) {
                this._startProgessive();
            }

            return this;
        },

        addHover: function (el, hoverStyle) {
            if (el.__hoverMir) {
                return;
            }
            var elMirror = new el.constructor({
                style: el.style,
                shape: el.shape
            });
            elMirror.__from = el;
            el.__hoverMir = elMirror;
            elMirror.setStyle(hoverStyle);
            this._hoverElements.push(elMirror);
        },

        removeHover: function (el) {
            var elMirror = el.__hoverMir;
            var hoverElements = this._hoverElements;
            var idx = util.indexOf(hoverElements, elMirror);
            if (idx >= 0) {
                hoverElements.splice(idx, 1);
            }
            el.__hoverMir = null;
        },

        clearHover: function (el) {
            var hoverElements = this._hoverElements;
            for (var i = 0; i < hoverElements.length; i++) {
                var from = hoverElements[i].__from;
                if (from) {
                    from.__hoverMir = null;
                }
            }
            hoverElements.length = 0;
        },

        refreshHover: function () {
            var hoverElements = this._hoverElements;
            var len = hoverElements.length;
            var hoverLayer = this._hoverlayer;
            hoverLayer && hoverLayer.clear();

            if (!len) {
                return;
            }
            timsort(hoverElements, this.storage.displayableSortFunc);

            // Use a extream large zlevel
            // FIXME?
            if (!hoverLayer) {
                hoverLayer = this._hoverlayer = this.getLayer(1e5);
            }

            var scope = {};
            hoverLayer.ctx.save();
            for (var i = 0; i < len;) {
                var el = hoverElements[i];
                var originalEl = el.__from;
                // Original el is removed
                // PENDING
                if (!(originalEl && originalEl.__zr)) {
                    hoverElements.splice(i, 1);
                    originalEl.__hoverMir = null;
                    len--;
                    continue;
                }
                i++;

                // Use transform
                // FIXME style and shape ?
                if (!originalEl.invisible) {
                    el.transform = originalEl.transform;
                    el.invTransform = originalEl.invTransform;
                    el.__clipPaths = originalEl.__clipPaths;
                    // el.
                    this._doPaintEl(el, hoverLayer, true, scope);
                }
            }
            hoverLayer.ctx.restore();
        },

        _startProgessive: function () {
            var self = this;

            if (!self._furtherProgressive) {
                return;
            }

            // Use a token to stop progress steps triggered by
            // previous zr.refresh calling.
            var token = self._progressiveToken = +new Date();

            self._progress++;
            requestAnimationFrame(step);

            function step() {
                // In case refreshed or disposed
                if (token === self._progressiveToken && self.storage) {

                    self._doPaintList(self.storage.getDisplayList());

                    if (self._furtherProgressive) {
                        self._progress++;
                        requestAnimationFrame(step);
                    }
                    else {
                        self._progressiveToken = -1;
                    }
                }
            }
        },

        _clearProgressive: function () {
            this._progressiveToken = -1;
            this._progress = 0;
            util.each(this._progressiveLayers, function (layer) {
                layer.__dirty && layer.clear();
            });
        },

        _paintList: function (list, paintAll) {

            if (paintAll == null) {
                paintAll = false;
            }

            this._updateLayerStatus(list);

            this._clearProgressive();

            this.eachBuiltinLayer(preProcessLayer);

            this._doPaintList(list, paintAll);

            this.eachBuiltinLayer(postProcessLayer);
        },

        _doPaintList: function (list, paintAll) {
            var currentLayer;
            var currentZLevel;
            var ctx;

            // var invTransform = [];
            var scope;

            var progressiveLayerIdx = 0;
            var currentProgressiveLayer;

            var width = this._width;
            var height = this._height;
            var layerProgress;
            var frame = this._progress;
            function flushProgressiveLayer(layer) {
                var dpr = ctx.dpr || 1;
                ctx.save();
                ctx.globalAlpha = 1;
                ctx.shadowBlur = 0;
                // Avoid layer don't clear in next progressive frame
                currentLayer.__dirty = true;
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.drawImage(layer.dom, 0, 0, width * dpr, height * dpr);
                ctx.restore();
            }

            for (var i = 0, l = list.length; i < l; i++) {
                var el = list[i];
                var elZLevel = this._singleCanvas ? 0 : el.zlevel;

                var elFrame = el.__frame;

                // Flush at current context
                // PENDING
                if (elFrame < 0 && currentProgressiveLayer) {
                    flushProgressiveLayer(currentProgressiveLayer);
                    currentProgressiveLayer = null;
                }

                // Change draw layer
                if (currentZLevel !== elZLevel) {
                    if (ctx) {
                        ctx.restore();
                    }

                    // Reset scope
                    scope = {};

                    // Only 0 zlevel if only has one canvas
                    currentZLevel = elZLevel;
                    currentLayer = this.getLayer(currentZLevel);

                    if (!currentLayer.__builtin__) {
                        log(
                            'ZLevel ' + currentZLevel
                            + ' has been used by unkown layer ' + currentLayer.id
                        );
                    }

                    ctx = currentLayer.ctx;
                    ctx.save();

                    // Reset the count
                    currentLayer.__unusedCount = 0;

                    if (currentLayer.__dirty || paintAll) {
                        currentLayer.clear();
                    }
                }

                if (!(currentLayer.__dirty || paintAll)) {
                    continue;
                }

                if (elFrame >= 0) {
                    // Progressive layer changed
                    if (!currentProgressiveLayer) {
                        currentProgressiveLayer = this._progressiveLayers[
                            Math.min(progressiveLayerIdx++, MAX_PROGRESSIVE_LAYER_NUMBER - 1)
                        ];

                        currentProgressiveLayer.ctx.save();
                        currentProgressiveLayer.renderScope = {};

                        if (currentProgressiveLayer
                            && (currentProgressiveLayer.__progress > currentProgressiveLayer.__maxProgress)
                        ) {
                            // flushProgressiveLayer(currentProgressiveLayer);
                            // Quick jump all progressive elements
                            // All progressive element are not dirty, jump over and flush directly
                            i = currentProgressiveLayer.__nextIdxNotProg - 1;
                            // currentProgressiveLayer = null;
                            continue;
                        }

                        layerProgress = currentProgressiveLayer.__progress;

                        if (!currentProgressiveLayer.__dirty) {
                            // Keep rendering
                            frame = layerProgress;
                        }

                        currentProgressiveLayer.__progress = frame + 1;
                    }

                    if (elFrame === frame) {
                        this._doPaintEl(el, currentProgressiveLayer, true, currentProgressiveLayer.renderScope);
                    }
                }
                else {
                    this._doPaintEl(el, currentLayer, paintAll, scope);
                }

                el.__dirty = false;
            }

            if (currentProgressiveLayer) {
                flushProgressiveLayer(currentProgressiveLayer);
            }

            // Restore the lastLayer ctx
            ctx && ctx.restore();
            // If still has clipping state
            // if (scope.prevElClipPaths) {
            //     ctx.restore();
            // }

            this._furtherProgressive = false;
            util.each(this._progressiveLayers, function (layer) {
                if (layer.__maxProgress >= layer.__progress) {
                    this._furtherProgressive = true;
                }
            }, this);
        },

        _doPaintEl: function (el, currentLayer, forcePaint, scope) {
            var ctx = currentLayer.ctx;
            var m = el.transform;
            if (
                (currentLayer.__dirty || forcePaint)
                // Ignore invisible element
                && !el.invisible
                // Ignore transparent element
                && el.style.opacity !== 0
                // Ignore scale 0 element, in some environment like node-canvas
                // Draw a scale 0 element can cause all following draw wrong
                // And setTransform with scale 0 will cause set back transform failed.
                && !(m && !m[0] && !m[3])
                // Ignore culled element
                && !(el.culling && isDisplayableCulled(el, this._width, this._height))
            ) {

                var clipPaths = el.__clipPaths;

                // Optimize when clipping on group with several elements
                if (scope.prevClipLayer !== currentLayer
                    || isClipPathChanged(clipPaths, scope.prevElClipPaths)
                ) {
                    // If has previous clipping state, restore from it
                    if (scope.prevElClipPaths) {
                        scope.prevClipLayer.ctx.restore();
                        scope.prevClipLayer = scope.prevElClipPaths = null;

                        // Reset prevEl since context has been restored
                        scope.prevEl = null;
                    }
                    // New clipping state
                    if (clipPaths) {
                        ctx.save();
                        doClip(clipPaths, ctx);
                        scope.prevClipLayer = currentLayer;
                        scope.prevElClipPaths = clipPaths;
                    }
                }
                el.beforeBrush && el.beforeBrush(ctx);

                el.brush(ctx, scope.prevEl || null);
                scope.prevEl = el;

                el.afterBrush && el.afterBrush(ctx);
            }
        },

        /**
         * 获取 zlevel 所在层，如果不存在则会创建一个新的层
         * @param {number} zlevel
         * @return {module:zrender/Layer}
         */
        getLayer: function (zlevel) {
            if (this._singleCanvas) {
                return this._layers[0];
            }

            var layer = this._layers[zlevel];
            if (!layer) {
                // Create a new layer
                layer = new Layer('zr_' + zlevel, this, this.dpr);
                layer.__builtin__ = true;

                if (this._layerConfig[zlevel]) {
                    util.merge(layer, this._layerConfig[zlevel], true);
                }

                this.insertLayer(zlevel, layer);

                // Context is created after dom inserted to document
                // Or excanvas will get 0px clientWidth and clientHeight
                layer.initContext();
            }

            return layer;
        },

        insertLayer: function (zlevel, layer) {

            var layersMap = this._layers;
            var zlevelList = this._zlevelList;
            var len = zlevelList.length;
            var prevLayer = null;
            var i = -1;
            var domRoot = this._domRoot;

            if (layersMap[zlevel]) {
                log('ZLevel ' + zlevel + ' has been used already');
                return;
            }
            // Check if is a valid layer
            if (!isLayerValid(layer)) {
                log('Layer of zlevel ' + zlevel + ' is not valid');
                return;
            }

            if (len > 0 && zlevel > zlevelList[0]) {
                for (i = 0; i < len - 1; i++) {
                    if (
                        zlevelList[i] < zlevel
                        && zlevelList[i + 1] > zlevel
                    ) {
                        break;
                    }
                }
                prevLayer = layersMap[zlevelList[i]];
            }
            zlevelList.splice(i + 1, 0, zlevel);

            layersMap[zlevel] = layer;

            // Vitual layer will not directly show on the screen.
            // (It can be a WebGL layer and assigned to a ZImage element)
            // But it still under management of zrender.
            if (!layer.virtual) {
                if (prevLayer) {
                    var prevDom = prevLayer.dom;
                    if (prevDom.nextSibling) {
                        domRoot.insertBefore(
                            layer.dom,
                            prevDom.nextSibling
                        );
                    }
                    else {
                        domRoot.appendChild(layer.dom);
                    }
                }
                else {
                    if (domRoot.firstChild) {
                        domRoot.insertBefore(layer.dom, domRoot.firstChild);
                    }
                    else {
                        domRoot.appendChild(layer.dom);
                    }
                }
            }
        },

        // Iterate each layer
        eachLayer: function (cb, context) {
            var zlevelList = this._zlevelList;
            var z;
            var i;
            for (i = 0; i < zlevelList.length; i++) {
                z = zlevelList[i];
                cb.call(context, this._layers[z], z);
            }
        },

        // Iterate each buildin layer
        eachBuiltinLayer: function (cb, context) {
            var zlevelList = this._zlevelList;
            var layer;
            var z;
            var i;
            for (i = 0; i < zlevelList.length; i++) {
                z = zlevelList[i];
                layer = this._layers[z];
                if (layer.__builtin__) {
                    cb.call(context, layer, z);
                }
            }
        },

        // Iterate each other layer except buildin layer
        eachOtherLayer: function (cb, context) {
            var zlevelList = this._zlevelList;
            var layer;
            var z;
            var i;
            for (i = 0; i < zlevelList.length; i++) {
                z = zlevelList[i];
                layer = this._layers[z];
                if (!layer.__builtin__) {
                    cb.call(context, layer, z);
                }
            }
        },

        /**
         * 获取所有已创建的层
         * @param {Array.<module:zrender/Layer>} [prevLayer]
         */
        getLayers: function () {
            return this._layers;
        },

        _updateLayerStatus: function (list) {

            var layers = this._layers;
            var progressiveLayers = this._progressiveLayers;

            var elCountsLastFrame = {};
            var progressiveElCountsLastFrame = {};

            this.eachBuiltinLayer(function (layer, z) {
                elCountsLastFrame[z] = layer.elCount;
                layer.elCount = 0;
                layer.__dirty = false;
            });

            util.each(progressiveLayers, function (layer, idx) {
                progressiveElCountsLastFrame[idx] = layer.elCount;
                layer.elCount = 0;
                layer.__dirty = false;
            });

            var progressiveLayerCount = 0;
            var currentProgressiveLayer;
            var lastProgressiveKey;
            var frameCount = 0;
            for (var i = 0, l = list.length; i < l; i++) {
                var el = list[i];
                var zlevel = this._singleCanvas ? 0 : el.zlevel;
                var layer = layers[zlevel];
                var elProgress = el.progressive;
                if (layer) {
                    layer.elCount++;
                    layer.__dirty = layer.__dirty || el.__dirty;
                }

                /////// Update progressive
                if (elProgress >= 0) {
                    // Fix wrong progressive sequence problem.
                    if (lastProgressiveKey !== elProgress) {
                        lastProgressiveKey = elProgress;
                        frameCount++;
                    }
                    var elFrame = el.__frame = frameCount - 1;
                    if (!currentProgressiveLayer) {
                        var idx = Math.min(progressiveLayerCount, MAX_PROGRESSIVE_LAYER_NUMBER - 1);
                        currentProgressiveLayer = progressiveLayers[idx];
                        if (!currentProgressiveLayer) {
                            currentProgressiveLayer = progressiveLayers[idx] = new Layer(
                                'progressive', this, this.dpr
                            );
                            currentProgressiveLayer.initContext();
                        }
                        currentProgressiveLayer.__maxProgress = 0;
                    }
                    currentProgressiveLayer.__dirty = currentProgressiveLayer.__dirty || el.__dirty;
                    currentProgressiveLayer.elCount++;

                    currentProgressiveLayer.__maxProgress = Math.max(
                        currentProgressiveLayer.__maxProgress, elFrame
                    );

                    if (currentProgressiveLayer.__maxProgress >= currentProgressiveLayer.__progress) {
                        // Should keep rendering this  layer because progressive rendering is not finished yet
                        layer.__dirty = true;
                    }
                }
                else {
                    el.__frame = -1;

                    if (currentProgressiveLayer) {
                        currentProgressiveLayer.__nextIdxNotProg = i;
                        progressiveLayerCount++;
                        currentProgressiveLayer = null;
                    }
                }
            }

            if (currentProgressiveLayer) {
                progressiveLayerCount++;
                currentProgressiveLayer.__nextIdxNotProg = i;
            }

            // 层中的元素数量有发生变化
            this.eachBuiltinLayer(function (layer, z) {
                if (elCountsLastFrame[z] !== layer.elCount) {
                    layer.__dirty = true;
                }
            });

            progressiveLayers.length = Math.min(progressiveLayerCount, MAX_PROGRESSIVE_LAYER_NUMBER);
            util.each(progressiveLayers, function (layer, idx) {
                if (progressiveElCountsLastFrame[idx] !== layer.elCount) {
                    el.__dirty = true;
                }
                if (layer.__dirty) {
                    layer.__progress = 0;
                }
            });
        },

        /**
         * 清除hover层外所有内容
         */
        clear: function () {
            this.eachBuiltinLayer(this._clearLayer);
            return this;
        },

        _clearLayer: function (layer) {
            layer.clear();
        },

        /**
         * 修改指定zlevel的绘制参数
         *
         * @param {string} zlevel
         * @param {Object} config 配置对象
         * @param {string} [config.clearColor=0] 每次清空画布的颜色
         * @param {string} [config.motionBlur=false] 是否开启动态模糊
         * @param {number} [config.lastFrameAlpha=0.7]
         *                 在开启动态模糊的时候使用，与上一帧混合的alpha值，值越大尾迹越明显
         */
        configLayer: function (zlevel, config) {
            if (config) {
                var layerConfig = this._layerConfig;
                if (!layerConfig[zlevel]) {
                    layerConfig[zlevel] = config;
                }
                else {
                    util.merge(layerConfig[zlevel], config, true);
                }

                var layer = this._layers[zlevel];

                if (layer) {
                    util.merge(layer, layerConfig[zlevel], true);
                }
            }
        },

        /**
         * 删除指定层
         * @param {number} zlevel 层所在的zlevel
         */
        delLayer: function (zlevel) {
            var layers = this._layers;
            var zlevelList = this._zlevelList;
            var layer = layers[zlevel];
            if (!layer) {
                return;
            }
            layer.dom.parentNode.removeChild(layer.dom);
            delete layers[zlevel];

            zlevelList.splice(util.indexOf(zlevelList, zlevel), 1);
        },

        /**
         * 区域大小变化后重绘
         */
        resize: function (width, height) {
            var domRoot = this._domRoot;
            // FIXME Why ?
            domRoot.style.display = 'none';

            // Save input w/h
            var opts = this._opts;
            width != null && (opts.width = width);
            height != null && (opts.height = height);

            width = this._getSize(0);
            height = this._getSize(1);

            domRoot.style.display = '';

            // 优化没有实际改变的resize
            if (this._width != width || height != this._height) {
                domRoot.style.width = width + 'px';
                domRoot.style.height = height + 'px';

                for (var id in this._layers) {
                    if (this._layers.hasOwnProperty(id)) {
                        this._layers[id].resize(width, height);
                    }
                }
                util.each(this._progressiveLayers, function (layer) {
                    layer.resize(width, height);
                });

                this.refresh(true);
            }

            this._width = width;
            this._height = height;

            return this;
        },

        /**
         * 清除单独的一个层
         * @param {number} zlevel
         */
        clearLayer: function (zlevel) {
            var layer = this._layers[zlevel];
            if (layer) {
                layer.clear();
            }
        },

        /**
         * 释放
         */
        dispose: function () {
            this.root.innerHTML = '';

            this.root =
            this.storage =

            this._domRoot =
            this._layers = null;
        },

        /**
         * Get canvas which has all thing rendered
         * @param {Object} opts
         * @param {string} [opts.backgroundColor]
         */
        getRenderedCanvas: function (opts) {
            opts = opts || {};
            if (this._singleCanvas) {
                return this._layers[0].dom;
            }

            var imageLayer = new Layer('image', this, opts.pixelRatio || this.dpr);
            imageLayer.initContext();

            imageLayer.clearColor = opts.backgroundColor;
            imageLayer.clear();

            var displayList = this.storage.getDisplayList(true);

            var scope = {};
            var zlevel;

            var self = this;
            function findAndDrawOtherLayer(smaller, larger) {
                var zlevelList = self._zlevelList;
                if (smaller == null) {
                    smaller = -Infinity;
                }
                var intermediateLayer;
                for (var i = 0; i < zlevelList.length; i++) {
                    var z = zlevelList[i];
                    var layer = self._layers[z];
                    if (!layer.__builtin__ && z > smaller && z < larger) {
                        intermediateLayer = layer;
                        break;
                    }
                }
                if (intermediateLayer && intermediateLayer.renderToCanvas) {
                    imageLayer.ctx.save();
                    intermediateLayer.renderToCanvas(imageLayer.ctx);
                    imageLayer.ctx.restore();
                }
            }
            for (var i = 0; i < displayList.length; i++) {
                var el = displayList[i];

                if (el.zlevel !== zlevel) {
                    findAndDrawOtherLayer(zlevel, el.zlevel);
                    zlevel = el.zlevel;
                }
                this._doPaintEl(el, imageLayer, true, scope);
            }

            findAndDrawOtherLayer(zlevel, Infinity);

            return imageLayer.dom;
        },
        /**
         * 获取绘图区域宽度
         */
        getWidth: function () {
            return this._width;
        },

        /**
         * 获取绘图区域高度
         */
        getHeight: function () {
            return this._height;
        },

        _getSize: function (whIdx) {
            var opts = this._opts;
            var wh = ['width', 'height'][whIdx];
            var cwh = ['clientWidth', 'clientHeight'][whIdx];
            var plt = ['paddingLeft', 'paddingTop'][whIdx];
            var prb = ['paddingRight', 'paddingBottom'][whIdx];

            if (opts[wh] != null && opts[wh] !== 'auto') {
                return parseFloat(opts[wh]);
            }

            var root = this.root;
            var stl = document.defaultView.getComputedStyle(root);

            return (
                (root[cwh] || parseInt10(stl[wh]) || parseInt10(root.style[wh]))
                - (parseInt10(stl[plt]) || 0)
                - (parseInt10(stl[prb]) || 0)
            ) | 0;
        },

        pathToImage: function (path, dpr) {
            dpr = dpr || this.dpr;

            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var rect = path.getBoundingRect();
            var style = path.style;
            var shadowBlurSize = style.shadowBlur;
            var shadowOffsetX = style.shadowOffsetX;
            var shadowOffsetY = style.shadowOffsetY;
            var lineWidth = style.hasStroke() ? style.lineWidth : 0;

            var leftMargin = Math.max(lineWidth / 2, -shadowOffsetX + shadowBlurSize);
            var rightMargin = Math.max(lineWidth / 2, shadowOffsetX + shadowBlurSize);
            var topMargin = Math.max(lineWidth / 2, -shadowOffsetY + shadowBlurSize);
            var bottomMargin = Math.max(lineWidth / 2, shadowOffsetY + shadowBlurSize);
            var width = rect.width + leftMargin + rightMargin;
            var height = rect.height + topMargin + bottomMargin;

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            ctx.scale(dpr, dpr);
            ctx.clearRect(0, 0, width, height);
            ctx.dpr = dpr;

            var pathTransform = {
                position: path.position,
                rotation: path.rotation,
                scale: path.scale
            };
            path.position = [leftMargin - rect.x, topMargin - rect.y];
            path.rotation = 0;
            path.scale = [1, 1];
            path.updateTransform();
            if (path) {
                path.brush(ctx);
            }

            var ImageShape = __webpack_require__(776);
            var imgShape = new ImageShape({
                style: {
                    x: 0,
                    y: 0,
                    image: canvas
                }
            });

            if (pathTransform.position != null) {
                imgShape.position = path.position = pathTransform.position;
            }

            if (pathTransform.rotation != null) {
                imgShape.rotation = path.rotation = pathTransform.rotation;
            }

            if (pathTransform.scale != null) {
                imgShape.scale = path.scale = pathTransform.scale;
            }

            return imgShape;
        }
    };

    return Painter;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Storage内容仓库模块
 * @module zrender/Storage
 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
 * @author errorrik (errorrik@gmail.com)
 * @author pissang (https://github.com/pissang/)
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    'use strict';

    var util = __webpack_require__(33);
    var env = __webpack_require__(154);

    var Group = __webpack_require__(112);

    // Use timsort because in most case elements are partially sorted
    // https://jsfiddle.net/pissang/jr4x7mdm/8/
    var timsort = __webpack_require__(339);

    function shapeCompareFunc(a, b) {
        if (a.zlevel === b.zlevel) {
            if (a.z === b.z) {
                // if (a.z2 === b.z2) {
                //     // FIXME Slow has renderidx compare
                //     // http://stackoverflow.com/questions/20883421/sorting-in-javascript-should-every-compare-function-have-a-return-0-statement
                //     // https://github.com/v8/v8/blob/47cce544a31ed5577ffe2963f67acb4144ee0232/src/js/array.js#L1012
                //     return a.__renderidx - b.__renderidx;
                // }
                return a.z2 - b.z2;
            }
            return a.z - b.z;
        }
        return a.zlevel - b.zlevel;
    }
    /**
     * 内容仓库 (M)
     * @alias module:zrender/Storage
     * @constructor
     */
    var Storage = function () {
        this._roots = [];

        this._displayList = [];

        this._displayListLen = 0;
    };

    Storage.prototype = {

        constructor: Storage,

        /**
         * @param  {Function} cb
         *
         */
        traverse: function (cb, context) {
            for (var i = 0; i < this._roots.length; i++) {
                this._roots[i].traverse(cb, context);
            }
        },

        /**
         * 返回所有图形的绘制队列
         * @param {boolean} [update=false] 是否在返回前更新该数组
         * @param {boolean} [includeIgnore=false] 是否包含 ignore 的数组, 在 update 为 true 的时候有效
         *
         * 详见{@link module:zrender/graphic/Displayable.prototype.updateDisplayList}
         * @return {Array.<module:zrender/graphic/Displayable>}
         */
        getDisplayList: function (update, includeIgnore) {
            includeIgnore = includeIgnore || false;
            if (update) {
                this.updateDisplayList(includeIgnore);
            }
            return this._displayList;
        },

        /**
         * 更新图形的绘制队列。
         * 每次绘制前都会调用，该方法会先深度优先遍历整个树，更新所有Group和Shape的变换并且把所有可见的Shape保存到数组中，
         * 最后根据绘制的优先级（zlevel > z > 插入顺序）排序得到绘制队列
         * @param {boolean} [includeIgnore=false] 是否包含 ignore 的数组
         */
        updateDisplayList: function (includeIgnore) {
            this._displayListLen = 0;
            var roots = this._roots;
            var displayList = this._displayList;
            for (var i = 0, len = roots.length; i < len; i++) {
                this._updateAndAddDisplayable(roots[i], null, includeIgnore);
            }
            displayList.length = this._displayListLen;

            // for (var i = 0, len = displayList.length; i < len; i++) {
            //     displayList[i].__renderidx = i;
            // }

            // displayList.sort(shapeCompareFunc);
            env.canvasSupported && timsort(displayList, shapeCompareFunc);
        },

        _updateAndAddDisplayable: function (el, clipPaths, includeIgnore) {

            if (el.ignore && !includeIgnore) {
                return;
            }

            el.beforeUpdate();

            if (el.__dirty) {

                el.update();

            }

            el.afterUpdate();

            var userSetClipPath = el.clipPath;
            if (userSetClipPath) {

                // FIXME 效率影响
                if (clipPaths) {
                    clipPaths = clipPaths.slice();
                }
                else {
                    clipPaths = [];
                }

                var currentClipPath = userSetClipPath;
                var parentClipPath = el;
                // Recursively add clip path
                while (currentClipPath) {
                    // clipPath 的变换是基于使用这个 clipPath 的元素
                    currentClipPath.parent = parentClipPath;
                    currentClipPath.updateTransform();

                    clipPaths.push(currentClipPath);

                    parentClipPath = currentClipPath;
                    currentClipPath = currentClipPath.clipPath;
                }
            }

            if (el.isGroup) {
                var children = el._children;

                for (var i = 0; i < children.length; i++) {
                    var child = children[i];

                    // Force to mark as dirty if group is dirty
                    // FIXME __dirtyPath ?
                    if (el.__dirty) {
                        child.__dirty = true;
                    }

                    this._updateAndAddDisplayable(child, clipPaths, includeIgnore);
                }

                // Mark group clean here
                el.__dirty = false;

            }
            else {
                el.__clipPaths = clipPaths;

                this._displayList[this._displayListLen++] = el;
            }
        },

        /**
         * 添加图形(Shape)或者组(Group)到根节点
         * @param {module:zrender/Element} el
         */
        addRoot: function (el) {
            if (el.__storage === this) {
                return;
            }

            if (el instanceof Group) {
                el.addChildrenToStorage(this);
            }

            this.addToStorage(el);
            this._roots.push(el);
        },

        /**
         * 删除指定的图形(Shape)或者组(Group)
         * @param {string|Array.<string>} [el] 如果为空清空整个Storage
         */
        delRoot: function (el) {
            if (el == null) {
                // 不指定el清空
                for (var i = 0; i < this._roots.length; i++) {
                    var root = this._roots[i];
                    if (root instanceof Group) {
                        root.delChildrenFromStorage(this);
                    }
                }

                this._roots = [];
                this._displayList = [];
                this._displayListLen = 0;

                return;
            }

            if (el instanceof Array) {
                for (var i = 0, l = el.length; i < l; i++) {
                    this.delRoot(el[i]);
                }
                return;
            }


            var idx = util.indexOf(this._roots, el);
            if (idx >= 0) {
                this.delFromStorage(el);
                this._roots.splice(idx, 1);
                if (el instanceof Group) {
                    el.delChildrenFromStorage(this);
                }
            }
        },

        addToStorage: function (el) {
            el.__storage = this;
            el.dirty(false);

            return this;
        },

        delFromStorage: function (el) {
            if (el) {
                el.__storage = null;
            }

            return this;
        },

        /**
         * 清空并且释放Storage
         */
        dispose: function () {
            this._renderList =
            this._roots = null;
        },

        displayableSortFunc: shapeCompareFunc
    };

    return Storage;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * 动画主类, 调度和管理所有动画控制器
 *
 * @module zrender/animation/Animation
 * @author pissang(https://github.com/pissang)
 */
// TODO Additive animation
// http://iosoteric.com/additive-animations-animatewithduration-in-ios-8/
// https://developer.apple.com/videos/wwdc2014/#236
!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

    'use strict';

    var util = __webpack_require__(33);
    var Dispatcher = __webpack_require__(217).Dispatcher;

    var requestAnimationFrame = __webpack_require__(333);

    var Animator = __webpack_require__(332);
    /**
     * @typedef {Object} IZRenderStage
     * @property {Function} update
     */

    /**
     * @alias module:zrender/animation/Animation
     * @constructor
     * @param {Object} [options]
     * @param {Function} [options.onframe]
     * @param {IZRenderStage} [options.stage]
     * @example
     *     var animation = new Animation();
     *     var obj = {
     *         x: 100,
     *         y: 100
     *     };
     *     animation.animate(node.position)
     *         .when(1000, {
     *             x: 500,
     *             y: 500
     *         })
     *         .when(2000, {
     *             x: 100,
     *             y: 100
     *         })
     *         .start('spline');
     */
    var Animation = function (options) {

        options = options || {};

        this.stage = options.stage || {};

        this.onframe = options.onframe || function() {};

        // private properties
        this._clips = [];

        this._running = false;

        this._time;

        this._pausedTime;

        this._pauseStart;

        this._paused = false;

        Dispatcher.call(this);
    };

    Animation.prototype = {

        constructor: Animation,
        /**
         * 添加 clip
         * @param {module:zrender/animation/Clip} clip
         */
        addClip: function (clip) {
            this._clips.push(clip);
        },
        /**
         * 添加 animator
         * @param {module:zrender/animation/Animator} animator
         */
        addAnimator: function (animator) {
            animator.animation = this;
            var clips = animator.getClips();
            for (var i = 0; i < clips.length; i++) {
                this.addClip(clips[i]);
            }
        },
        /**
         * 删除动画片段
         * @param {module:zrender/animation/Clip} clip
         */
        removeClip: function(clip) {
            var idx = util.indexOf(this._clips, clip);
            if (idx >= 0) {
                this._clips.splice(idx, 1);
            }
        },

        /**
         * 删除动画片段
         * @param {module:zrender/animation/Animator} animator
         */
        removeAnimator: function (animator) {
            var clips = animator.getClips();
            for (var i = 0; i < clips.length; i++) {
                this.removeClip(clips[i]);
            }
            animator.animation = null;
        },

        _update: function() {

            var time = new Date().getTime() - this._pausedTime;
            var delta = time - this._time;
            var clips = this._clips;
            var len = clips.length;

            var deferredEvents = [];
            var deferredClips = [];
            for (var i = 0; i < len; i++) {
                var clip = clips[i];
                var e = clip.step(time, delta);
                // Throw out the events need to be called after
                // stage.update, like destroy
                if (e) {
                    deferredEvents.push(e);
                    deferredClips.push(clip);
                }
            }

            // Remove the finished clip
            for (var i = 0; i < len;) {
                if (clips[i]._needsRemove) {
                    clips[i] = clips[len - 1];
                    clips.pop();
                    len--;
                }
                else {
                    i++;
                }
            }

            len = deferredEvents.length;
            for (var i = 0; i < len; i++) {
                deferredClips[i].fire(deferredEvents[i]);
            }

            this._time = time;

            this.onframe(delta);

            this.trigger('frame', delta);

            if (this.stage.update) {
                this.stage.update();
            }
        },

        _startLoop: function () {
            var self = this;

            this._running = true;

            function step() {
                if (self._running) {

                    requestAnimationFrame(step);

                    !self._paused && self._update();
                }
            }

            requestAnimationFrame(step);
        },

        /**
         * 开始运行动画
         */
        start: function () {

            this._time = new Date().getTime();
            this._pausedTime = 0;

            this._startLoop();
        },
        /**
         * 停止运行动画
         */
        stop: function () {
            this._running = false;
        },

        /**
         * Pause
         */
        pause: function () {
            if (!this._paused) {
                this._pauseStart = new Date().getTime();
                this._paused = true;
            }
        },

        /**
         * Resume
         */
        resume: function () {
            if (this._paused) {
                this._pausedTime += (new Date().getTime()) - this._pauseStart;
                this._paused = false;
            }
        },

        /**
         * 清除所有动画片段
         */
        clear: function () {
            this._clips = [];
        },
        /**
         * 对一个目标创建一个animator对象，可以指定目标中的属性使用动画
         * @param  {Object} target
         * @param  {Object} options
         * @param  {boolean} [options.loop=false] 是否循环播放动画
         * @param  {Function} [options.getter=null]
         *         如果指定getter函数，会通过getter函数取属性值
         * @param  {Function} [options.setter=null]
         *         如果指定setter函数，会通过setter函数设置属性值
         * @return {module:zrender/animation/Animation~Animator}
         */
        // TODO Gap
        animate: function (target, options) {
            options = options || {};

            var animator = new Animator(
                target,
                options.loop,
                options.getter,
                options.setter
            );

            this.addAnimator(animator);

            return animator;
        }
    };

    util.mixin(Animation, Dispatcher);

    return Animation;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * 动画主控制器
 * @config target 动画对象，可以是数组，如果是数组的话会批量分发onframe等事件
 * @config life(1000) 动画时长
 * @config delay(0) 动画延迟时间
 * @config loop(true)
 * @config gap(0) 循环的间隔时间
 * @config onframe
 * @config easing(optional)
 * @config ondestroy(optional)
 * @config onrestart(optional)
 *
 * TODO pause
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

    var easingFuncs = __webpack_require__(764);

    function Clip(options) {

        this._target = options.target;

        // 生命周期
        this._life = options.life || 1000;
        // 延时
        this._delay = options.delay || 0;
        // 开始时间
        // this._startTime = new Date().getTime() + this._delay;// 单位毫秒
        this._initialized = false;

        // 是否循环
        this.loop = options.loop == null ? false : options.loop;

        this.gap = options.gap || 0;

        this.easing = options.easing || 'Linear';

        this.onframe = options.onframe;
        this.ondestroy = options.ondestroy;
        this.onrestart = options.onrestart;

        this._pausedTime = 0;
        this._paused = false;
    }

    Clip.prototype = {

        constructor: Clip,

        step: function (globalTime, deltaTime) {
            // Set startTime on first step, or _startTime may has milleseconds different between clips
            // PENDING
            if (!this._initialized) {
                this._startTime = globalTime + this._delay;
                this._initialized = true;
            }

            if (this._paused) {
                this._pausedTime += deltaTime;
                return;
            }

            var percent = (globalTime - this._startTime - this._pausedTime) / this._life;

            // 还没开始
            if (percent < 0) {
                return;
            }

            percent = Math.min(percent, 1);

            var easing = this.easing;
            var easingFunc = typeof easing == 'string' ? easingFuncs[easing] : easing;
            var schedule = typeof easingFunc === 'function'
                ? easingFunc(percent)
                : percent;

            this.fire('frame', schedule);

            // 结束
            if (percent == 1) {
                if (this.loop) {
                    this.restart (globalTime);
                    // 重新开始周期
                    // 抛出而不是直接调用事件直到 stage.update 后再统一调用这些事件
                    return 'restart';
                }

                // 动画完成将这个控制器标识为待删除
                // 在Animation.update中进行批量删除
                this._needsRemove = true;
                return 'destroy';
            }

            return null;
        },

        restart: function (globalTime) {
            var remainder = (globalTime - this._startTime - this._pausedTime) % this._life;
            this._startTime = globalTime - remainder + this.gap;
            this._pausedTime = 0;

            this._needsRemove = false;
        },

        fire: function (eventType, arg) {
            eventType = 'on' + eventType;
            if (this[eventType]) {
                this[eventType](this._target, arg);
            }
        },

        pause: function () {
            this._paused = true;
        },

        resume: function () {
            this._paused = false;
        }
    };

    return Clip;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * 缓动代码来自 https://github.com/sole/tween.js/blob/master/src/Tween.js
 * @see http://sole.github.io/tween.js/examples/03_graphs.html
 * @exports zrender/animation/easing
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    var easing = {
        /**
        * @param {number} k
        * @return {number}
        */
        linear: function (k) {
            return k;
        },

        /**
        * @param {number} k
        * @return {number}
        */
        quadraticIn: function (k) {
            return k * k;
        },
        /**
        * @param {number} k
        * @return {number}
        */
        quadraticOut: function (k) {
            return k * (2 - k);
        },
        /**
        * @param {number} k
        * @return {number}
        */
        quadraticInOut: function (k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k;
            }
            return -0.5 * (--k * (k - 2) - 1);
        },

        // 三次方的缓动（t^3）
        /**
        * @param {number} k
        * @return {number}
        */
        cubicIn: function (k) {
            return k * k * k;
        },
        /**
        * @param {number} k
        * @return {number}
        */
        cubicOut: function (k) {
            return --k * k * k + 1;
        },
        /**
        * @param {number} k
        * @return {number}
        */
        cubicInOut: function (k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k * k;
            }
            return 0.5 * ((k -= 2) * k * k + 2);
        },

        // 四次方的缓动（t^4）
        /**
        * @param {number} k
        * @return {number}
        */
        quarticIn: function (k) {
            return k * k * k * k;
        },
        /**
        * @param {number} k
        * @return {number}
        */
        quarticOut: function (k) {
            return 1 - (--k * k * k * k);
        },
        /**
        * @param {number} k
        * @return {number}
        */
        quarticInOut: function (k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k * k * k;
            }
            return -0.5 * ((k -= 2) * k * k * k - 2);
        },

        // 五次方的缓动（t^5）
        /**
        * @param {number} k
        * @return {number}
        */
        quinticIn: function (k) {
            return k * k * k * k * k;
        },
        /**
        * @param {number} k
        * @return {number}
        */
        quinticOut: function (k) {
            return --k * k * k * k * k + 1;
        },
        /**
        * @param {number} k
        * @return {number}
        */
        quinticInOut: function (k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k * k * k * k;
            }
            return 0.5 * ((k -= 2) * k * k * k * k + 2);
        },

        // 正弦曲线的缓动（sin(t)）
        /**
        * @param {number} k
        * @return {number}
        */
        sinusoidalIn: function (k) {
            return 1 - Math.cos(k * Math.PI / 2);
        },
        /**
        * @param {number} k
        * @return {number}
        */
        sinusoidalOut: function (k) {
            return Math.sin(k * Math.PI / 2);
        },
        /**
        * @param {number} k
        * @return {number}
        */
        sinusoidalInOut: function (k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
        },

        // 指数曲线的缓动（2^t）
        /**
        * @param {number} k
        * @return {number}
        */
        exponentialIn: function (k) {
            return k === 0 ? 0 : Math.pow(1024, k - 1);
        },
        /**
        * @param {number} k
        * @return {number}
        */
        exponentialOut: function (k) {
            return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
        },
        /**
        * @param {number} k
        * @return {number}
        */
        exponentialInOut: function (k) {
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            if ((k *= 2) < 1) {
                return 0.5 * Math.pow(1024, k - 1);
            }
            return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
        },

        // 圆形曲线的缓动（sqrt(1-t^2)）
        /**
        * @param {number} k
        * @return {number}
        */
        circularIn: function (k) {
            return 1 - Math.sqrt(1 - k * k);
        },
        /**
        * @param {number} k
        * @return {number}
        */
        circularOut: function (k) {
            return Math.sqrt(1 - (--k * k));
        },
        /**
        * @param {number} k
        * @return {number}
        */
        circularInOut: function (k) {
            if ((k *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - k * k) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
        },

        // 创建类似于弹簧在停止前来回振荡的动画
        /**
        * @param {number} k
        * @return {number}
        */
        elasticIn: function (k) {
            var s;
            var a = 0.1;
            var p = 0.4;
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            if (!a || a < 1) {
                a = 1; s = p / 4;
            }
            else {
                s = p * Math.asin(1 / a) / (2 * Math.PI);
            }
            return -(a * Math.pow(2, 10 * (k -= 1)) *
                        Math.sin((k - s) * (2 * Math.PI) / p));
        },
        /**
        * @param {number} k
        * @return {number}
        */
        elasticOut: function (k) {
            var s;
            var a = 0.1;
            var p = 0.4;
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            if (!a || a < 1) {
                a = 1; s = p / 4;
            }
            else {
                s = p * Math.asin(1 / a) / (2 * Math.PI);
            }
            return (a * Math.pow(2, -10 * k) *
                    Math.sin((k - s) * (2 * Math.PI) / p) + 1);
        },
        /**
        * @param {number} k
        * @return {number}
        */
        elasticInOut: function (k) {
            var s;
            var a = 0.1;
            var p = 0.4;
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            if (!a || a < 1) {
                a = 1; s = p / 4;
            }
            else {
                s = p * Math.asin(1 / a) / (2 * Math.PI);
            }
            if ((k *= 2) < 1) {
                return -0.5 * (a * Math.pow(2, 10 * (k -= 1))
                    * Math.sin((k - s) * (2 * Math.PI) / p));
            }
            return a * Math.pow(2, -10 * (k -= 1))
                    * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;

        },

        // 在某一动画开始沿指示的路径进行动画处理前稍稍收回该动画的移动
        /**
        * @param {number} k
        * @return {number}
        */
        backIn: function (k) {
            var s = 1.70158;
            return k * k * ((s + 1) * k - s);
        },
        /**
        * @param {number} k
        * @return {number}
        */
        backOut: function (k) {
            var s = 1.70158;
            return --k * k * ((s + 1) * k + s) + 1;
        },
        /**
        * @param {number} k
        * @return {number}
        */
        backInOut: function (k) {
            var s = 1.70158 * 1.525;
            if ((k *= 2) < 1) {
                return 0.5 * (k * k * ((s + 1) * k - s));
            }
            return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
        },

        // 创建弹跳效果
        /**
        * @param {number} k
        * @return {number}
        */
        bounceIn: function (k) {
            return 1 - easing.bounceOut(1 - k);
        },
        /**
        * @param {number} k
        * @return {number}
        */
        bounceOut: function (k) {
            if (k < (1 / 2.75)) {
                return 7.5625 * k * k;
            }
            else if (k < (2 / 2.75)) {
                return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
            }
            else if (k < (2.5 / 2.75)) {
                return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
            }
            else {
                return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
            }
        },
        /**
        * @param {number} k
        * @return {number}
        */
        bounceInOut: function (k) {
            if (k < 0.5) {
                return easing.bounceIn(k * 2) * 0.5;
            }
            return easing.bounceOut(k * 2 - 1) * 0.5 + 0.5;
        }
    };

    return easing;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));



/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var normalizeRadian = __webpack_require__(334).normalizeRadian;
    var PI2 = Math.PI * 2;

    return {
        /**
         * 圆弧描边包含判断
         * @param  {number}  cx
         * @param  {number}  cy
         * @param  {number}  r
         * @param  {number}  startAngle
         * @param  {number}  endAngle
         * @param  {boolean}  anticlockwise
         * @param  {number} lineWidth
         * @param  {number}  x
         * @param  {number}  y
         * @return {Boolean}
         */
        containStroke: function (
            cx, cy, r, startAngle, endAngle, anticlockwise,
            lineWidth, x, y
        ) {

            if (lineWidth === 0) {
                return false;
            }
            var _l = lineWidth;

            x -= cx;
            y -= cy;
            var d = Math.sqrt(x * x + y * y);

            if ((d - _l > r) || (d + _l < r)) {
                return false;
            }
            if (Math.abs(startAngle - endAngle) % PI2 < 1e-4) {
                // Is a circle
                return true;
            }
            if (anticlockwise) {
                var tmp = startAngle;
                startAngle = normalizeRadian(endAngle);
                endAngle = normalizeRadian(tmp);
            } else {
                startAngle = normalizeRadian(startAngle);
                endAngle = normalizeRadian(endAngle);
            }
            if (startAngle > endAngle) {
                endAngle += PI2;
            }

            var angle = Math.atan2(y, x);
            if (angle < 0) {
                angle += PI2;
            }
            return (angle >= startAngle && angle <= endAngle)
                || (angle + PI2 >= startAngle && angle + PI2 <= endAngle);
        }
    };
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var curve = __webpack_require__(91);

    return {
        /**
         * 三次贝塞尔曲线描边包含判断
         * @param  {number}  x0
         * @param  {number}  y0
         * @param  {number}  x1
         * @param  {number}  y1
         * @param  {number}  x2
         * @param  {number}  y2
         * @param  {number}  x3
         * @param  {number}  y3
         * @param  {number}  lineWidth
         * @param  {number}  x
         * @param  {number}  y
         * @return {boolean}
         */
        containStroke: function(x0, y0, x1, y1, x2, y2, x3, y3, lineWidth, x, y) {
            if (lineWidth === 0) {
                return false;
            }
            var _l = lineWidth;
            // Quick reject
            if (
                (y > y0 + _l && y > y1 + _l && y > y2 + _l && y > y3 + _l)
                || (y < y0 - _l && y < y1 - _l && y < y2 - _l && y < y3 - _l)
                || (x > x0 + _l && x > x1 + _l && x > x2 + _l && x > x3 + _l)
                || (x < x0 - _l && x < x1 - _l && x < x2 - _l && x < x3 - _l)
            ) {
                return false;
            }
            var d = curve.cubicProjectPoint(
                x0, y0, x1, y1, x2, y2, x3, y3,
                x, y, null
            );
            return d <= _l / 2;
        }
    };
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return {
        /**
         * 线段包含判断
         * @param  {number}  x0
         * @param  {number}  y0
         * @param  {number}  x1
         * @param  {number}  y1
         * @param  {number}  lineWidth
         * @param  {number}  x
         * @param  {number}  y
         * @return {boolean}
         */
        containStroke: function (x0, y0, x1, y1, lineWidth, x, y) {
            if (lineWidth === 0) {
                return false;
            }
            var _l = lineWidth;
            var _a = 0;
            var _b = x0;
            // Quick reject
            if (
                (y > y0 + _l && y > y1 + _l)
                || (y < y0 - _l && y < y1 - _l)
                || (x > x0 + _l && x > x1 + _l)
                || (x < x0 - _l && x < x1 - _l)
            ) {
                return false;
            }

            if (x0 !== x1) {
                _a = (y0 - y1) / (x0 - x1);
                _b = (x0 * y1 - x1 * y0) / (x0 - x1) ;
            }
            else {
                return Math.abs(x - x0) <= _l / 2;
            }
            var tmp = _a * x - y + _b;
            var _s = tmp * tmp / (_a * _a + 1);
            return _s <= _l / 2 * _l / 2;
        }
    };
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    'use strict';

    var CMD = __webpack_require__(153).CMD;
    var line = __webpack_require__(767);
    var cubic = __webpack_require__(766);
    var quadratic = __webpack_require__(769);
    var arc = __webpack_require__(765);
    var normalizeRadian = __webpack_require__(334).normalizeRadian;
    var curve = __webpack_require__(91);

    var windingLine = __webpack_require__(771);

    var containStroke = line.containStroke;

    var PI2 = Math.PI * 2;

    var EPSILON = 1e-4;

    function isAroundEqual(a, b) {
        return Math.abs(a - b) < EPSILON;
    }

    // 临时数组
    var roots = [-1, -1, -1];
    var extrema = [-1, -1];

    function swapExtrema() {
        var tmp = extrema[0];
        extrema[0] = extrema[1];
        extrema[1] = tmp;
    }

    function windingCubic(x0, y0, x1, y1, x2, y2, x3, y3, x, y) {
        // Quick reject
        if (
            (y > y0 && y > y1 && y > y2 && y > y3)
            || (y < y0 && y < y1 && y < y2 && y < y3)
        ) {
            return 0;
        }
        var nRoots = curve.cubicRootAt(y0, y1, y2, y3, y, roots);
        if (nRoots === 0) {
            return 0;
        }
        else {
            var w = 0;
            var nExtrema = -1;
            var y0_, y1_;
            for (var i = 0; i < nRoots; i++) {
                var t = roots[i];

                // Avoid winding error when intersection point is the connect point of two line of polygon
                var unit = (t === 0 || t === 1) ? 0.5 : 1;

                var x_ = curve.cubicAt(x0, x1, x2, x3, t);
                if (x_ < x) { // Quick reject
                    continue;
                }
                if (nExtrema < 0) {
                    nExtrema = curve.cubicExtrema(y0, y1, y2, y3, extrema);
                    if (extrema[1] < extrema[0] && nExtrema > 1) {
                        swapExtrema();
                    }
                    y0_ = curve.cubicAt(y0, y1, y2, y3, extrema[0]);
                    if (nExtrema > 1) {
                        y1_ = curve.cubicAt(y0, y1, y2, y3, extrema[1]);
                    }
                }
                if (nExtrema == 2) {
                    // 分成三段单调函数
                    if (t < extrema[0]) {
                        w += y0_ < y0 ? unit : -unit;
                    }
                    else if (t < extrema[1]) {
                        w += y1_ < y0_ ? unit : -unit;
                    }
                    else {
                        w += y3 < y1_ ? unit : -unit;
                    }
                }
                else {
                    // 分成两段单调函数
                    if (t < extrema[0]) {
                        w += y0_ < y0 ? unit : -unit;
                    }
                    else {
                        w += y3 < y0_ ? unit : -unit;
                    }
                }
            }
            return w;
        }
    }

    function windingQuadratic(x0, y0, x1, y1, x2, y2, x, y) {
        // Quick reject
        if (
            (y > y0 && y > y1 && y > y2)
            || (y < y0 && y < y1 && y < y2)
        ) {
            return 0;
        }
        var nRoots = curve.quadraticRootAt(y0, y1, y2, y, roots);
        if (nRoots === 0) {
            return 0;
        }
        else {
            var t = curve.quadraticExtremum(y0, y1, y2);
            if (t >= 0 && t <= 1) {
                var w = 0;
                var y_ = curve.quadraticAt(y0, y1, y2, t);
                for (var i = 0; i < nRoots; i++) {
                    // Remove one endpoint.
                    var unit = (roots[i] === 0 || roots[i] === 1) ? 0.5 : 1;

                    var x_ = curve.quadraticAt(x0, x1, x2, roots[i]);
                    if (x_ < x) {   // Quick reject
                        continue;
                    }
                    if (roots[i] < t) {
                        w += y_ < y0 ? unit : -unit;
                    }
                    else {
                        w += y2 < y_ ? unit : -unit;
                    }
                }
                return w;
            }
            else {
                // Remove one endpoint.
                var unit = (roots[0] === 0 || roots[0] === 1) ? 0.5 : 1;

                var x_ = curve.quadraticAt(x0, x1, x2, roots[0]);
                if (x_ < x) {   // Quick reject
                    return 0;
                }
                return y2 < y0 ? unit : -unit;
            }
        }
    }

    // TODO
    // Arc 旋转
    function windingArc(
        cx, cy, r, startAngle, endAngle, anticlockwise, x, y
    ) {
        y -= cy;
        if (y > r || y < -r) {
            return 0;
        }
        var tmp = Math.sqrt(r * r - y * y);
        roots[0] = -tmp;
        roots[1] = tmp;

        var diff = Math.abs(startAngle - endAngle);
        if (diff < 1e-4) {
            return 0;
        }
        if (diff % PI2 < 1e-4) {
            // Is a circle
            startAngle = 0;
            endAngle = PI2;
            var dir = anticlockwise ? 1 : -1;
            if (x >= roots[0] + cx && x <= roots[1] + cx) {
                return dir;
            } else {
                return 0;
            }
        }

        if (anticlockwise) {
            var tmp = startAngle;
            startAngle = normalizeRadian(endAngle);
            endAngle = normalizeRadian(tmp);
        }
        else {
            startAngle = normalizeRadian(startAngle);
            endAngle = normalizeRadian(endAngle);
        }
        if (startAngle > endAngle) {
            endAngle += PI2;
        }

        var w = 0;
        for (var i = 0; i < 2; i++) {
            var x_ = roots[i];
            if (x_ + cx > x) {
                var angle = Math.atan2(y, x_);
                var dir = anticlockwise ? 1 : -1;
                if (angle < 0) {
                    angle = PI2 + angle;
                }
                if (
                    (angle >= startAngle && angle <= endAngle)
                    || (angle + PI2 >= startAngle && angle + PI2 <= endAngle)
                ) {
                    if (angle > Math.PI / 2 && angle < Math.PI * 1.5) {
                        dir = -dir;
                    }
                    w += dir;
                }
            }
        }
        return w;
    }

    function containPath(data, lineWidth, isStroke, x, y) {
        var w = 0;
        var xi = 0;
        var yi = 0;
        var x0 = 0;
        var y0 = 0;

        for (var i = 0; i < data.length;) {
            var cmd = data[i++];
            // Begin a new subpath
            if (cmd === CMD.M && i > 1) {
                // Close previous subpath
                if (!isStroke) {
                    w += windingLine(xi, yi, x0, y0, x, y);
                }
                // 如果被任何一个 subpath 包含
                // if (w !== 0) {
                //     return true;
                // }
            }

            if (i == 1) {
                // 如果第一个命令是 L, C, Q
                // 则 previous point 同绘制命令的第一个 point
                //
                // 第一个命令为 Arc 的情况下会在后面特殊处理
                xi = data[i];
                yi = data[i + 1];

                x0 = xi;
                y0 = yi;
            }

            switch (cmd) {
                case CMD.M:
                    // moveTo 命令重新创建一个新的 subpath, 并且更新新的起点
                    // 在 closePath 的时候使用
                    x0 = data[i++];
                    y0 = data[i++];
                    xi = x0;
                    yi = y0;
                    break;
                case CMD.L:
                    if (isStroke) {
                        if (containStroke(xi, yi, data[i], data[i + 1], lineWidth, x, y)) {
                            return true;
                        }
                    }
                    else {
                        // NOTE 在第一个命令为 L, C, Q 的时候会计算出 NaN
                        w += windingLine(xi, yi, data[i], data[i + 1], x, y) || 0;
                    }
                    xi = data[i++];
                    yi = data[i++];
                    break;
                case CMD.C:
                    if (isStroke) {
                        if (cubic.containStroke(xi, yi,
                            data[i++], data[i++], data[i++], data[i++], data[i], data[i + 1],
                            lineWidth, x, y
                        )) {
                            return true;
                        }
                    }
                    else {
                        w += windingCubic(
                            xi, yi,
                            data[i++], data[i++], data[i++], data[i++], data[i], data[i + 1],
                            x, y
                        ) || 0;
                    }
                    xi = data[i++];
                    yi = data[i++];
                    break;
                case CMD.Q:
                    if (isStroke) {
                        if (quadratic.containStroke(xi, yi,
                            data[i++], data[i++], data[i], data[i + 1],
                            lineWidth, x, y
                        )) {
                            return true;
                        }
                    }
                    else {
                        w += windingQuadratic(
                            xi, yi,
                            data[i++], data[i++], data[i], data[i + 1],
                            x, y
                        ) || 0;
                    }
                    xi = data[i++];
                    yi = data[i++];
                    break;
                case CMD.A:
                    // TODO Arc 判断的开销比较大
                    var cx = data[i++];
                    var cy = data[i++];
                    var rx = data[i++];
                    var ry = data[i++];
                    var theta = data[i++];
                    var dTheta = data[i++];
                    // TODO Arc 旋转
                    var psi = data[i++];
                    var anticlockwise = 1 - data[i++];
                    var x1 = Math.cos(theta) * rx + cx;
                    var y1 = Math.sin(theta) * ry + cy;
                    // 不是直接使用 arc 命令
                    if (i > 1) {
                        w += windingLine(xi, yi, x1, y1, x, y);
                    }
                    else {
                        // 第一个命令起点还未定义
                        x0 = x1;
                        y0 = y1;
                    }
                    // zr 使用scale来模拟椭圆, 这里也对x做一定的缩放
                    var _x = (x - cx) * ry / rx + cx;
                    if (isStroke) {
                        if (arc.containStroke(
                            cx, cy, ry, theta, theta + dTheta, anticlockwise,
                            lineWidth, _x, y
                        )) {
                            return true;
                        }
                    }
                    else {
                        w += windingArc(
                            cx, cy, ry, theta, theta + dTheta, anticlockwise,
                            _x, y
                        );
                    }
                    xi = Math.cos(theta + dTheta) * rx + cx;
                    yi = Math.sin(theta + dTheta) * ry + cy;
                    break;
                case CMD.R:
                    x0 = xi = data[i++];
                    y0 = yi = data[i++];
                    var width = data[i++];
                    var height = data[i++];
                    var x1 = x0 + width;
                    var y1 = y0 + height;
                    if (isStroke) {
                        if (containStroke(x0, y0, x1, y0, lineWidth, x, y)
                          || containStroke(x1, y0, x1, y1, lineWidth, x, y)
                          || containStroke(x1, y1, x0, y1, lineWidth, x, y)
                          || containStroke(x0, y1, x0, y0, lineWidth, x, y)
                        ) {
                            return true;
                        }
                    }
                    else {
                        // FIXME Clockwise ?
                        w += windingLine(x1, y0, x1, y1, x, y);
                        w += windingLine(x0, y1, x0, y0, x, y);
                    }
                    break;
                case CMD.Z:
                    if (isStroke) {
                        if (containStroke(
                            xi, yi, x0, y0, lineWidth, x, y
                        )) {
                            return true;
                        }
                    }
                    else {
                        // Close a subpath
                        w += windingLine(xi, yi, x0, y0, x, y);
                        // 如果被任何一个 subpath 包含
                        // FIXME subpaths may overlap
                        // if (w !== 0) {
                        //     return true;
                        // }
                    }
                    xi = x0;
                    yi = y0;
                    break;
            }
        }
        if (!isStroke && !isAroundEqual(yi, y0)) {
            w += windingLine(xi, yi, x0, y0, x, y) || 0;
        }
        return w !== 0;
    }

    return {
        contain: function (pathData, x, y) {
            return containPath(pathData, 0, false, x, y);
        },

        containStroke: function (pathData, lineWidth, x, y) {
            return containPath(pathData, lineWidth, true, x, y);
        }
    };
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var curve = __webpack_require__(91);

    return {
        /**
         * 二次贝塞尔曲线描边包含判断
         * @param  {number}  x0
         * @param  {number}  y0
         * @param  {number}  x1
         * @param  {number}  y1
         * @param  {number}  x2
         * @param  {number}  y2
         * @param  {number}  lineWidth
         * @param  {number}  x
         * @param  {number}  y
         * @return {boolean}
         */
        containStroke: function (x0, y0, x1, y1, x2, y2, lineWidth, x, y) {
            if (lineWidth === 0) {
                return false;
            }
            var _l = lineWidth;
            // Quick reject
            if (
                (y > y0 + _l && y > y1 + _l && y > y2 + _l)
                || (y < y0 - _l && y < y1 - _l && y < y2 - _l)
                || (x > x0 + _l && x > x1 + _l && x > x2 + _l)
                || (x < x0 - _l && x < x1 - _l && x < x2 - _l)
            ) {
                return false;
            }
            var d = curve.quadraticProjectPoint(
                x0, y0, x1, y1, x2, y2,
                x, y, null
            );
            return d <= _l / 2;
        }
    };
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var textWidthCache = {};
    var textWidthCacheCounter = 0;
    var TEXT_CACHE_MAX = 5000;

    var util = __webpack_require__(33);
    var BoundingRect = __webpack_require__(90);
    var retrieve = util.retrieve;

    function getTextWidth(text, textFont) {
        var key = text + ':' + textFont;
        if (textWidthCache[key]) {
            return textWidthCache[key];
        }

        var textLines = (text + '').split('\n');
        var width = 0;

        for (var i = 0, l = textLines.length; i < l; i++) {
            // measureText 可以被覆盖以兼容不支持 Canvas 的环境
            width = Math.max(textContain.measureText(textLines[i], textFont).width, width);
        }

        if (textWidthCacheCounter > TEXT_CACHE_MAX) {
            textWidthCacheCounter = 0;
            textWidthCache = {};
        }
        textWidthCacheCounter++;
        textWidthCache[key] = width;

        return width;
    }

    function getTextRect(text, textFont, textAlign, textBaseline) {
        var textLineLen = ((text || '') + '').split('\n').length;

        var width = getTextWidth(text, textFont);
        // FIXME 高度计算比较粗暴
        var lineHeight = getTextWidth('国', textFont);
        var height = textLineLen * lineHeight;

        var rect = new BoundingRect(0, 0, width, height);
        // Text has a special line height property
        rect.lineHeight = lineHeight;

        switch (textBaseline) {
            case 'bottom':
            case 'alphabetic':
                rect.y -= lineHeight;
                break;
            case 'middle':
                rect.y -= lineHeight / 2;
                break;
            // case 'hanging':
            // case 'top':
        }

        // FIXME Right to left language
        switch (textAlign) {
            case 'end':
            case 'right':
                rect.x -= rect.width;
                break;
            case 'center':
                rect.x -= rect.width / 2;
                break;
            // case 'start':
            // case 'left':
        }

        return rect;
    }

    function adjustTextPositionOnRect(textPosition, rect, textRect, distance) {

        var x = rect.x;
        var y = rect.y;

        var height = rect.height;
        var width = rect.width;

        var textHeight = textRect.height;

        var lineHeight = textRect.lineHeight;
        var halfHeight = height / 2 - textHeight / 2 + lineHeight;

        var textAlign = 'left';

        switch (textPosition) {
            case 'left':
                x -= distance;
                y += halfHeight;
                textAlign = 'right';
                break;
            case 'right':
                x += distance + width;
                y += halfHeight;
                textAlign = 'left';
                break;
            case 'top':
                x += width / 2;
                y -= distance + textHeight - lineHeight;
                textAlign = 'center';
                break;
            case 'bottom':
                x += width / 2;
                y += height + distance + lineHeight;
                textAlign = 'center';
                break;
            case 'inside':
                x += width / 2;
                y += halfHeight;
                textAlign = 'center';
                break;
            case 'insideLeft':
                x += distance;
                y += halfHeight;
                textAlign = 'left';
                break;
            case 'insideRight':
                x += width - distance;
                y += halfHeight;
                textAlign = 'right';
                break;
            case 'insideTop':
                x += width / 2;
                y += distance + lineHeight;
                textAlign = 'center';
                break;
            case 'insideBottom':
                x += width / 2;
                y += height - textHeight - distance + lineHeight;
                textAlign = 'center';
                break;
            case 'insideTopLeft':
                x += distance;
                y += distance + lineHeight;
                textAlign = 'left';
                break;
            case 'insideTopRight':
                x += width - distance;
                y += distance + lineHeight;
                textAlign = 'right';
                break;
            case 'insideBottomLeft':
                x += distance;
                y += height - textHeight - distance + lineHeight;
                break;
            case 'insideBottomRight':
                x += width - distance;
                y += height - textHeight - distance + lineHeight;
                textAlign = 'right';
                break;
        }

        return {
            x: x,
            y: y,
            textAlign: textAlign,
            textBaseline: 'alphabetic'
        };
    }

    /**
     * Show ellipsis if overflow.
     *
     * @param  {string} text
     * @param  {string} containerWidth
     * @param  {string} textFont
     * @param  {number} [ellipsis='...']
     * @param  {Object} [options]
     * @param  {number} [options.maxIterations=3]
     * @param  {number} [options.minChar=0] If truncate result are less
     *                  then minChar, ellipsis will not show, which is
     *                  better for user hint in some cases.
     * @param  {number} [options.placeholder=''] When all truncated, use the placeholder.
     * @return {string}
     */
    function truncateText(text, containerWidth, textFont, ellipsis, options) {
        if (!containerWidth) {
            return '';
        }

        options = options || {};

        ellipsis = retrieve(ellipsis, '...');
        var maxIterations = retrieve(options.maxIterations, 2);
        var minChar = retrieve(options.minChar, 0);
        // FIXME
        // Other languages?
        var cnCharWidth = getTextWidth('国', textFont);
        // FIXME
        // Consider proportional font?
        var ascCharWidth = getTextWidth('a', textFont);
        var placeholder = retrieve(options.placeholder, '');

        // Example 1: minChar: 3, text: 'asdfzxcv', truncate result: 'asdf', but not: 'a...'.
        // Example 2: minChar: 3, text: '维度', truncate result: '维', but not: '...'.
        var contentWidth = containerWidth = Math.max(0, containerWidth - 1); // Reserve some gap.
        for (var i = 0; i < minChar && contentWidth >= ascCharWidth; i++) {
            contentWidth -= ascCharWidth;
        }

        var ellipsisWidth = getTextWidth(ellipsis);
        if (ellipsisWidth > contentWidth) {
            ellipsis = '';
            ellipsisWidth = 0;
        }

        contentWidth = containerWidth - ellipsisWidth;

        var textLines = (text + '').split('\n');

        for (var i = 0, len = textLines.length; i < len; i++) {
            var textLine = textLines[i];
            var lineWidth = getTextWidth(textLine, textFont);

            if (lineWidth <= containerWidth) {
                continue;
            }

            for (var j = 0;; j++) {
                if (lineWidth <= contentWidth || j >= maxIterations) {
                    textLine += ellipsis;
                    break;
                }

                var subLength = j === 0
                    ? estimateLength(textLine, contentWidth, ascCharWidth, cnCharWidth)
                    : lineWidth > 0
                    ? Math.floor(textLine.length * contentWidth / lineWidth)
                    : 0;

                textLine = textLine.substr(0, subLength);
                lineWidth = getTextWidth(textLine, textFont);
            }

            if (textLine === '') {
                textLine = placeholder;
            }

            textLines[i] = textLine;
        }

        return textLines.join('\n');
    }

    function estimateLength(text, contentWidth, ascCharWidth, cnCharWidth) {
        var width = 0;
        var i = 0;
        for (var len = text.length; i < len && width < contentWidth; i++) {
            var charCode = text.charCodeAt(i);
            width += (0 <= charCode && charCode <= 127) ? ascCharWidth : cnCharWidth;
        }
        return i;
    }

    var textContain = {

        getWidth: getTextWidth,

        getBoundingRect: getTextRect,

        adjustTextPositionOnRect: adjustTextPositionOnRect,

        truncateText: truncateText,

        measureText: function (text, textFont) {
            var ctx = util.getContext();
            ctx.font = textFont || '12px sans-serif';
            return ctx.measureText(text);
        }
    };

    return textContain;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return function windingLine(x0, y0, x1, y1, x, y) {
        if ((y > y0 && y > y1) || (y < y0 && y < y1)) {
            return 0;
        }
        // Ignore horizontal line
        if (y1 === y0) {
            return 0;
        }
        var dir = y1 < y0 ? 1 : -1;
        var t = (y - y0) / (y1 - y0);

        // Avoid winding error when intersection point is the connect point of two line of polygon
        if (t === 1 || t === 0) {
            dir = y1 < y0 ? 0.5 : -0.5;
        }

        var x_ = t * (x1 - x0) + x0;

        return x_ > x ? dir : 0;
    };
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Only implements needed gestures for mobile.
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

    'use strict';

    var eventUtil = __webpack_require__(217);

    var GestureMgr = function () {

        /**
         * @private
         * @type {Array.<Object>}
         */
        this._track = [];
    };

    GestureMgr.prototype = {

        constructor: GestureMgr,

        recognize: function (event, target, root) {
            this._doTrack(event, target, root);
            return this._recognize(event);
        },

        clear: function () {
            this._track.length = 0;
            return this;
        },

        _doTrack: function (event, target, root) {
            var touches = event.touches;

            if (!touches) {
                return;
            }

            var trackItem = {
                points: [],
                touches: [],
                target: target,
                event: event
            };

            for (var i = 0, len = touches.length; i < len; i++) {
                var touch = touches[i];
                var pos = eventUtil.clientToLocal(root, touch, {});
                trackItem.points.push([pos.zrX, pos.zrY]);
                trackItem.touches.push(touch);
            }

            this._track.push(trackItem);
        },

        _recognize: function (event) {
            for (var eventName in recognizers) {
                if (recognizers.hasOwnProperty(eventName)) {
                    var gestureInfo = recognizers[eventName](this._track, event);
                    if (gestureInfo) {
                        return gestureInfo;
                    }
                }
            }
        }
    };

    function dist(pointPair) {
        var dx = pointPair[1][0] - pointPair[0][0];
        var dy = pointPair[1][1] - pointPair[0][1];

        return Math.sqrt(dx * dx + dy * dy);
    }

    function center(pointPair) {
        return [
            (pointPair[0][0] + pointPair[1][0]) / 2,
            (pointPair[0][1] + pointPair[1][1]) / 2
        ];
    }

    var recognizers = {

        pinch: function (track, event) {
            var trackLen = track.length;

            if (!trackLen) {
                return;
            }

            var pinchEnd = (track[trackLen - 1] || {}).points;
            var pinchPre = (track[trackLen - 2] || {}).points || pinchEnd;

            if (pinchPre
                && pinchPre.length > 1
                && pinchEnd
                && pinchEnd.length > 1
            ) {
                var pinchScale = dist(pinchEnd) / dist(pinchPre);
                !isFinite(pinchScale) && (pinchScale = 1);

                event.pinchScale = pinchScale;

                var pinchCenter = center(pinchEnd);
                event.pinchX = pinchCenter[0];
                event.pinchY = pinchCenter[1];

                return {
                    type: 'pinch',
                    target: track[0].target,
                    event: event
                };
            }
        }

        // Only pinch currently.
    };

    return GestureMgr;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @author Yi Shen(https://github.com/pissang)
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var vec2 = __webpack_require__(74);
    var curve = __webpack_require__(91);

    var bbox = {};
    var mathMin = Math.min;
    var mathMax = Math.max;
    var mathSin = Math.sin;
    var mathCos = Math.cos;

    var start = vec2.create();
    var end = vec2.create();
    var extremity = vec2.create();

    var PI2 = Math.PI * 2;
    /**
     * 从顶点数组中计算出最小包围盒，写入`min`和`max`中
     * @module zrender/core/bbox
     * @param {Array<Object>} points 顶点数组
     * @param {number} min
     * @param {number} max
     */
    bbox.fromPoints = function(points, min, max) {
        if (points.length === 0) {
            return;
        }
        var p = points[0];
        var left = p[0];
        var right = p[0];
        var top = p[1];
        var bottom = p[1];
        var i;

        for (i = 1; i < points.length; i++) {
            p = points[i];
            left = mathMin(left, p[0]);
            right = mathMax(right, p[0]);
            top = mathMin(top, p[1]);
            bottom = mathMax(bottom, p[1]);
        }

        min[0] = left;
        min[1] = top;
        max[0] = right;
        max[1] = bottom;
    };

    /**
     * @memberOf module:zrender/core/bbox
     * @param {number} x0
     * @param {number} y0
     * @param {number} x1
     * @param {number} y1
     * @param {Array.<number>} min
     * @param {Array.<number>} max
     */
    bbox.fromLine = function (x0, y0, x1, y1, min, max) {
        min[0] = mathMin(x0, x1);
        min[1] = mathMin(y0, y1);
        max[0] = mathMax(x0, x1);
        max[1] = mathMax(y0, y1);
    };

    var xDim = [];
    var yDim = [];
    /**
     * 从三阶贝塞尔曲线(p0, p1, p2, p3)中计算出最小包围盒，写入`min`和`max`中
     * @memberOf module:zrender/core/bbox
     * @param {number} x0
     * @param {number} y0
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     * @param {number} x3
     * @param {number} y3
     * @param {Array.<number>} min
     * @param {Array.<number>} max
     */
    bbox.fromCubic = function(
        x0, y0, x1, y1, x2, y2, x3, y3, min, max
    ) {
        var cubicExtrema = curve.cubicExtrema;
        var cubicAt = curve.cubicAt;
        var i;
        var n = cubicExtrema(x0, x1, x2, x3, xDim);
        min[0] = Infinity;
        min[1] = Infinity;
        max[0] = -Infinity;
        max[1] = -Infinity;

        for (i = 0; i < n; i++) {
            var x = cubicAt(x0, x1, x2, x3, xDim[i]);
            min[0] = mathMin(x, min[0]);
            max[0] = mathMax(x, max[0]);
        }
        n = cubicExtrema(y0, y1, y2, y3, yDim);
        for (i = 0; i < n; i++) {
            var y = cubicAt(y0, y1, y2, y3, yDim[i]);
            min[1] = mathMin(y, min[1]);
            max[1] = mathMax(y, max[1]);
        }

        min[0] = mathMin(x0, min[0]);
        max[0] = mathMax(x0, max[0]);
        min[0] = mathMin(x3, min[0]);
        max[0] = mathMax(x3, max[0]);

        min[1] = mathMin(y0, min[1]);
        max[1] = mathMax(y0, max[1]);
        min[1] = mathMin(y3, min[1]);
        max[1] = mathMax(y3, max[1]);
    };

    /**
     * 从二阶贝塞尔曲线(p0, p1, p2)中计算出最小包围盒，写入`min`和`max`中
     * @memberOf module:zrender/core/bbox
     * @param {number} x0
     * @param {number} y0
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     * @param {Array.<number>} min
     * @param {Array.<number>} max
     */
    bbox.fromQuadratic = function(x0, y0, x1, y1, x2, y2, min, max) {
        var quadraticExtremum = curve.quadraticExtremum;
        var quadraticAt = curve.quadraticAt;
        // Find extremities, where derivative in x dim or y dim is zero
        var tx =
            mathMax(
                mathMin(quadraticExtremum(x0, x1, x2), 1), 0
            );
        var ty =
            mathMax(
                mathMin(quadraticExtremum(y0, y1, y2), 1), 0
            );

        var x = quadraticAt(x0, x1, x2, tx);
        var y = quadraticAt(y0, y1, y2, ty);

        min[0] = mathMin(x0, x2, x);
        min[1] = mathMin(y0, y2, y);
        max[0] = mathMax(x0, x2, x);
        max[1] = mathMax(y0, y2, y);
    };

    /**
     * 从圆弧中计算出最小包围盒，写入`min`和`max`中
     * @method
     * @memberOf module:zrender/core/bbox
     * @param {number} x
     * @param {number} y
     * @param {number} rx
     * @param {number} ry
     * @param {number} startAngle
     * @param {number} endAngle
     * @param {number} anticlockwise
     * @param {Array.<number>} min
     * @param {Array.<number>} max
     */
    bbox.fromArc = function (
        x, y, rx, ry, startAngle, endAngle, anticlockwise, min, max
    ) {
        var vec2Min = vec2.min;
        var vec2Max = vec2.max;

        var diff = Math.abs(startAngle - endAngle);


        if (diff % PI2 < 1e-4 && diff > 1e-4) {
            // Is a circle
            min[0] = x - rx;
            min[1] = y - ry;
            max[0] = x + rx;
            max[1] = y + ry;
            return;
        }

        start[0] = mathCos(startAngle) * rx + x;
        start[1] = mathSin(startAngle) * ry + y;

        end[0] = mathCos(endAngle) * rx + x;
        end[1] = mathSin(endAngle) * ry + y;

        vec2Min(min, start, end);
        vec2Max(max, start, end);

        // Thresh to [0, Math.PI * 2]
        startAngle = startAngle % (PI2);
        if (startAngle < 0) {
            startAngle = startAngle + PI2;
        }
        endAngle = endAngle % (PI2);
        if (endAngle < 0) {
            endAngle = endAngle + PI2;
        }

        if (startAngle > endAngle && !anticlockwise) {
            endAngle += PI2;
        }
        else if (startAngle < endAngle && anticlockwise) {
            startAngle += PI2;
        }
        if (anticlockwise) {
            var tmp = endAngle;
            endAngle = startAngle;
            startAngle = tmp;
        }

        // var number = 0;
        // var step = (anticlockwise ? -Math.PI : Math.PI) / 2;
        for (var angle = 0; angle < endAngle; angle += Math.PI / 2) {
            if (angle > startAngle) {
                extremity[0] = mathCos(angle) * rx + x;
                extremity[1] = mathSin(angle) * ry + y;

                vec2Min(min, extremity, min);
                vec2Max(max, extremity, max);
            }
        }
    };

    return bbox;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var eventTool = __webpack_require__(217);
    var zrUtil = __webpack_require__(33);
    var Eventful = __webpack_require__(155);
    var env = __webpack_require__(154);
    var GestureMgr = __webpack_require__(772);

    var addEventListener = eventTool.addEventListener;
    var removeEventListener = eventTool.removeEventListener;
    var normalizeEvent = eventTool.normalizeEvent;

    var TOUCH_CLICK_DELAY = 300;

    var mouseHandlerNames = [
        'click', 'dblclick', 'mousewheel', 'mouseout',
        'mouseup', 'mousedown', 'mousemove', 'contextmenu'
    ];

    var touchHandlerNames = [
        'touchstart', 'touchend', 'touchmove'
    ];

    var pointerEventNames = {
        pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1
    };

    var pointerHandlerNames = zrUtil.map(mouseHandlerNames, function (name) {
        var nm = name.replace('mouse', 'pointer');
        return pointerEventNames[nm] ? nm : name;
    });

    function eventNameFix(name) {
        return (name === 'mousewheel' && env.browser.firefox) ? 'DOMMouseScroll' : name;
    }

    function processGesture(proxy, event, stage) {
        var gestureMgr = proxy._gestureMgr;

        stage === 'start' && gestureMgr.clear();

        var gestureInfo = gestureMgr.recognize(
            event,
            proxy.handler.findHover(event.zrX, event.zrY, null).target,
            proxy.dom
        );

        stage === 'end' && gestureMgr.clear();

        // Do not do any preventDefault here. Upper application do that if necessary.
        if (gestureInfo) {
            var type = gestureInfo.type;
            event.gestureEvent = type;

            proxy.handler.dispatchToElement({target: gestureInfo.target}, type, gestureInfo.event);
        }
    }

    // function onMSGestureChange(proxy, event) {
    //     if (event.translationX || event.translationY) {
    //         // mousemove is carried by MSGesture to reduce the sensitivity.
    //         proxy.handler.dispatchToElement(event.target, 'mousemove', event);
    //     }
    //     if (event.scale !== 1) {
    //         event.pinchX = event.offsetX;
    //         event.pinchY = event.offsetY;
    //         event.pinchScale = event.scale;
    //         proxy.handler.dispatchToElement(event.target, 'pinch', event);
    //     }
    // }

    /**
     * Prevent mouse event from being dispatched after Touch Events action
     * @see <https://github.com/deltakosh/handjs/blob/master/src/hand.base.js>
     * 1. Mobile browsers dispatch mouse events 300ms after touchend.
     * 2. Chrome for Android dispatch mousedown for long-touch about 650ms
     * Result: Blocking Mouse Events for 700ms.
     */
    function setTouchTimer(instance) {
        instance._touching = true;
        clearTimeout(instance._touchTimer);
        instance._touchTimer = setTimeout(function () {
            instance._touching = false;
        }, 700);
    }


    var domHandlers = {
        /**
         * Mouse move handler
         * @inner
         * @param {Event} event
         */
        mousemove: function (event) {
            event = normalizeEvent(this.dom, event);

            this.trigger('mousemove', event);
        },

        /**
         * Mouse out handler
         * @inner
         * @param {Event} event
         */
        mouseout: function (event) {
            event = normalizeEvent(this.dom, event);

            var element = event.toElement || event.relatedTarget;
            if (element != this.dom) {
                while (element && element.nodeType != 9) {
                    // 忽略包含在root中的dom引起的mouseOut
                    if (element === this.dom) {
                        return;
                    }

                    element = element.parentNode;
                }
            }

            this.trigger('mouseout', event);
        },

        /**
         * Touch开始响应函数
         * @inner
         * @param {Event} event
         */
        touchstart: function (event) {
            // Default mouse behaviour should not be disabled here.
            // For example, page may needs to be slided.
            event = normalizeEvent(this.dom, event);

            // Mark touch, which is useful in distinguish touch and
            // mouse event in upper applicatoin.
            event.zrByTouch = true;

            this._lastTouchMoment = new Date();

            processGesture(this, event, 'start');

            // In touch device, trigger `mousemove`(`mouseover`) should
            // be triggered, and must before `mousedown` triggered.
            domHandlers.mousemove.call(this, event);

            domHandlers.mousedown.call(this, event);

            setTouchTimer(this);
        },

        /**
         * Touch移动响应函数
         * @inner
         * @param {Event} event
         */
        touchmove: function (event) {

            event = normalizeEvent(this.dom, event);

            // Mark touch, which is useful in distinguish touch and
            // mouse event in upper applicatoin.
            event.zrByTouch = true;

            processGesture(this, event, 'change');

            // Mouse move should always be triggered no matter whether
            // there is gestrue event, because mouse move and pinch may
            // be used at the same time.
            domHandlers.mousemove.call(this, event);

            setTouchTimer(this);
        },

        /**
         * Touch结束响应函数
         * @inner
         * @param {Event} event
         */
        touchend: function (event) {

            event = normalizeEvent(this.dom, event);

            // Mark touch, which is useful in distinguish touch and
            // mouse event in upper applicatoin.
            event.zrByTouch = true;

            processGesture(this, event, 'end');

            domHandlers.mouseup.call(this, event);

            // Do not trigger `mouseout` here, in spite of `mousemove`(`mouseover`) is
            // triggered in `touchstart`. This seems to be illogical, but by this mechanism,
            // we can conveniently implement "hover style" in both PC and touch device just
            // by listening to `mouseover` to add "hover style" and listening to `mouseout`
            // to remove "hover style" on an element, without any additional code for
            // compatibility. (`mouseout` will not be triggered in `touchend`, so "hover
            // style" will remain for user view)

            // click event should always be triggered no matter whether
            // there is gestrue event. System click can not be prevented.
            if (+new Date() - this._lastTouchMoment < TOUCH_CLICK_DELAY) {
                domHandlers.click.call(this, event);
            }

            setTouchTimer(this);
        },

        pointerdown: function (event) {
            domHandlers.mousedown.call(this, event);

            // if (useMSGuesture(this, event)) {
            //     this._msGesture.addPointer(event.pointerId);
            // }
        },

        pointermove: function (event) {
            // FIXME
            // pointermove is so sensitive that it always triggered when
            // tap(click) on touch screen, which affect some judgement in
            // upper application. So, we dont support mousemove on MS touch
            // device yet.
            if (!isPointerFromTouch(event)) {
                domHandlers.mousemove.call(this, event);
            }
        },

        pointerup: function (event) {
            domHandlers.mouseup.call(this, event);
        },

        pointerout: function (event) {
            // pointerout will be triggered when tap on touch screen
            // (IE11+/Edge on MS Surface) after click event triggered,
            // which is inconsistent with the mousout behavior we defined
            // in touchend. So we unify them.
            // (check domHandlers.touchend for detailed explanation)
            if (!isPointerFromTouch(event)) {
                domHandlers.mouseout.call(this, event);
            }
        }
    };

    function isPointerFromTouch(event) {
        var pointerType = event.pointerType;
        return pointerType === 'pen' || pointerType === 'touch';
    }

    // function useMSGuesture(handlerProxy, event) {
    //     return isPointerFromTouch(event) && !!handlerProxy._msGesture;
    // }

    // Common handlers
    zrUtil.each(['click', 'mousedown', 'mouseup', 'mousewheel', 'dblclick', 'contextmenu'], function (name) {
        domHandlers[name] = function (event) {
            event = normalizeEvent(this.dom, event);
            this.trigger(name, event);
        };
    });

    /**
     * 为控制类实例初始化dom 事件处理函数
     *
     * @inner
     * @param {module:zrender/Handler} instance 控制类实例
     */
    function initDomHandler(instance) {
        zrUtil.each(touchHandlerNames, function (name) {
            instance._handlers[name] = zrUtil.bind(domHandlers[name], instance);
        });

        zrUtil.each(pointerHandlerNames, function (name) {
            instance._handlers[name] = zrUtil.bind(domHandlers[name], instance);
        });

        zrUtil.each(mouseHandlerNames, function (name) {
            instance._handlers[name] = makeMouseHandler(domHandlers[name], instance);
        });

        function makeMouseHandler(fn, instance) {
            return function () {
                if (instance._touching) {
                    return;
                }
                return fn.apply(instance, arguments);
            };
        }
    }


    function HandlerDomProxy(dom) {
        Eventful.call(this);

        this.dom = dom;

        /**
         * @private
         * @type {boolean}
         */
        this._touching = false;

        /**
         * @private
         * @type {number}
         */
        this._touchTimer;

        /**
         * @private
         * @type {module:zrender/core/GestureMgr}
         */
        this._gestureMgr = new GestureMgr();

        this._handlers = {};

        initDomHandler(this);

        if (env.pointerEventsSupported) { // Only IE11+/Edge
            // 1. On devices that both enable touch and mouse (e.g., MS Surface and lenovo X240),
            // IE11+/Edge do not trigger touch event, but trigger pointer event and mouse event
            // at the same time.
            // 2. On MS Surface, it probablely only trigger mousedown but no mouseup when tap on
            // screen, which do not occurs in pointer event.
            // So we use pointer event to both detect touch gesture and mouse behavior.
            mountHandlers(pointerHandlerNames, this);

            // FIXME
            // Note: MS Gesture require CSS touch-action set. But touch-action is not reliable,
            // which does not prevent defuault behavior occasionally (which may cause view port
            // zoomed in but use can not zoom it back). And event.preventDefault() does not work.
            // So we have to not to use MSGesture and not to support touchmove and pinch on MS
            // touch screen. And we only support click behavior on MS touch screen now.

            // MS Gesture Event is only supported on IE11+/Edge and on Windows 8+.
            // We dont support touch on IE on win7.
            // See <https://msdn.microsoft.com/en-us/library/dn433243(v=vs.85).aspx>
            // if (typeof MSGesture === 'function') {
            //     (this._msGesture = new MSGesture()).target = dom; // jshint ignore:line
            //     dom.addEventListener('MSGestureChange', onMSGestureChange);
            // }
        }
        else {
            if (env.touchEventsSupported) {
                mountHandlers(touchHandlerNames, this);
                // Handler of 'mouseout' event is needed in touch mode, which will be mounted below.
                // addEventListener(root, 'mouseout', this._mouseoutHandler);
            }

            // 1. Considering some devices that both enable touch and mouse event (like on MS Surface
            // and lenovo X240, @see #2350), we make mouse event be always listened, otherwise
            // mouse event can not be handle in those devices.
            // 2. On MS Surface, Chrome will trigger both touch event and mouse event. How to prevent
            // mouseevent after touch event triggered, see `setTouchTimer`.
            mountHandlers(mouseHandlerNames, this);
        }

        function mountHandlers(handlerNames, instance) {
            zrUtil.each(handlerNames, function (name) {
                addEventListener(dom, eventNameFix(name), instance._handlers[name]);
            }, instance);
        }
    }

    var handlerDomProxyProto = HandlerDomProxy.prototype;
    handlerDomProxyProto.dispose = function () {
        var handlerNames = mouseHandlerNames.concat(touchHandlerNames);

        for (var i = 0; i < handlerNames.length; i++) {
            var name = handlerNames[i];
            removeEventListener(this.dom, eventNameFix(name), this._handlers[name]);
        }
    };

    handlerDomProxyProto.setCursor = function (cursorStyle) {
        this.dom.style.cursor = cursorStyle || 'default';
    };

    zrUtil.mixin(HandlerDomProxy, Eventful);

    return HandlerDomProxy;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    /**
     * @param {Array.<Object>} colorStops
     */
    var Gradient = function (colorStops) {

        this.colorStops = colorStops || [];
    };

    Gradient.prototype = {

        constructor: Gradient,

        addColorStop: function (offset, color) {
            this.colorStops.push({

                offset: offset,

                color: color
            });
        }
    };

    return Gradient;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Image element
 * @module zrender/graphic/Image
 */

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var Displayable = __webpack_require__(340);
    var BoundingRect = __webpack_require__(90);
    var zrUtil = __webpack_require__(33);

    var LRU = __webpack_require__(335);
    var globalImageCache = new LRU(50);
    /**
     * @alias zrender/graphic/Image
     * @extends module:zrender/graphic/Displayable
     * @constructor
     * @param {Object} opts
     */
    function ZImage(opts) {
        Displayable.call(this, opts);
    }

    ZImage.prototype = {

        constructor: ZImage,

        type: 'image',

        brush: function (ctx, prevEl) {
            var style = this.style;
            var src = style.image;
            var image;

            // Must bind each time
            style.bind(ctx, this, prevEl);
            // style.image is a url string
            if (typeof src === 'string') {
                image = this._image;
            }
            // style.image is an HTMLImageElement or HTMLCanvasElement or Canvas
            else {
                image = src;
            }
            // FIXME Case create many images with src
            if (!image && src) {
                // Try get from global image cache
                var cachedImgObj = globalImageCache.get(src);
                if (!cachedImgObj) {
                    // Create a new image
                    image = new Image();
                    image.onload = function () {
                        image.onload = null;
                        for (var i = 0; i < cachedImgObj.pending.length; i++) {
                            cachedImgObj.pending[i].dirty();
                        }
                    };
                    cachedImgObj = {
                        image: image,
                        pending: [this]
                    };
                    image.src = src;
                    globalImageCache.put(src, cachedImgObj);
                    this._image = image;
                    return;
                }
                else {
                    image = cachedImgObj.image;
                    this._image = image;
                    // Image is not complete finish, add to pending list
                    if (!image.width || !image.height) {
                        cachedImgObj.pending.push(this);
                        return;
                    }
                }
            }

            if (image) {
                // 图片已经加载完成
                // if (image.nodeName.toUpperCase() == 'IMG') {
                //     if (!image.complete) {
                //         return;
                //     }
                // }
                // Else is canvas

                var x = style.x || 0;
                var y = style.y || 0;
                // 图片加载失败
                if (!image.width || !image.height) {
                    return;
                }
                var width = style.width;
                var height = style.height;
                var aspect = image.width / image.height;
                if (width == null && height != null) {
                    // Keep image/height ratio
                    width = height * aspect;
                }
                else if (height == null && width != null) {
                    height = width / aspect;
                }
                else if (width == null && height == null) {
                    width = image.width;
                    height = image.height;
                }

                // 设置transform
                this.setTransform(ctx);

                if (style.sWidth && style.sHeight) {
                    var sx = style.sx || 0;
                    var sy = style.sy || 0;
                    ctx.drawImage(
                        image,
                        sx, sy, style.sWidth, style.sHeight,
                        x, y, width, height
                    );
                }
                else if (style.sx && style.sy) {
                    var sx = style.sx;
                    var sy = style.sy;
                    var sWidth = width - sx;
                    var sHeight = height - sy;
                    ctx.drawImage(
                        image,
                        sx, sy, sWidth, sHeight,
                        x, y, width, height
                    );
                }
                else {
                    ctx.drawImage(image, x, y, width, height);
                }

                this.restoreTransform(ctx);

                // Draw rect text
                if (style.text != null) {
                    this.drawRectText(ctx, this.getBoundingRect());
                }

            }
        },

        getBoundingRect: function () {
            var style = this.style;
            if (! this._rect) {
                this._rect = new BoundingRect(
                    style.x || 0, style.y || 0, style.width || 0, style.height || 0
                );
            }
            return this._rect;
        }
    };

    zrUtil.inherits(ZImage, Displayable);

    return ZImage;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Mixin for drawing text in a element bounding rect
 * @module zrender/mixin/RectText
 */

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var textContain = __webpack_require__(770);
    var BoundingRect = __webpack_require__(90);

    var tmpRect = new BoundingRect();

    var RectText = function () {};

    function parsePercent(value, maxValue) {
        if (typeof value === 'string') {
            if (value.lastIndexOf('%') >= 0) {
                return parseFloat(value) / 100 * maxValue;
            }
            return parseFloat(value);
        }
        return value;
    }

    RectText.prototype = {

        constructor: RectText,

        /**
         * Draw text in a rect with specified position.
         * @param  {CanvasRenderingContext} ctx
         * @param  {Object} rect Displayable rect
         * @return {Object} textRect Alternative precalculated text bounding rect
         */
        drawRectText: function (ctx, rect, textRect) {
            var style = this.style;
            var text = style.text;
            // Convert to string
            text != null && (text += '');
            if (!text) {
                return;
            }

            // FIXME
            ctx.save();

            var x;
            var y;
            var textPosition = style.textPosition;
            var textOffset = style.textOffset;
            var distance = style.textDistance;
            var align = style.textAlign;
            var font = style.textFont || style.font;
            var baseline = style.textBaseline;
            var verticalAlign = style.textVerticalAlign;
            rect = style.textPositionRect || rect;

            textRect = textRect || textContain.getBoundingRect(text, font, align, baseline);

            // Transform rect to view space
            var transform = this.transform;
            if (!style.textTransform) {
                if (transform) {
                    tmpRect.copy(rect);
                    tmpRect.applyTransform(transform);
                    rect = tmpRect;
                }
            }
            else {
                this.setTransform(ctx);
            }

            // Text position represented by coord
            if (textPosition instanceof Array) {
                // Percent
                x = rect.x + parsePercent(textPosition[0], rect.width);
                y = rect.y + parsePercent(textPosition[1], rect.height);
                align = align || 'left';
                baseline = baseline || 'top';

                if (verticalAlign) {
                    switch (verticalAlign) {
                        case 'middle':
                            y -= textRect.height / 2 - textRect.lineHeight / 2;
                            break;
                        case 'bottom':
                            y -= textRect.height - textRect.lineHeight / 2;
                            break;
                        default:
                            y += textRect.lineHeight / 2;
                    }
                    // Force bseline to be middle
                    baseline = 'middle';
                }
            }
            else {
                var res = textContain.adjustTextPositionOnRect(
                    textPosition, rect, textRect, distance
                );
                x = res.x;
                y = res.y;
                // Default align and baseline when has textPosition
                align = align || res.textAlign;
                baseline = baseline || res.textBaseline;
            }

            if (textOffset) {
                x += textOffset[0];
                y += textOffset[1];
            }

            // Use canvas default left textAlign. Giving invalid value will cause state not change
            ctx.textAlign = align || 'left';
            // Use canvas default alphabetic baseline
            ctx.textBaseline = baseline || 'alphabetic';

            var textFill = style.textFill;
            var textStroke = style.textStroke;
            textFill && (ctx.fillStyle = textFill);
            textStroke && (ctx.strokeStyle = textStroke);

            // TODO Invalid font
            ctx.font = font || '12px sans-serif';

            // Text shadow
            // Always set shadowBlur and shadowOffset to avoid leak from displayable
            ctx.shadowBlur = style.textShadowBlur;
            ctx.shadowColor = style.textShadowColor || 'transparent';
            ctx.shadowOffsetX = style.textShadowOffsetX;
            ctx.shadowOffsetY = style.textShadowOffsetY;

            var textLines = text.split('\n');

            if (style.textRotation) {
                transform && ctx.translate(transform[4], transform[5]);
                ctx.rotate(style.textRotation);
                transform && ctx.translate(-transform[4], -transform[5]);
            }

            for (var i = 0; i < textLines.length; i++) {
                // Fill after stroke so the outline will not cover the main part.
                textStroke && ctx.strokeText(textLines[i], x, y);
                textFill && ctx.fillText(textLines[i], x, y);
                y += textRect.lineHeight;
            }

            ctx.restore();
        }
    };

    return RectText;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * 贝塞尔曲线
 * @module zrender/shape/BezierCurve
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
    'use strict';

    var curveTool = __webpack_require__(91);
    var vec2 = __webpack_require__(74);
    var quadraticSubdivide = curveTool.quadraticSubdivide;
    var cubicSubdivide = curveTool.cubicSubdivide;
    var quadraticAt = curveTool.quadraticAt;
    var cubicAt = curveTool.cubicAt;
    var quadraticDerivativeAt = curveTool.quadraticDerivativeAt;
    var cubicDerivativeAt = curveTool.cubicDerivativeAt;

    var out = [];

    function someVectorAt(shape, t, isTangent) {
        var cpx2 = shape.cpx2;
        var cpy2 = shape.cpy2;
        if (cpx2 === null || cpy2 === null) {
            return [
                (isTangent ? cubicDerivativeAt : cubicAt)(shape.x1, shape.cpx1, shape.cpx2, shape.x2, t),
                (isTangent ? cubicDerivativeAt : cubicAt)(shape.y1, shape.cpy1, shape.cpy2, shape.y2, t)
            ];
        }
        else {
            return [
                (isTangent ? quadraticDerivativeAt : quadraticAt)(shape.x1, shape.cpx1, shape.x2, t),
                (isTangent ? quadraticDerivativeAt : quadraticAt)(shape.y1, shape.cpy1, shape.y2, t)
            ];
        }
    }
    return __webpack_require__(218).extend({

        type: 'bezier-curve',

        shape: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            cpx1: 0,
            cpy1: 0,
            // cpx2: 0,
            // cpy2: 0

            // Curve show percent, for animating
            percent: 1
        },

        style: {
            stroke: '#000',
            fill: null
        },

        buildPath: function (ctx, shape) {
            var x1 = shape.x1;
            var y1 = shape.y1;
            var x2 = shape.x2;
            var y2 = shape.y2;
            var cpx1 = shape.cpx1;
            var cpy1 = shape.cpy1;
            var cpx2 = shape.cpx2;
            var cpy2 = shape.cpy2;
            var percent = shape.percent;
            if (percent === 0) {
                return;
            }

            ctx.moveTo(x1, y1);

            if (cpx2 == null || cpy2 == null) {
                if (percent < 1) {
                    quadraticSubdivide(
                        x1, cpx1, x2, percent, out
                    );
                    cpx1 = out[1];
                    x2 = out[2];
                    quadraticSubdivide(
                        y1, cpy1, y2, percent, out
                    );
                    cpy1 = out[1];
                    y2 = out[2];
                }

                ctx.quadraticCurveTo(
                    cpx1, cpy1,
                    x2, y2
                );
            }
            else {
                if (percent < 1) {
                    cubicSubdivide(
                        x1, cpx1, cpx2, x2, percent, out
                    );
                    cpx1 = out[1];
                    cpx2 = out[2];
                    x2 = out[3];
                    cubicSubdivide(
                        y1, cpy1, cpy2, y2, percent, out
                    );
                    cpy1 = out[1];
                    cpy2 = out[2];
                    y2 = out[3];
                }
                ctx.bezierCurveTo(
                    cpx1, cpy1,
                    cpx2, cpy2,
                    x2, y2
                );
            }
        },

        /**
         * Get point at percent
         * @param  {number} t
         * @return {Array.<number>}
         */
        pointAt: function (t) {
            return someVectorAt(this.shape, t, false);
        },

        /**
         * Get tangent at percent
         * @param  {number} t
         * @return {Array.<number>}
         */
        tangentAt: function (t) {
            var p = someVectorAt(this.shape, t, true);
            return vec2.normalize(p, p);
        }
    });
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @module zrender/mixin/Animatable
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

    'use strict';

    var Animator = __webpack_require__(332);
    var util = __webpack_require__(33);
    var isString = util.isString;
    var isFunction = util.isFunction;
    var isObject = util.isObject;
    var log = __webpack_require__(337);

    /**
     * @alias modue:zrender/mixin/Animatable
     * @constructor
     */
    var Animatable = function () {

        /**
         * @type {Array.<module:zrender/animation/Animator>}
         * @readOnly
         */
        this.animators = [];
    };

    Animatable.prototype = {

        constructor: Animatable,

        /**
         * 动画
         *
         * @param {string} path 需要添加动画的属性获取路径，可以通过a.b.c来获取深层的属性
         * @param {boolean} [loop] 动画是否循环
         * @return {module:zrender/animation/Animator}
         * @example:
         *     el.animate('style', false)
         *         .when(1000, {x: 10} )
         *         .done(function(){ // Animation done })
         *         .start()
         */
        animate: function (path, loop) {
            var target;
            var animatingShape = false;
            var el = this;
            var zr = this.__zr;
            if (path) {
                var pathSplitted = path.split('.');
                var prop = el;
                // If animating shape
                animatingShape = pathSplitted[0] === 'shape';
                for (var i = 0, l = pathSplitted.length; i < l; i++) {
                    if (!prop) {
                        continue;
                    }
                    prop = prop[pathSplitted[i]];
                }
                if (prop) {
                    target = prop;
                }
            }
            else {
                target = el;
            }

            if (!target) {
                log(
                    'Property "'
                    + path
                    + '" is not existed in element '
                    + el.id
                );
                return;
            }

            var animators = el.animators;

            var animator = new Animator(target, loop);

            animator.during(function (target) {
                el.dirty(animatingShape);
            })
            .done(function () {
                // FIXME Animator will not be removed if use `Animator#stop` to stop animation
                animators.splice(util.indexOf(animators, animator), 1);
            });

            animators.push(animator);

            // If animate after added to the zrender
            if (zr) {
                zr.animation.addAnimator(animator);
            }

            return animator;
        },

        /**
         * 停止动画
         * @param {boolean} forwardToLast If move to last frame before stop
         */
        stopAnimation: function (forwardToLast) {
            var animators = this.animators;
            var len = animators.length;
            for (var i = 0; i < len; i++) {
                animators[i].stop(forwardToLast);
            }
            animators.length = 0;

            return this;
        },

        /**
         * @param {Object} target
         * @param {number} [time=500] Time in ms
         * @param {string} [easing='linear']
         * @param {number} [delay=0]
         * @param {Function} [callback]
         *
         * @example
         *  // Animate position
         *  el.animateTo({
         *      position: [10, 10]
         *  }, function () { // done })
         *
         *  // Animate shape, style and position in 100ms, delayed 100ms, with cubicOut easing
         *  el.animateTo({
         *      shape: {
         *          width: 500
         *      },
         *      style: {
         *          fill: 'red'
         *      }
         *      position: [10, 10]
         *  }, 100, 100, 'cubicOut', function () { // done })
         */
         // TODO Return animation key
        animateTo: function (target, time, delay, easing, callback) {
            // animateTo(target, time, easing, callback);
            if (isString(delay)) {
                callback = easing;
                easing = delay;
                delay = 0;
            }
            // animateTo(target, time, delay, callback);
            else if (isFunction(easing)) {
                callback = easing;
                easing = 'linear';
                delay = 0;
            }
            // animateTo(target, time, callback);
            else if (isFunction(delay)) {
                callback = delay;
                delay = 0;
            }
            // animateTo(target, callback)
            else if (isFunction(time)) {
                callback = time;
                time = 500;
            }
            // animateTo(target)
            else if (!time) {
                time = 500;
            }
            // Stop all previous animations
            this.stopAnimation();
            this._animateToShallow('', this, target, time, delay, easing, callback);

            // Animators may be removed immediately after start
            // if there is nothing to animate
            var animators = this.animators.slice();
            var count = animators.length;
            function done() {
                count--;
                if (!count) {
                    callback && callback();
                }
            }

            // No animators. This should be checked before animators[i].start(),
            // because 'done' may be executed immediately if no need to animate.
            if (!count) {
                callback && callback();
            }
            // Start after all animators created
            // Incase any animator is done immediately when all animation properties are not changed
            for (var i = 0; i < animators.length; i++) {
                animators[i]
                    .done(done)
                    .start(easing);
            }
        },

        /**
         * @private
         * @param {string} path=''
         * @param {Object} source=this
         * @param {Object} target
         * @param {number} [time=500]
         * @param {number} [delay=0]
         *
         * @example
         *  // Animate position
         *  el._animateToShallow({
         *      position: [10, 10]
         *  })
         *
         *  // Animate shape, style and position in 100ms, delayed 100ms
         *  el._animateToShallow({
         *      shape: {
         *          width: 500
         *      },
         *      style: {
         *          fill: 'red'
         *      }
         *      position: [10, 10]
         *  }, 100, 100)
         */
        _animateToShallow: function (path, source, target, time, delay) {
            var objShallow = {};
            var propertyCount = 0;
            for (var name in target) {
                if (!target.hasOwnProperty(name)) {
                    continue;
                }

                if (source[name] != null) {
                    if (isObject(target[name]) && !util.isArrayLike(target[name])) {
                        this._animateToShallow(
                            path ? path + '.' + name : name,
                            source[name],
                            target[name],
                            time,
                            delay
                        );
                    }
                    else {
                        objShallow[name] = target[name];
                        propertyCount++;
                    }
                }
                else if (target[name] != null) {
                    // Attr directly if not has property
                    // FIXME, if some property not needed for element ?
                    if (!path) {
                        this.attr(name, target[name]);
                    }
                    else {  // Shape or style
                        var props = {};
                        props[path] = {};
                        props[path][name] = target[name];
                        this.attr(props);
                    }
                }
            }

            if (propertyCount > 0) {
                this.animate(path, false)
                    .when(time == null ? 500 : time, objShallow)
                    .delay(delay || 0);
            }

            return this;
        }
    };

    return Animatable;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// TODO Draggable for group
// FIXME Draggable on element which has parent rotation or scale
!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
    function Draggable() {

        this.on('mousedown', this._dragStart, this);
        this.on('mousemove', this._drag, this);
        this.on('mouseup', this._dragEnd, this);
        this.on('globalout', this._dragEnd, this);
        // this._dropTarget = null;
        // this._draggingTarget = null;

        // this._x = 0;
        // this._y = 0;
    }

    Draggable.prototype = {

        constructor: Draggable,

        _dragStart: function (e) {
            var draggingTarget = e.target;
            if (draggingTarget && draggingTarget.draggable) {
                this._draggingTarget = draggingTarget;
                draggingTarget.dragging = true;
                this._x = e.offsetX;
                this._y = e.offsetY;

                this.dispatchToElement(param(draggingTarget, e), 'dragstart', e.event);
            }
        },

        _drag: function (e) {
            var draggingTarget = this._draggingTarget;
            if (draggingTarget) {

                var x = e.offsetX;
                var y = e.offsetY;

                var dx = x - this._x;
                var dy = y - this._y;
                this._x = x;
                this._y = y;

                draggingTarget.drift(dx, dy, e);
                this.dispatchToElement(param(draggingTarget, e), 'drag', e.event);

                var dropTarget = this.findHover(x, y, draggingTarget).target;
                var lastDropTarget = this._dropTarget;
                this._dropTarget = dropTarget;

                if (draggingTarget !== dropTarget) {
                    if (lastDropTarget && dropTarget !== lastDropTarget) {
                        this.dispatchToElement(param(lastDropTarget, e), 'dragleave', e.event);
                    }
                    if (dropTarget && dropTarget !== lastDropTarget) {
                        this.dispatchToElement(param(dropTarget, e), 'dragenter', e.event);
                    }
                }
            }
        },

        _dragEnd: function (e) {
            var draggingTarget = this._draggingTarget;

            if (draggingTarget) {
                draggingTarget.dragging = false;
            }

            this.dispatchToElement(param(draggingTarget, e), 'dragend', e.event);

            if (this._dropTarget) {
                this.dispatchToElement(param(this._dropTarget, e), 'drop', e.event);
            }

            this._draggingTarget = null;
            this._dropTarget = null;
        }

    };

    function param(target, e) {
        return {target: target, topTarget: e && e.topTarget};
    }

    return Draggable;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * 提供变换扩展
 * @module zrender/mixin/Transformable
 * @author pissang (https://www.github.com/pissang)
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    'use strict';

    var matrix = __webpack_require__(338);
    var vector = __webpack_require__(74);
    var mIdentity = matrix.identity;

    var EPSILON = 5e-5;

    function isNotAroundZero(val) {
        return val > EPSILON || val < -EPSILON;
    }

    /**
     * @alias module:zrender/mixin/Transformable
     * @constructor
     */
    var Transformable = function (opts) {
        opts = opts || {};
        // If there are no given position, rotation, scale
        if (!opts.position) {
            /**
             * 平移
             * @type {Array.<number>}
             * @default [0, 0]
             */
            this.position = [0, 0];
        }
        if (opts.rotation == null) {
            /**
             * 旋转
             * @type {Array.<number>}
             * @default 0
             */
            this.rotation = 0;
        }
        if (!opts.scale) {
            /**
             * 缩放
             * @type {Array.<number>}
             * @default [1, 1]
             */
            this.scale = [1, 1];
        }
        /**
         * 旋转和缩放的原点
         * @type {Array.<number>}
         * @default null
         */
        this.origin = this.origin || null;
    };

    var transformableProto = Transformable.prototype;
    transformableProto.transform = null;

    /**
     * 判断是否需要有坐标变换
     * 如果有坐标变换, 则从position, rotation, scale以及父节点的transform计算出自身的transform矩阵
     */
    transformableProto.needLocalTransform = function () {
        return isNotAroundZero(this.rotation)
            || isNotAroundZero(this.position[0])
            || isNotAroundZero(this.position[1])
            || isNotAroundZero(this.scale[0] - 1)
            || isNotAroundZero(this.scale[1] - 1);
    };

    transformableProto.updateTransform = function () {
        var parent = this.parent;
        var parentHasTransform = parent && parent.transform;
        var needLocalTransform = this.needLocalTransform();

        var m = this.transform;
        if (!(needLocalTransform || parentHasTransform)) {
            m && mIdentity(m);
            return;
        }

        m = m || matrix.create();

        if (needLocalTransform) {
            this.getLocalTransform(m);
        }
        else {
            mIdentity(m);
        }

        // 应用父节点变换
        if (parentHasTransform) {
            if (needLocalTransform) {
                matrix.mul(m, parent.transform, m);
            }
            else {
                matrix.copy(m, parent.transform);
            }
        }
        // 保存这个变换矩阵
        this.transform = m;

        this.invTransform = this.invTransform || matrix.create();
        matrix.invert(this.invTransform, m);
    };

    transformableProto.getLocalTransform = function (m) {
        return Transformable.getLocalTransform(this, m);
    };

    /**
     * 将自己的transform应用到context上
     * @param {Context2D} ctx
     */
    transformableProto.setTransform = function (ctx) {
        var m = this.transform;
        var dpr = ctx.dpr || 1;
        if (m) {
            ctx.setTransform(dpr * m[0], dpr * m[1], dpr * m[2], dpr * m[3], dpr * m[4], dpr * m[5]);
        }
        else {
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
    };

    transformableProto.restoreTransform = function (ctx) {
        var dpr = ctx.dpr || 1;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    var tmpTransform = [];

    /**
     * 分解`transform`矩阵到`position`, `rotation`, `scale`
     */
    transformableProto.decomposeTransform = function () {
        if (!this.transform) {
            return;
        }
        var parent = this.parent;
        var m = this.transform;
        if (parent && parent.transform) {
            // Get local transform and decompose them to position, scale, rotation
            matrix.mul(tmpTransform, parent.invTransform, m);
            m = tmpTransform;
        }
        var sx = m[0] * m[0] + m[1] * m[1];
        var sy = m[2] * m[2] + m[3] * m[3];
        var position = this.position;
        var scale = this.scale;
        if (isNotAroundZero(sx - 1)) {
            sx = Math.sqrt(sx);
        }
        if (isNotAroundZero(sy - 1)) {
            sy = Math.sqrt(sy);
        }
        if (m[0] < 0) {
            sx = -sx;
        }
        if (m[3] < 0) {
            sy = -sy;
        }
        position[0] = m[4];
        position[1] = m[5];
        scale[0] = sx;
        scale[1] = sy;
        this.rotation = Math.atan2(-m[1] / sy, m[0] / sx);
    };

    /**
     * Get global scale
     * @return {Array.<number>}
     */
    transformableProto.getGlobalScale = function () {
        var m = this.transform;
        if (!m) {
            return [1, 1];
        }
        var sx = Math.sqrt(m[0] * m[0] + m[1] * m[1]);
        var sy = Math.sqrt(m[2] * m[2] + m[3] * m[3]);
        if (m[0] < 0) {
            sx = -sx;
        }
        if (m[3] < 0) {
            sy = -sy;
        }
        return [sx, sy];
    };
    /**
     * 变换坐标位置到 shape 的局部坐标空间
     * @method
     * @param {number} x
     * @param {number} y
     * @return {Array.<number>}
     */
    transformableProto.transformCoordToLocal = function (x, y) {
        var v2 = [x, y];
        var invTransform = this.invTransform;
        if (invTransform) {
            vector.applyTransform(v2, v2, invTransform);
        }
        return v2;
    };

    /**
     * 变换局部坐标位置到全局坐标空间
     * @method
     * @param {number} x
     * @param {number} y
     * @return {Array.<number>}
     */
    transformableProto.transformCoordToGlobal = function (x, y) {
        var v2 = [x, y];
        var transform = this.transform;
        if (transform) {
            vector.applyTransform(v2, v2, transform);
        }
        return v2;
    };

    /**
     * @static
     * @param {Object} target
     * @param {Array.<number>} target.origin
     * @param {number} target.rotation
     * @param {Array.<number>} target.position
     * @param {Array.<number>} [m]
     */
    Transformable.getLocalTransform = function (target, m) {
        m = m || [];
        mIdentity(m);

        var origin = target.origin;
        var scale = target.scale || [1, 1];
        var rotation = target.rotation || 0;
        var position = target.position || [0, 0];

        if (origin) {
            // Translate to origin
            m[4] -= origin[0];
            m[5] -= origin[1];
        }
        matrix.scale(m, m, scale);
        if (rotation) {
            matrix.rotate(m, m, rotation);
        }
        if (origin) {
            // Translate back from origin
            m[4] += origin[0];
            m[5] += origin[1];
        }

        m[4] += position[0];
        m[5] += position[1];

        return m;
    };

    return Transformable;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @module zrender/tool/color
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

    var LRU = __webpack_require__(335);

    var kCSSColorTable = {
        'transparent': [0,0,0,0], 'aliceblue': [240,248,255,1],
        'antiquewhite': [250,235,215,1], 'aqua': [0,255,255,1],
        'aquamarine': [127,255,212,1], 'azure': [240,255,255,1],
        'beige': [245,245,220,1], 'bisque': [255,228,196,1],
        'black': [0,0,0,1], 'blanchedalmond': [255,235,205,1],
        'blue': [0,0,255,1], 'blueviolet': [138,43,226,1],
        'brown': [165,42,42,1], 'burlywood': [222,184,135,1],
        'cadetblue': [95,158,160,1], 'chartreuse': [127,255,0,1],
        'chocolate': [210,105,30,1], 'coral': [255,127,80,1],
        'cornflowerblue': [100,149,237,1], 'cornsilk': [255,248,220,1],
        'crimson': [220,20,60,1], 'cyan': [0,255,255,1],
        'darkblue': [0,0,139,1], 'darkcyan': [0,139,139,1],
        'darkgoldenrod': [184,134,11,1], 'darkgray': [169,169,169,1],
        'darkgreen': [0,100,0,1], 'darkgrey': [169,169,169,1],
        'darkkhaki': [189,183,107,1], 'darkmagenta': [139,0,139,1],
        'darkolivegreen': [85,107,47,1], 'darkorange': [255,140,0,1],
        'darkorchid': [153,50,204,1], 'darkred': [139,0,0,1],
        'darksalmon': [233,150,122,1], 'darkseagreen': [143,188,143,1],
        'darkslateblue': [72,61,139,1], 'darkslategray': [47,79,79,1],
        'darkslategrey': [47,79,79,1], 'darkturquoise': [0,206,209,1],
        'darkviolet': [148,0,211,1], 'deeppink': [255,20,147,1],
        'deepskyblue': [0,191,255,1], 'dimgray': [105,105,105,1],
        'dimgrey': [105,105,105,1], 'dodgerblue': [30,144,255,1],
        'firebrick': [178,34,34,1], 'floralwhite': [255,250,240,1],
        'forestgreen': [34,139,34,1], 'fuchsia': [255,0,255,1],
        'gainsboro': [220,220,220,1], 'ghostwhite': [248,248,255,1],
        'gold': [255,215,0,1], 'goldenrod': [218,165,32,1],
        'gray': [128,128,128,1], 'green': [0,128,0,1],
        'greenyellow': [173,255,47,1], 'grey': [128,128,128,1],
        'honeydew': [240,255,240,1], 'hotpink': [255,105,180,1],
        'indianred': [205,92,92,1], 'indigo': [75,0,130,1],
        'ivory': [255,255,240,1], 'khaki': [240,230,140,1],
        'lavender': [230,230,250,1], 'lavenderblush': [255,240,245,1],
        'lawngreen': [124,252,0,1], 'lemonchiffon': [255,250,205,1],
        'lightblue': [173,216,230,1], 'lightcoral': [240,128,128,1],
        'lightcyan': [224,255,255,1], 'lightgoldenrodyellow': [250,250,210,1],
        'lightgray': [211,211,211,1], 'lightgreen': [144,238,144,1],
        'lightgrey': [211,211,211,1], 'lightpink': [255,182,193,1],
        'lightsalmon': [255,160,122,1], 'lightseagreen': [32,178,170,1],
        'lightskyblue': [135,206,250,1], 'lightslategray': [119,136,153,1],
        'lightslategrey': [119,136,153,1], 'lightsteelblue': [176,196,222,1],
        'lightyellow': [255,255,224,1], 'lime': [0,255,0,1],
        'limegreen': [50,205,50,1], 'linen': [250,240,230,1],
        'magenta': [255,0,255,1], 'maroon': [128,0,0,1],
        'mediumaquamarine': [102,205,170,1], 'mediumblue': [0,0,205,1],
        'mediumorchid': [186,85,211,1], 'mediumpurple': [147,112,219,1],
        'mediumseagreen': [60,179,113,1], 'mediumslateblue': [123,104,238,1],
        'mediumspringgreen': [0,250,154,1], 'mediumturquoise': [72,209,204,1],
        'mediumvioletred': [199,21,133,1], 'midnightblue': [25,25,112,1],
        'mintcream': [245,255,250,1], 'mistyrose': [255,228,225,1],
        'moccasin': [255,228,181,1], 'navajowhite': [255,222,173,1],
        'navy': [0,0,128,1], 'oldlace': [253,245,230,1],
        'olive': [128,128,0,1], 'olivedrab': [107,142,35,1],
        'orange': [255,165,0,1], 'orangered': [255,69,0,1],
        'orchid': [218,112,214,1], 'palegoldenrod': [238,232,170,1],
        'palegreen': [152,251,152,1], 'paleturquoise': [175,238,238,1],
        'palevioletred': [219,112,147,1], 'papayawhip': [255,239,213,1],
        'peachpuff': [255,218,185,1], 'peru': [205,133,63,1],
        'pink': [255,192,203,1], 'plum': [221,160,221,1],
        'powderblue': [176,224,230,1], 'purple': [128,0,128,1],
        'red': [255,0,0,1], 'rosybrown': [188,143,143,1],
        'royalblue': [65,105,225,1], 'saddlebrown': [139,69,19,1],
        'salmon': [250,128,114,1], 'sandybrown': [244,164,96,1],
        'seagreen': [46,139,87,1], 'seashell': [255,245,238,1],
        'sienna': [160,82,45,1], 'silver': [192,192,192,1],
        'skyblue': [135,206,235,1], 'slateblue': [106,90,205,1],
        'slategray': [112,128,144,1], 'slategrey': [112,128,144,1],
        'snow': [255,250,250,1], 'springgreen': [0,255,127,1],
        'steelblue': [70,130,180,1], 'tan': [210,180,140,1],
        'teal': [0,128,128,1], 'thistle': [216,191,216,1],
        'tomato': [255,99,71,1], 'turquoise': [64,224,208,1],
        'violet': [238,130,238,1], 'wheat': [245,222,179,1],
        'white': [255,255,255,1], 'whitesmoke': [245,245,245,1],
        'yellow': [255,255,0,1], 'yellowgreen': [154,205,50,1]
    };

    function clampCssByte(i) {  // Clamp to integer 0 .. 255.
        i = Math.round(i);  // Seems to be what Chrome does (vs truncation).
        return i < 0 ? 0 : i > 255 ? 255 : i;
    }

    function clampCssAngle(i) {  // Clamp to integer 0 .. 360.
        i = Math.round(i);  // Seems to be what Chrome does (vs truncation).
        return i < 0 ? 0 : i > 360 ? 360 : i;
    }

    function clampCssFloat(f) {  // Clamp to float 0.0 .. 1.0.
        return f < 0 ? 0 : f > 1 ? 1 : f;
    }

    function parseCssInt(str) {  // int or percentage.
        if (str.length && str.charAt(str.length - 1) === '%') {
            return clampCssByte(parseFloat(str) / 100 * 255);
        }
        return clampCssByte(parseInt(str, 10));
    }

    function parseCssFloat(str) {  // float or percentage.
        if (str.length && str.charAt(str.length - 1) === '%') {
            return clampCssFloat(parseFloat(str) / 100);
        }
        return clampCssFloat(parseFloat(str));
    }

    function cssHueToRgb(m1, m2, h) {
        if (h < 0) {
            h += 1;
        }
        else if (h > 1) {
            h -= 1;
        }

        if (h * 6 < 1) {
            return m1 + (m2 - m1) * h * 6;
        }
        if (h * 2 < 1) {
            return m2;
        }
        if (h * 3 < 2) {
            return m1 + (m2 - m1) * (2/3 - h) * 6;
        }
        return m1;
    }

    function lerp(a, b, p) {
        return a + (b - a) * p;
    }

    function setRgba(out, r, g, b, a) {
        out[0] = r; out[1] = g; out[2] = b; out[3] = a;
        return out;
    }
    function copyRgba(out, a) {
        out[0] = a[0]; out[1] = a[1]; out[2] = a[2]; out[3] = a[3];
        return out;
    }
    var colorCache = new LRU(20);
    var lastRemovedArr = null;
    function putToCache(colorStr, rgbaArr) {
        // Reuse removed array
        if (lastRemovedArr) {
            copyRgba(lastRemovedArr, rgbaArr);
        }
        lastRemovedArr = colorCache.put(colorStr, lastRemovedArr || (rgbaArr.slice()));
    }
    /**
     * @param {string} colorStr
     * @param {Array.<number>} out
     * @return {Array.<number>}
     * @memberOf module:zrender/util/color
     */
    function parse(colorStr, rgbaArr) {
        if (!colorStr) {
            return;
        }
        rgbaArr = rgbaArr || [];

        var cached = colorCache.get(colorStr);
        if (cached) {
            return copyRgba(rgbaArr, cached);
        }

        // colorStr may be not string
        colorStr = colorStr + '';
        // Remove all whitespace, not compliant, but should just be more accepting.
        var str = colorStr.replace(/ /g, '').toLowerCase();

        // Color keywords (and transparent) lookup.
        if (str in kCSSColorTable) {
            copyRgba(rgbaArr, kCSSColorTable[str]);
            putToCache(colorStr, rgbaArr);
            return rgbaArr;
        }

        // #abc and #abc123 syntax.
        if (str.charAt(0) === '#') {
            if (str.length === 4) {
                var iv = parseInt(str.substr(1), 16);  // TODO(deanm): Stricter parsing.
                if (!(iv >= 0 && iv <= 0xfff)) {
                    setRgba(rgbaArr, 0, 0, 0, 1);
                    return;  // Covers NaN.
                }
                setRgba(rgbaArr,
                    ((iv & 0xf00) >> 4) | ((iv & 0xf00) >> 8),
                    (iv & 0xf0) | ((iv & 0xf0) >> 4),
                    (iv & 0xf) | ((iv & 0xf) << 4),
                    1
                );
                putToCache(colorStr, rgbaArr);
                return rgbaArr;
            }
            else if (str.length === 7) {
                var iv = parseInt(str.substr(1), 16);  // TODO(deanm): Stricter parsing.
                if (!(iv >= 0 && iv <= 0xffffff)) {
                    setRgba(rgbaArr, 0, 0, 0, 1);
                    return;  // Covers NaN.
                }
                setRgba(rgbaArr,
                    (iv & 0xff0000) >> 16,
                    (iv & 0xff00) >> 8,
                    iv & 0xff,
                    1
                );
                putToCache(colorStr, rgbaArr);
                return rgbaArr;
            }

            return;
        }
        var op = str.indexOf('('), ep = str.indexOf(')');
        if (op !== -1 && ep + 1 === str.length) {
            var fname = str.substr(0, op);
            var params = str.substr(op + 1, ep - (op + 1)).split(',');
            var alpha = 1;  // To allow case fallthrough.
            switch (fname) {
                case 'rgba':
                    if (params.length !== 4) {
                        setRgba(rgbaArr, 0, 0, 0, 1);
                        return;
                    }
                    alpha = parseCssFloat(params.pop()); // jshint ignore:line
                // Fall through.
                case 'rgb':
                    if (params.length !== 3) {
                        setRgba(rgbaArr, 0, 0, 0, 1);
                        return;
                    }
                    setRgba(rgbaArr,
                        parseCssInt(params[0]),
                        parseCssInt(params[1]),
                        parseCssInt(params[2]),
                        alpha
                    );
                    putToCache(colorStr, rgbaArr);
                    return rgbaArr;
                case 'hsla':
                    if (params.length !== 4) {
                        setRgba(rgbaArr, 0, 0, 0, 1);
                        return;
                    }
                    params[3] = parseCssFloat(params[3]);
                    hsla2rgba(params, rgbaArr);
                    putToCache(colorStr, rgbaArr);
                    return rgbaArr;
                case 'hsl':
                    if (params.length !== 3) {
                        setRgba(rgbaArr, 0, 0, 0, 1);
                        return;
                    }
                    hsla2rgba(params, rgbaArr);
                    putToCache(colorStr, rgbaArr);
                    return rgbaArr;
                default:
                    return;
            }
        }

        setRgba(rgbaArr, 0, 0, 0, 1);
        return;
    }

    /**
     * @param {Array.<number>} hsla
     * @param {Array.<number>} rgba
     * @return {Array.<number>} rgba
     */
    function hsla2rgba(hsla, rgba) {
        var h = (((parseFloat(hsla[0]) % 360) + 360) % 360) / 360;  // 0 .. 1
        // NOTE(deanm): According to the CSS spec s/l should only be
        // percentages, but we don't bother and let float or percentage.
        var s = parseCssFloat(hsla[1]);
        var l = parseCssFloat(hsla[2]);
        var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        var m1 = l * 2 - m2;

        rgba = rgba || [];
        setRgba(rgba,
            clampCssByte(cssHueToRgb(m1, m2, h + 1 / 3) * 255),
            clampCssByte(cssHueToRgb(m1, m2, h) * 255),
            clampCssByte(cssHueToRgb(m1, m2, h - 1 / 3) * 255),
            1
        );

        if (hsla.length === 4) {
            rgba[3] = hsla[3];
        }

        return rgba;
    }

    /**
     * @param {Array.<number>} rgba
     * @return {Array.<number>} hsla
     */
    function rgba2hsla(rgba) {
        if (!rgba) {
            return;
        }

        // RGB from 0 to 255
        var R = rgba[0] / 255;
        var G = rgba[1] / 255;
        var B = rgba[2] / 255;

        var vMin = Math.min(R, G, B); // Min. value of RGB
        var vMax = Math.max(R, G, B); // Max. value of RGB
        var delta = vMax - vMin; // Delta RGB value

        var L = (vMax + vMin) / 2;
        var H;
        var S;
        // HSL results from 0 to 1
        if (delta === 0) {
            H = 0;
            S = 0;
        }
        else {
            if (L < 0.5) {
                S = delta / (vMax + vMin);
            }
            else {
                S = delta / (2 - vMax - vMin);
            }

            var deltaR = (((vMax - R) / 6) + (delta / 2)) / delta;
            var deltaG = (((vMax - G) / 6) + (delta / 2)) / delta;
            var deltaB = (((vMax - B) / 6) + (delta / 2)) / delta;

            if (R === vMax) {
                H = deltaB - deltaG;
            }
            else if (G === vMax) {
                H = (1 / 3) + deltaR - deltaB;
            }
            else if (B === vMax) {
                H = (2 / 3) + deltaG - deltaR;
            }

            if (H < 0) {
                H += 1;
            }

            if (H > 1) {
                H -= 1;
            }
        }

        var hsla = [H * 360, S, L];

        if (rgba[3] != null) {
            hsla.push(rgba[3]);
        }

        return hsla;
    }

    /**
     * @param {string} color
     * @param {number} level
     * @return {string}
     * @memberOf module:zrender/util/color
     */
    function lift(color, level) {
        var colorArr = parse(color);
        if (colorArr) {
            for (var i = 0; i < 3; i++) {
                if (level < 0) {
                    colorArr[i] = colorArr[i] * (1 - level) | 0;
                }
                else {
                    colorArr[i] = ((255 - colorArr[i]) * level + colorArr[i]) | 0;
                }
            }
            return stringify(colorArr, colorArr.length === 4 ? 'rgba' : 'rgb');
        }
    }

    /**
     * @param {string} color
     * @return {string}
     * @memberOf module:zrender/util/color
     */
    function toHex(color, level) {
        var colorArr = parse(color);
        if (colorArr) {
            return ((1 << 24) + (colorArr[0] << 16) + (colorArr[1] << 8) + (+colorArr[2])).toString(16).slice(1);
        }
    }

    /**
     * Map value to color. Faster than mapToColor methods because color is represented by rgba array.
     * @param {number} normalizedValue A float between 0 and 1.
     * @param {Array.<Array.<number>>} colors List of rgba color array
     * @param {Array.<number>} [out] Mapped gba color array
     * @return {Array.<number>} will be null/undefined if input illegal.
     */
    function fastMapToColor(normalizedValue, colors, out) {
        if (!(colors && colors.length)
            || !(normalizedValue >= 0 && normalizedValue <= 1)
        ) {
            return;
        }

        out = out || [];

        var value = normalizedValue * (colors.length - 1);
        var leftIndex = Math.floor(value);
        var rightIndex = Math.ceil(value);
        var leftColor = colors[leftIndex];
        var rightColor = colors[rightIndex];
        var dv = value - leftIndex;
        out[0] = clampCssByte(lerp(leftColor[0], rightColor[0], dv));
        out[1] = clampCssByte(lerp(leftColor[1], rightColor[1], dv));
        out[2] = clampCssByte(lerp(leftColor[2], rightColor[2], dv));
        out[3] = clampCssFloat(lerp(leftColor[3], rightColor[3], dv));

        return out;
    }
    /**
     * @param {number} normalizedValue A float between 0 and 1.
     * @param {Array.<string>} colors Color list.
     * @param {boolean=} fullOutput Default false.
     * @return {(string|Object)} Result color. If fullOutput,
     *                           return {color: ..., leftIndex: ..., rightIndex: ..., value: ...},
     * @memberOf module:zrender/util/color
     */
    function mapToColor(normalizedValue, colors, fullOutput) {
        if (!(colors && colors.length)
            || !(normalizedValue >= 0 && normalizedValue <= 1)
        ) {
            return;
        }

        var value = normalizedValue * (colors.length - 1);
        var leftIndex = Math.floor(value);
        var rightIndex = Math.ceil(value);
        var leftColor = parse(colors[leftIndex]);
        var rightColor = parse(colors[rightIndex]);
        var dv = value - leftIndex;

        var color = stringify(
            [
                clampCssByte(lerp(leftColor[0], rightColor[0], dv)),
                clampCssByte(lerp(leftColor[1], rightColor[1], dv)),
                clampCssByte(lerp(leftColor[2], rightColor[2], dv)),
                clampCssFloat(lerp(leftColor[3], rightColor[3], dv))
            ],
            'rgba'
        );

        return fullOutput
            ? {
                color: color,
                leftIndex: leftIndex,
                rightIndex: rightIndex,
                value: value
            }
            : color;
    }

    /**
     * @param {string} color
     * @param {number=} h 0 ~ 360, ignore when null.
     * @param {number=} s 0 ~ 1, ignore when null.
     * @param {number=} l 0 ~ 1, ignore when null.
     * @return {string} Color string in rgba format.
     * @memberOf module:zrender/util/color
     */
    function modifyHSL(color, h, s, l) {
        color = parse(color);

        if (color) {
            color = rgba2hsla(color);
            h != null && (color[0] = clampCssAngle(h));
            s != null && (color[1] = parseCssFloat(s));
            l != null && (color[2] = parseCssFloat(l));

            return stringify(hsla2rgba(color), 'rgba');
        }
    }

    /**
     * @param {string} color
     * @param {number=} alpha 0 ~ 1
     * @return {string} Color string in rgba format.
     * @memberOf module:zrender/util/color
     */
    function modifyAlpha(color, alpha) {
        color = parse(color);

        if (color && alpha != null) {
            color[3] = clampCssFloat(alpha);
            return stringify(color, 'rgba');
        }
    }

    /**
     * @param {Array.<number>} arrColor like [12,33,44,0.4]
     * @param {string} type 'rgba', 'hsva', ...
     * @return {string} Result color. (If input illegal, return undefined).
     */
    function stringify(arrColor, type) {
        if (!arrColor || !arrColor.length) {
            return;
        }
        var colorStr = arrColor[0] + ',' + arrColor[1] + ',' + arrColor[2];
        if (type === 'rgba' || type === 'hsva' || type === 'hsla') {
            colorStr += ',' + arrColor[3];
        }
        return type + '(' + colorStr + ')';
    }

    return {
        parse: parse,
        lift: lift,
        toHex: toHex,
        fastMapToColor: fastMapToColor,
        mapToColor: mapToColor,
        modifyHSL: modifyHSL,
        modifyAlpha: modifyAlpha,
        stringify: stringify
    };
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));



/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var Path = __webpack_require__(218);
    var PathProxy = __webpack_require__(153);
    var transformPath = __webpack_require__(784);

    // command chars
    var cc = [
        'm', 'M', 'l', 'L', 'v', 'V', 'h', 'H', 'z', 'Z',
        'c', 'C', 'q', 'Q', 't', 'T', 's', 'S', 'a', 'A'
    ];

    var mathSqrt = Math.sqrt;
    var mathSin = Math.sin;
    var mathCos = Math.cos;
    var PI = Math.PI;

    var vMag = function(v) {
        return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
    };
    var vRatio = function(u, v) {
        return (u[0] * v[0] + u[1] * v[1]) / (vMag(u) * vMag(v));
    };
    var vAngle = function(u, v) {
        return (u[0] * v[1] < u[1] * v[0] ? -1 : 1)
                * Math.acos(vRatio(u, v));
    };

    function processArc(x1, y1, x2, y2, fa, fs, rx, ry, psiDeg, cmd, path) {
        var psi = psiDeg * (PI / 180.0);
        var xp = mathCos(psi) * (x1 - x2) / 2.0
                 + mathSin(psi) * (y1 - y2) / 2.0;
        var yp = -1 * mathSin(psi) * (x1 - x2) / 2.0
                 + mathCos(psi) * (y1 - y2) / 2.0;

        var lambda = (xp * xp) / (rx * rx) + (yp * yp) / (ry * ry);

        if (lambda > 1) {
            rx *= mathSqrt(lambda);
            ry *= mathSqrt(lambda);
        }

        var f = (fa === fs ? -1 : 1)
            * mathSqrt((((rx * rx) * (ry * ry))
                    - ((rx * rx) * (yp * yp))
                    - ((ry * ry) * (xp * xp))) / ((rx * rx) * (yp * yp)
                    + (ry * ry) * (xp * xp))
                ) || 0;

        var cxp = f * rx * yp / ry;
        var cyp = f * -ry * xp / rx;

        var cx = (x1 + x2) / 2.0
                 + mathCos(psi) * cxp
                 - mathSin(psi) * cyp;
        var cy = (y1 + y2) / 2.0
                + mathSin(psi) * cxp
                + mathCos(psi) * cyp;

        var theta = vAngle([ 1, 0 ], [ (xp - cxp) / rx, (yp - cyp) / ry ]);
        var u = [ (xp - cxp) / rx, (yp - cyp) / ry ];
        var v = [ (-1 * xp - cxp) / rx, (-1 * yp - cyp) / ry ];
        var dTheta = vAngle(u, v);

        if (vRatio(u, v) <= -1) {
            dTheta = PI;
        }
        if (vRatio(u, v) >= 1) {
            dTheta = 0;
        }
        if (fs === 0 && dTheta > 0) {
            dTheta = dTheta - 2 * PI;
        }
        if (fs === 1 && dTheta < 0) {
            dTheta = dTheta + 2 * PI;
        }

        path.addData(cmd, cx, cy, rx, ry, theta, dTheta, psi, fs);
    }

    function createPathProxyFromString(data) {
        if (!data) {
            return [];
        }

        // command string
        var cs = data.replace(/-/g, ' -')
            .replace(/  /g, ' ')
            .replace(/ /g, ',')
            .replace(/,,/g, ',');

        var n;
        // create pipes so that we can split the data
        for (n = 0; n < cc.length; n++) {
            cs = cs.replace(new RegExp(cc[n], 'g'), '|' + cc[n]);
        }

        // create array
        var arr = cs.split('|');
        // init context point
        var cpx = 0;
        var cpy = 0;

        var path = new PathProxy();
        var CMD = PathProxy.CMD;

        var prevCmd;
        for (n = 1; n < arr.length; n++) {
            var str = arr[n];
            var c = str.charAt(0);
            var off = 0;
            var p = str.slice(1).replace(/e,-/g, 'e-').split(',');
            var cmd;

            if (p.length > 0 && p[0] === '') {
                p.shift();
            }

            for (var i = 0; i < p.length; i++) {
                p[i] = parseFloat(p[i]);
            }
            while (off < p.length && !isNaN(p[off])) {
                if (isNaN(p[0])) {
                    break;
                }
                var ctlPtx;
                var ctlPty;

                var rx;
                var ry;
                var psi;
                var fa;
                var fs;

                var x1 = cpx;
                var y1 = cpy;

                // convert l, H, h, V, and v to L
                switch (c) {
                    case 'l':
                        cpx += p[off++];
                        cpy += p[off++];
                        cmd = CMD.L;
                        path.addData(cmd, cpx, cpy);
                        break;
                    case 'L':
                        cpx = p[off++];
                        cpy = p[off++];
                        cmd = CMD.L;
                        path.addData(cmd, cpx, cpy);
                        break;
                    case 'm':
                        cpx += p[off++];
                        cpy += p[off++];
                        cmd = CMD.M;
                        path.addData(cmd, cpx, cpy);
                        c = 'l';
                        break;
                    case 'M':
                        cpx = p[off++];
                        cpy = p[off++];
                        cmd = CMD.M;
                        path.addData(cmd, cpx, cpy);
                        c = 'L';
                        break;
                    case 'h':
                        cpx += p[off++];
                        cmd = CMD.L;
                        path.addData(cmd, cpx, cpy);
                        break;
                    case 'H':
                        cpx = p[off++];
                        cmd = CMD.L;
                        path.addData(cmd, cpx, cpy);
                        break;
                    case 'v':
                        cpy += p[off++];
                        cmd = CMD.L;
                        path.addData(cmd, cpx, cpy);
                        break;
                    case 'V':
                        cpy = p[off++];
                        cmd = CMD.L;
                        path.addData(cmd, cpx, cpy);
                        break;
                    case 'C':
                        cmd = CMD.C;
                        path.addData(
                            cmd, p[off++], p[off++], p[off++], p[off++], p[off++], p[off++]
                        );
                        cpx = p[off - 2];
                        cpy = p[off - 1];
                        break;
                    case 'c':
                        cmd = CMD.C;
                        path.addData(
                            cmd,
                            p[off++] + cpx, p[off++] + cpy,
                            p[off++] + cpx, p[off++] + cpy,
                            p[off++] + cpx, p[off++] + cpy
                        );
                        cpx += p[off - 2];
                        cpy += p[off - 1];
                        break;
                    case 'S':
                        ctlPtx = cpx;
                        ctlPty = cpy;
                        var len = path.len();
                        var pathData = path.data;
                        if (prevCmd === CMD.C) {
                            ctlPtx += cpx - pathData[len - 4];
                            ctlPty += cpy - pathData[len - 3];
                        }
                        cmd = CMD.C;
                        x1 = p[off++];
                        y1 = p[off++];
                        cpx = p[off++];
                        cpy = p[off++];
                        path.addData(cmd, ctlPtx, ctlPty, x1, y1, cpx, cpy);
                        break;
                    case 's':
                        ctlPtx = cpx;
                        ctlPty = cpy;
                        var len = path.len();
                        var pathData = path.data;
                        if (prevCmd === CMD.C) {
                            ctlPtx += cpx - pathData[len - 4];
                            ctlPty += cpy - pathData[len - 3];
                        }
                        cmd = CMD.C;
                        x1 = cpx + p[off++];
                        y1 = cpy + p[off++];
                        cpx += p[off++];
                        cpy += p[off++];
                        path.addData(cmd, ctlPtx, ctlPty, x1, y1, cpx, cpy);
                        break;
                    case 'Q':
                        x1 = p[off++];
                        y1 = p[off++];
                        cpx = p[off++];
                        cpy = p[off++];
                        cmd = CMD.Q;
                        path.addData(cmd, x1, y1, cpx, cpy);
                        break;
                    case 'q':
                        x1 = p[off++] + cpx;
                        y1 = p[off++] + cpy;
                        cpx += p[off++];
                        cpy += p[off++];
                        cmd = CMD.Q;
                        path.addData(cmd, x1, y1, cpx, cpy);
                        break;
                    case 'T':
                        ctlPtx = cpx;
                        ctlPty = cpy;
                        var len = path.len();
                        var pathData = path.data;
                        if (prevCmd === CMD.Q) {
                            ctlPtx += cpx - pathData[len - 4];
                            ctlPty += cpy - pathData[len - 3];
                        }
                        cpx = p[off++];
                        cpy = p[off++];
                        cmd = CMD.Q;
                        path.addData(cmd, ctlPtx, ctlPty, cpx, cpy);
                        break;
                    case 't':
                        ctlPtx = cpx;
                        ctlPty = cpy;
                        var len = path.len();
                        var pathData = path.data;
                        if (prevCmd === CMD.Q) {
                            ctlPtx += cpx - pathData[len - 4];
                            ctlPty += cpy - pathData[len - 3];
                        }
                        cpx += p[off++];
                        cpy += p[off++];
                        cmd = CMD.Q;
                        path.addData(cmd, ctlPtx, ctlPty, cpx, cpy);
                        break;
                    case 'A':
                        rx = p[off++];
                        ry = p[off++];
                        psi = p[off++];
                        fa = p[off++];
                        fs = p[off++];

                        x1 = cpx, y1 = cpy;
                        cpx = p[off++];
                        cpy = p[off++];
                        cmd = CMD.A;
                        processArc(
                            x1, y1, cpx, cpy, fa, fs, rx, ry, psi, cmd, path
                        );
                        break;
                    case 'a':
                        rx = p[off++];
                        ry = p[off++];
                        psi = p[off++];
                        fa = p[off++];
                        fs = p[off++];

                        x1 = cpx, y1 = cpy;
                        cpx += p[off++];
                        cpy += p[off++];
                        cmd = CMD.A;
                        processArc(
                            x1, y1, cpx, cpy, fa, fs, rx, ry, psi, cmd, path
                        );
                        break;
                }
            }

            if (c === 'z' || c === 'Z') {
                cmd = CMD.Z;
                path.addData(cmd);
            }

            prevCmd = cmd;
        }

        path.toStatic();

        return path;
    }

    // TODO Optimize double memory cost problem
    function createPathOptions(str, opts) {
        var pathProxy = createPathProxyFromString(str);
        opts = opts || {};
        opts.buildPath = function (path) {
            if (path.setData) {
                path.setData(pathProxy.data);
                // Svg and vml renderer don't have context
                var ctx = path.getContext();
                if (ctx) {
                    path.rebuildPath(ctx);
                }
            }
            else {
                var ctx = path;
                pathProxy.rebuildPath(ctx);
            }
        };

        opts.applyTransform = function (m) {
            transformPath(pathProxy, m);

            this.dirty(true);
        };

        return opts;
    }

    return {
        /**
         * Create a Path object from path string data
         * http://www.w3.org/TR/SVG/paths.html#PathData
         * @param  {Object} opts Other options
         */
        createFromString: function (str, opts) {
            return new Path(createPathOptions(str, opts));
        },

        /**
         * Create a Path class from path string data
         * @param  {string} str
         * @param  {Object} opts Other options
         */
        extendFromString: function (str, opts) {
            return Path.extend(createPathOptions(str, opts));
        },

        /**
         * Merge multiple paths
         */
        // TODO Apply transform
        // TODO stroke dash
        // TODO Optimize double memory cost problem
        mergePath: function (pathEls, opts) {
            var pathList = [];
            var len = pathEls.length;
            for (var i = 0; i < len; i++) {
                var pathEl = pathEls[i];
                if (!pathEl.path) {
                    pathEl.createPathProxy();
                }
                if (pathEl.__dirtyPath) {
                    pathEl.buildPath(pathEl.path, pathEl.shape, true);
                }
                pathList.push(pathEl.path);
            }

            var pathBundle = new Path(opts);
            // Need path proxy.
            pathBundle.createPathProxy();
            pathBundle.buildPath = function (path) {
                path.appendPath(pathList);
                // Svg and vml renderer don't have context
                var ctx = path.getContext();
                if (ctx) {
                    path.rebuildPath(ctx);
                }
            };

            return pathBundle;
        }
    };
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var CMD = __webpack_require__(153).CMD;
    var vec2 = __webpack_require__(74);
    var v2ApplyTransform = vec2.applyTransform;

    var points = [[], [], []];
    var mathSqrt = Math.sqrt;
    var mathAtan2 = Math.atan2;
    function transformPath(path, m) {
        var data = path.data;
        var cmd;
        var nPoint;
        var i;
        var j;
        var k;
        var p;

        var M = CMD.M;
        var C = CMD.C;
        var L = CMD.L;
        var R = CMD.R;
        var A = CMD.A;
        var Q = CMD.Q;

        for (i = 0, j = 0; i < data.length;) {
            cmd = data[i++];
            j = i;
            nPoint = 0;

            switch (cmd) {
                case M:
                    nPoint = 1;
                    break;
                case L:
                    nPoint = 1;
                    break;
                case C:
                    nPoint = 3;
                    break;
                case Q:
                    nPoint = 2;
                    break;
                case A:
                    var x = m[4];
                    var y = m[5];
                    var sx = mathSqrt(m[0] * m[0] + m[1] * m[1]);
                    var sy = mathSqrt(m[2] * m[2] + m[3] * m[3]);
                    var angle = mathAtan2(-m[1] / sy, m[0] / sx);
                    // cx
                    data[i] *= sx;
                    data[i++] += x;
                    // cy
                    data[i] *= sy;
                    data[i++] += y;
                    // Scale rx and ry
                    // FIXME Assume psi is 0 here
                    data[i++] *= sx;
                    data[i++] *= sy;

                    // Start angle
                    data[i++] += angle;
                    // end angle
                    data[i++] += angle;
                    // FIXME psi
                    i += 2;
                    j = i;
                    break;
                case R:
                    // x0, y0
                    p[0] = data[i++];
                    p[1] = data[i++];
                    v2ApplyTransform(p, p, m);
                    data[j++] = p[0];
                    data[j++] = p[1];
                    // x1, y1
                    p[0] += data[i++];
                    p[1] += data[i++];
                    v2ApplyTransform(p, p, m);
                    data[j++] = p[0];
                    data[j++] = p[1];
            }

            for (k = 0; k < nPoint; k++) {
                var p = points[k];
                p[0] = data[i++];
                p[1] = data[i++];

                v2ApplyTransform(p, p, m);
                // Write back
                data[j++] = p[0];
                data[j++] = p[1];
            }
        }
    }

    return transformPath;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * ZRender, a high performance 2d drawing library.
 *
 * Copyright (c) 2013, Baidu Inc.
 * All rights reserved.
 *
 * LICENSE
 * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
 */
// Global defines
!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {
    var guid = __webpack_require__(336);
    var env = __webpack_require__(154);
    var zrUtil = __webpack_require__(33);

    var Handler = __webpack_require__(758);
    var Storage = __webpack_require__(761);
    var Animation = __webpack_require__(762);
    var HandlerProxy = __webpack_require__(774);

    var useVML = !env.canvasSupported;

    var painterCtors = {
        canvas: __webpack_require__(760)
    };

    var instances = {};    // ZRender实例map索引

    var zrender = {};

    /**
     * @type {string}
     */
    zrender.version = '3.5.2';

    /**
     * Initializing a zrender instance
     * @param {HTMLElement} dom
     * @param {Object} opts
     * @param {string} [opts.renderer='canvas'] 'canvas' or 'svg'
     * @param {number} [opts.devicePixelRatio]
     * @param {number|string} [opts.width] Can be 'auto' (the same as null/undefined)
     * @param {number|string} [opts.height] Can be 'auto' (the same as null/undefined)
     * @return {module:zrender/ZRender}
     */
    zrender.init = function(dom, opts) {
        var zr = new ZRender(guid(), dom, opts);
        instances[zr.id] = zr;
        return zr;
    };

    /**
     * Dispose zrender instance
     * @param {module:zrender/ZRender} zr
     */
    zrender.dispose = function (zr) {
        if (zr) {
            zr.dispose();
        }
        else {
            for (var key in instances) {
                if (instances.hasOwnProperty(key)) {
                    instances[key].dispose();
                }
            }
            instances = {};
        }

        return zrender;
    };

    /**
     * Get zrender instance by id
     * @param {string} id zrender instance id
     * @return {module:zrender/ZRender}
     */
    zrender.getInstance = function (id) {
        return instances[id];
    };

    zrender.registerPainter = function (name, Ctor) {
        painterCtors[name] = Ctor;
    };

    function delInstance(id) {
        delete instances[id];
    }

    /**
     * @module zrender/ZRender
     */
    /**
     * @constructor
     * @alias module:zrender/ZRender
     * @param {string} id
     * @param {HTMLDomElement} dom
     * @param {Object} opts
     * @param {string} [opts.renderer='canvas'] 'canvas' or 'svg'
     * @param {number} [opts.devicePixelRatio]
     * @param {number} [opts.width] Can be 'auto' (the same as null/undefined)
     * @param {number} [opts.height] Can be 'auto' (the same as null/undefined)
     */
    var ZRender = function(id, dom, opts) {

        opts = opts || {};

        /**
         * @type {HTMLDomElement}
         */
        this.dom = dom;

        /**
         * @type {string}
         */
        this.id = id;

        var self = this;
        var storage = new Storage();

        var rendererType = opts.renderer;
        // TODO WebGL
        if (useVML) {
            if (!painterCtors.vml) {
                throw new Error('You need to require \'zrender/vml/vml\' to support IE8');
            }
            rendererType = 'vml';
        }
        else if (!rendererType || !painterCtors[rendererType]) {
            rendererType = 'canvas';
        }
        var painter = new painterCtors[rendererType](dom, storage, opts);

        this.storage = storage;
        this.painter = painter;

        var handerProxy = !env.node ? new HandlerProxy(painter.getViewportRoot()) : null;
        this.handler = new Handler(storage, painter, handerProxy, painter.root);

        /**
         * @type {module:zrender/animation/Animation}
         */
        this.animation = new Animation({
            stage: {
                update: zrUtil.bind(this.flush, this)
            }
        });
        this.animation.start();

        /**
         * @type {boolean}
         * @private
         */
        this._needsRefresh;

        // 修改 storage.delFromStorage, 每次删除元素之前删除动画
        // FIXME 有点ugly
        var oldDelFromStorage = storage.delFromStorage;
        var oldAddToStorage = storage.addToStorage;

        storage.delFromStorage = function (el) {
            oldDelFromStorage.call(storage, el);

            el && el.removeSelfFromZr(self);
        };

        storage.addToStorage = function (el) {
            oldAddToStorage.call(storage, el);

            el.addSelfToZr(self);
        };
    };

    ZRender.prototype = {

        constructor: ZRender,
        /**
         * 获取实例唯一标识
         * @return {string}
         */
        getId: function () {
            return this.id;
        },

        /**
         * 添加元素
         * @param  {module:zrender/Element} el
         */
        add: function (el) {
            this.storage.addRoot(el);
            this._needsRefresh = true;
        },

        /**
         * 删除元素
         * @param  {module:zrender/Element} el
         */
        remove: function (el) {
            this.storage.delRoot(el);
            this._needsRefresh = true;
        },

        /**
         * Change configuration of layer
         * @param {string} zLevel
         * @param {Object} config
         * @param {string} [config.clearColor=0] Clear color
         * @param {string} [config.motionBlur=false] If enable motion blur
         * @param {number} [config.lastFrameAlpha=0.7] Motion blur factor. Larger value cause longer trailer
        */
        configLayer: function (zLevel, config) {
            this.painter.configLayer(zLevel, config);
            this._needsRefresh = true;
        },

        /**
         * Repaint the canvas immediately
         */
        refreshImmediately: function () {
            // Clear needsRefresh ahead to avoid something wrong happens in refresh
            // Or it will cause zrender refreshes again and again.
            this._needsRefresh = false;
            this.painter.refresh();
            /**
             * Avoid trigger zr.refresh in Element#beforeUpdate hook
             */
            this._needsRefresh = false;
        },

        /**
         * Mark and repaint the canvas in the next frame of browser
         */
        refresh: function() {
            this._needsRefresh = true;
        },

        /**
         * Perform all refresh
         */
        flush: function () {
            if (this._needsRefresh) {
                this.refreshImmediately();
            }
            if (this._needsRefreshHover) {
                this.refreshHoverImmediately();
            }
        },

        /**
         * Add element to hover layer
         * @param  {module:zrender/Element} el
         * @param {Object} style
         */
        addHover: function (el, style) {
            if (this.painter.addHover) {
                this.painter.addHover(el, style);
                this.refreshHover();
            }
        },

        /**
         * Add element from hover layer
         * @param  {module:zrender/Element} el
         */
        removeHover: function (el) {
            if (this.painter.removeHover) {
                this.painter.removeHover(el);
                this.refreshHover();
            }
        },

        /**
         * Clear all hover elements in hover layer
         * @param  {module:zrender/Element} el
         */
        clearHover: function () {
            if (this.painter.clearHover) {
                this.painter.clearHover();
                this.refreshHover();
            }
        },

        /**
         * Refresh hover in next frame
         */
        refreshHover: function () {
            this._needsRefreshHover = true;
        },

        /**
         * Refresh hover immediately
         */
        refreshHoverImmediately: function () {
            this._needsRefreshHover = false;
            this.painter.refreshHover && this.painter.refreshHover();
        },

        /**
         * Resize the canvas.
         * Should be invoked when container size is changed
         * @param {Object} [opts]
         * @param {number|string} [opts.width] Can be 'auto' (the same as null/undefined)
         * @param {number|string} [opts.height] Can be 'auto' (the same as null/undefined)
         */
        resize: function(opts) {
            opts = opts || {};
            this.painter.resize(opts.width, opts.height);
            this.handler.resize();
        },

        /**
         * Stop and clear all animation immediately
         */
        clearAnimation: function () {
            this.animation.clear();
        },

        /**
         * Get container width
         */
        getWidth: function() {
            return this.painter.getWidth();
        },

        /**
         * Get container height
         */
        getHeight: function() {
            return this.painter.getHeight();
        },

        /**
         * Export the canvas as Base64 URL
         * @param {string} type
         * @param {string} [backgroundColor='#fff']
         * @return {string} Base64 URL
         */
        // toDataURL: function(type, backgroundColor) {
        //     return this.painter.getRenderedCanvas({
        //         backgroundColor: backgroundColor
        //     }).toDataURL(type);
        // },

        /**
         * Converting a path to image.
         * It has much better performance of drawing image rather than drawing a vector path.
         * @param {module:zrender/graphic/Path} e
         * @param {number} width
         * @param {number} height
         */
        pathToImage: function(e, dpr) {
            return this.painter.pathToImage(e, dpr);
        },

        /**
         * Set default cursor
         * @param {string} [cursorStyle='default'] 例如 crosshair
         */
        setCursorStyle: function (cursorStyle) {
            this.handler.setCursorStyle(cursorStyle);
        },

        /**
         * Find hovered element
         * @param {number} x
         * @param {number} y
         * @return {Object} {target, topTarget}
         */
        findHover: function (x, y) {
            return this.handler.findHover(x, y);
        },

        /**
         * Bind event
         *
         * @param {string} eventName Event name
         * @param {Function} eventHandler Handler function
         * @param {Object} [context] Context object
         */
        on: function(eventName, eventHandler, context) {
            this.handler.on(eventName, eventHandler, context);
        },

        /**
         * Unbind event
         * @param {string} eventName Event name
         * @param {Function} [eventHandler] Handler function
         */
        off: function(eventName, eventHandler) {
            this.handler.off(eventName, eventHandler);
        },

        /**
         * Trigger event manually
         *
         * @param {string} eventName Event name
         * @param {event=} event Event object
         */
        trigger: function (eventName, event) {
            this.handler.trigger(eventName, event);
        },


        /**
         * Clear all objects and the canvas.
         */
        clear: function () {
            this.storage.delRoot();
            this.painter.clear();
        },

        /**
         * Dispose self.
         */
        dispose: function () {
            this.animation.stop();

            this.clear();
            this.storage.dispose();
            this.painter.dispose();
            this.handler.dispose();

            this.animation =
            this.storage =
            this.painter =
            this.handler = null;

            delInstance(this.id);
        }
    };

    return zrender;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies.
 */

var keys = __webpack_require__(655);
var hasBinary = __webpack_require__(270);
var sliceBuffer = __webpack_require__(400);
var after = __webpack_require__(461);
var utf8 = __webpack_require__(656);

var base64encoder;
if (global && global.ArrayBuffer) {
  base64encoder = __webpack_require__(402);
}

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */
var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);

/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */
var dontSendBlobs = isAndroid || isPhantomJS;

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
    open:     0    // non-ws
  , close:    1    // non-ws
  , ping:     2
  , pong:     3
  , message:  4
  , upgrade:  5
  , noop:     6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = __webpack_require__(399);

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if (typeof utf8encode === 'function') {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = (packet.data === undefined)
    ? undefined
    : packet.data.buffer || packet.data;

  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (Blob && data instanceof global.Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // might be an object with { base64: true, data: dataAsBase64String }
  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
  }

  return callback('' + encoded);

};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i+1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function() {
    packet.data = fr.result;
    exports.encodePacket(packet, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function(packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (Blob && packet.data instanceof global.Blob) {
    var fr = new FileReader();
    fr.onload = function() {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += global.btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  if (data === undefined) {
    return err;
  }
  // String data
  if (typeof data === 'string') {
    if (data.charAt(0) === 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      data = tryDecode(data);
      if (data === false) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

function tryDecode(data) {
  try {
    data = utf8.decode(data, { strict: false });
  } catch (e) {
    return false;
  }
  return data;
}

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function(msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!base64encoder) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function(message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function(i, el, cb) {
    each(el, function(error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data !== 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data === '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = '', n, msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (chr !== ':') {
      length += chr;
      continue;
    }

    if (length === '' || (length != (n = Number(length)))) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    msg = data.substr(i + 1, n);

    if (length != msg.length) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    if (msg.length) {
      packet = exports.decodePacket(msg, binaryType, false);

      if (err.type === packet.type && err.data === packet.data) {
        // parser error in individual packet - ignoring payload
        return callback(err, 0, 1);
      }

      var ret = callback(packet, i + n, l);
      if (false === ret) return;
    }

    // advance cursor
    i += n;
    length = '';
  }

  if (length !== '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function(packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function(err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function(acc, p) {
      var len;
      if (typeof p === 'string'){
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function(p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) { // not true binary
        resultArray[bufferIndex++] = 0;
      } else { // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function(packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = (encoded instanceof ArrayBuffer)
        ? encoded.byteLength
        : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1; ; i++) {
      if (tailArray[i] === 255) break;

      // 310 = char length of Number.MAX_VALUE
      if (msgLength.length > 310) {
        return callback(err, 0, 1);
      }

      msgLength += tailArray[i];
    }

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function(buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @module echarts/core/BoundingRect
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {
    'use strict';

    var vec2 = __webpack_require__(74);
    var matrix = __webpack_require__(338);

    var v2ApplyTransform = vec2.applyTransform;
    var mathMin = Math.min;
    var mathMax = Math.max;
    /**
     * @alias module:echarts/core/BoundingRect
     */
    function BoundingRect(x, y, width, height) {

        if (width < 0) {
            x = x + width;
            width = -width;
        }
        if (height < 0) {
            y = y + height;
            height = -height;
        }

        /**
         * @type {number}
         */
        this.x = x;
        /**
         * @type {number}
         */
        this.y = y;
        /**
         * @type {number}
         */
        this.width = width;
        /**
         * @type {number}
         */
        this.height = height;
    }

    BoundingRect.prototype = {

        constructor: BoundingRect,

        /**
         * @param {module:echarts/core/BoundingRect} other
         */
        union: function (other) {
            var x = mathMin(other.x, this.x);
            var y = mathMin(other.y, this.y);

            this.width = mathMax(
                    other.x + other.width,
                    this.x + this.width
                ) - x;
            this.height = mathMax(
                    other.y + other.height,
                    this.y + this.height
                ) - y;
            this.x = x;
            this.y = y;
        },

        /**
         * @param {Array.<number>} m
         * @methods
         */
        applyTransform: (function () {
            var lt = [];
            var rb = [];
            var lb = [];
            var rt = [];
            return function (m) {
                // In case usage like this
                // el.getBoundingRect().applyTransform(el.transform)
                // And element has no transform
                if (!m) {
                    return;
                }
                lt[0] = lb[0] = this.x;
                lt[1] = rt[1] = this.y;
                rb[0] = rt[0] = this.x + this.width;
                rb[1] = lb[1] = this.y + this.height;

                v2ApplyTransform(lt, lt, m);
                v2ApplyTransform(rb, rb, m);
                v2ApplyTransform(lb, lb, m);
                v2ApplyTransform(rt, rt, m);

                this.x = mathMin(lt[0], rb[0], lb[0], rt[0]);
                this.y = mathMin(lt[1], rb[1], lb[1], rt[1]);
                var maxX = mathMax(lt[0], rb[0], lb[0], rt[0]);
                var maxY = mathMax(lt[1], rb[1], lb[1], rt[1]);
                this.width = maxX - this.x;
                this.height = maxY - this.y;
            };
        })(),

        /**
         * Calculate matrix of transforming from self to target rect
         * @param  {module:zrender/core/BoundingRect} b
         * @return {Array.<number>}
         */
        calculateTransform: function (b) {
            var a = this;
            var sx = b.width / a.width;
            var sy = b.height / a.height;

            var m = matrix.create();

            // 矩阵右乘
            matrix.translate(m, m, [-a.x, -a.y]);
            matrix.scale(m, m, [sx, sy]);
            matrix.translate(m, m, [b.x, b.y]);

            return m;
        },

        /**
         * @param {(module:echarts/core/BoundingRect|Object)} b
         * @return {boolean}
         */
        intersect: function (b) {
            if (!b) {
                return false;
            }

            if (!(b instanceof BoundingRect)) {
                // Normalize negative width/height.
                b = BoundingRect.create(b);
            }

            var a = this;
            var ax0 = a.x;
            var ax1 = a.x + a.width;
            var ay0 = a.y;
            var ay1 = a.y + a.height;

            var bx0 = b.x;
            var bx1 = b.x + b.width;
            var by0 = b.y;
            var by1 = b.y + b.height;

            return ! (ax1 < bx0 || bx1 < ax0 || ay1 < by0 || by1 < ay0);
        },

        contain: function (x, y) {
            var rect = this;
            return x >= rect.x
                && x <= (rect.x + rect.width)
                && y >= rect.y
                && y <= (rect.y + rect.height);
        },

        /**
         * @return {module:echarts/core/BoundingRect}
         */
        clone: function () {
            return new BoundingRect(this.x, this.y, this.width, this.height);
        },

        /**
         * Copy from another rect
         */
        copy: function (other) {
            this.x = other.x;
            this.y = other.y;
            this.width = other.width;
            this.height = other.height;
        },

        plain: function () {
            return {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            };
        }
    };

    /**
     * @param {Object|module:zrender/core/BoundingRect} rect
     * @param {number} rect.x
     * @param {number} rect.y
     * @param {number} rect.width
     * @param {number} rect.height
     * @return {module:zrender/core/BoundingRect}
     */
    BoundingRect.create = function (rect) {
        return new BoundingRect(rect.x, rect.y, rect.width, rect.height);
    };

    return BoundingRect;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * 曲线辅助模块
 * @module zrender/core/curve
 * @author pissang(https://www.github.com/pissang)
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

    'use strict';

    var vec2 = __webpack_require__(74);
    var v2Create = vec2.create;
    var v2DistSquare = vec2.distSquare;
    var mathPow = Math.pow;
    var mathSqrt = Math.sqrt;

    var EPSILON = 1e-8;
    var EPSILON_NUMERIC = 1e-4;

    var THREE_SQRT = mathSqrt(3);
    var ONE_THIRD = 1 / 3;

    // 临时变量
    var _v0 = v2Create();
    var _v1 = v2Create();
    var _v2 = v2Create();
    // var _v3 = vec2.create();

    function isAroundZero(val) {
        return val > -EPSILON && val < EPSILON;
    }
    function isNotAroundZero(val) {
        return val > EPSILON || val < -EPSILON;
    }
    /**
     * 计算三次贝塞尔值
     * @memberOf module:zrender/core/curve
     * @param  {number} p0
     * @param  {number} p1
     * @param  {number} p2
     * @param  {number} p3
     * @param  {number} t
     * @return {number}
     */
    function cubicAt(p0, p1, p2, p3, t) {
        var onet = 1 - t;
        return onet * onet * (onet * p0 + 3 * t * p1)
             + t * t * (t * p3 + 3 * onet * p2);
    }

    /**
     * 计算三次贝塞尔导数值
     * @memberOf module:zrender/core/curve
     * @param  {number} p0
     * @param  {number} p1
     * @param  {number} p2
     * @param  {number} p3
     * @param  {number} t
     * @return {number}
     */
    function cubicDerivativeAt(p0, p1, p2, p3, t) {
        var onet = 1 - t;
        return 3 * (
            ((p1 - p0) * onet + 2 * (p2 - p1) * t) * onet
            + (p3 - p2) * t * t
        );
    }

    /**
     * 计算三次贝塞尔方程根，使用盛金公式
     * @memberOf module:zrender/core/curve
     * @param  {number} p0
     * @param  {number} p1
     * @param  {number} p2
     * @param  {number} p3
     * @param  {number} val
     * @param  {Array.<number>} roots
     * @return {number} 有效根数目
     */
    function cubicRootAt(p0, p1, p2, p3, val, roots) {
        // Evaluate roots of cubic functions
        var a = p3 + 3 * (p1 - p2) - p0;
        var b = 3 * (p2 - p1 * 2 + p0);
        var c = 3 * (p1  - p0);
        var d = p0 - val;

        var A = b * b - 3 * a * c;
        var B = b * c - 9 * a * d;
        var C = c * c - 3 * b * d;

        var n = 0;

        if (isAroundZero(A) && isAroundZero(B)) {
            if (isAroundZero(b)) {
                roots[0] = 0;
            }
            else {
                var t1 = -c / b;  //t1, t2, t3, b is not zero
                if (t1 >= 0 && t1 <= 1) {
                    roots[n++] = t1;
                }
            }
        }
        else {
            var disc = B * B - 4 * A * C;

            if (isAroundZero(disc)) {
                var K = B / A;
                var t1 = -b / a + K;  // t1, a is not zero
                var t2 = -K / 2;  // t2, t3
                if (t1 >= 0 && t1 <= 1) {
                    roots[n++] = t1;
                }
                if (t2 >= 0 && t2 <= 1) {
                    roots[n++] = t2;
                }
            }
            else if (disc > 0) {
                var discSqrt = mathSqrt(disc);
                var Y1 = A * b + 1.5 * a * (-B + discSqrt);
                var Y2 = A * b + 1.5 * a * (-B - discSqrt);
                if (Y1 < 0) {
                    Y1 = -mathPow(-Y1, ONE_THIRD);
                }
                else {
                    Y1 = mathPow(Y1, ONE_THIRD);
                }
                if (Y2 < 0) {
                    Y2 = -mathPow(-Y2, ONE_THIRD);
                }
                else {
                    Y2 = mathPow(Y2, ONE_THIRD);
                }
                var t1 = (-b - (Y1 + Y2)) / (3 * a);
                if (t1 >= 0 && t1 <= 1) {
                    roots[n++] = t1;
                }
            }
            else {
                var T = (2 * A * b - 3 * a * B) / (2 * mathSqrt(A * A * A));
                var theta = Math.acos(T) / 3;
                var ASqrt = mathSqrt(A);
                var tmp = Math.cos(theta);

                var t1 = (-b - 2 * ASqrt * tmp) / (3 * a);
                var t2 = (-b + ASqrt * (tmp + THREE_SQRT * Math.sin(theta))) / (3 * a);
                var t3 = (-b + ASqrt * (tmp - THREE_SQRT * Math.sin(theta))) / (3 * a);
                if (t1 >= 0 && t1 <= 1) {
                    roots[n++] = t1;
                }
                if (t2 >= 0 && t2 <= 1) {
                    roots[n++] = t2;
                }
                if (t3 >= 0 && t3 <= 1) {
                    roots[n++] = t3;
                }
            }
        }
        return n;
    }

    /**
     * 计算三次贝塞尔方程极限值的位置
     * @memberOf module:zrender/core/curve
     * @param  {number} p0
     * @param  {number} p1
     * @param  {number} p2
     * @param  {number} p3
     * @param  {Array.<number>} extrema
     * @return {number} 有效数目
     */
    function cubicExtrema(p0, p1, p2, p3, extrema) {
        var b = 6 * p2 - 12 * p1 + 6 * p0;
        var a = 9 * p1 + 3 * p3 - 3 * p0 - 9 * p2;
        var c = 3 * p1 - 3 * p0;

        var n = 0;
        if (isAroundZero(a)) {
            if (isNotAroundZero(b)) {
                var t1 = -c / b;
                if (t1 >= 0 && t1 <=1) {
                    extrema[n++] = t1;
                }
            }
        }
        else {
            var disc = b * b - 4 * a * c;
            if (isAroundZero(disc)) {
                extrema[0] = -b / (2 * a);
            }
            else if (disc > 0) {
                var discSqrt = mathSqrt(disc);
                var t1 = (-b + discSqrt) / (2 * a);
                var t2 = (-b - discSqrt) / (2 * a);
                if (t1 >= 0 && t1 <= 1) {
                    extrema[n++] = t1;
                }
                if (t2 >= 0 && t2 <= 1) {
                    extrema[n++] = t2;
                }
            }
        }
        return n;
    }

    /**
     * 细分三次贝塞尔曲线
     * @memberOf module:zrender/core/curve
     * @param  {number} p0
     * @param  {number} p1
     * @param  {number} p2
     * @param  {number} p3
     * @param  {number} t
     * @param  {Array.<number>} out
     */
    function cubicSubdivide(p0, p1, p2, p3, t, out) {
        var p01 = (p1 - p0) * t + p0;
        var p12 = (p2 - p1) * t + p1;
        var p23 = (p3 - p2) * t + p2;

        var p012 = (p12 - p01) * t + p01;
        var p123 = (p23 - p12) * t + p12;

        var p0123 = (p123 - p012) * t + p012;
        // Seg0
        out[0] = p0;
        out[1] = p01;
        out[2] = p012;
        out[3] = p0123;
        // Seg1
        out[4] = p0123;
        out[5] = p123;
        out[6] = p23;
        out[7] = p3;
    }

    /**
     * 投射点到三次贝塞尔曲线上，返回投射距离。
     * 投射点有可能会有一个或者多个，这里只返回其中距离最短的一个。
     * @param {number} x0
     * @param {number} y0
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     * @param {number} x3
     * @param {number} y3
     * @param {number} x
     * @param {number} y
     * @param {Array.<number>} [out] 投射点
     * @return {number}
     */
    function cubicProjectPoint(
        x0, y0, x1, y1, x2, y2, x3, y3,
        x, y, out
    ) {
        // http://pomax.github.io/bezierinfo/#projections
        var t;
        var interval = 0.005;
        var d = Infinity;
        var prev;
        var next;
        var d1;
        var d2;

        _v0[0] = x;
        _v0[1] = y;

        // 先粗略估计一下可能的最小距离的 t 值
        // PENDING
        for (var _t = 0; _t < 1; _t += 0.05) {
            _v1[0] = cubicAt(x0, x1, x2, x3, _t);
            _v1[1] = cubicAt(y0, y1, y2, y3, _t);
            d1 = v2DistSquare(_v0, _v1);
            if (d1 < d) {
                t = _t;
                d = d1;
            }
        }
        d = Infinity;

        // At most 32 iteration
        for (var i = 0; i < 32; i++) {
            if (interval < EPSILON_NUMERIC) {
                break;
            }
            prev = t - interval;
            next = t + interval;
            // t - interval
            _v1[0] = cubicAt(x0, x1, x2, x3, prev);
            _v1[1] = cubicAt(y0, y1, y2, y3, prev);

            d1 = v2DistSquare(_v1, _v0);

            if (prev >= 0 && d1 < d) {
                t = prev;
                d = d1;
            }
            else {
                // t + interval
                _v2[0] = cubicAt(x0, x1, x2, x3, next);
                _v2[1] = cubicAt(y0, y1, y2, y3, next);
                d2 = v2DistSquare(_v2, _v0);

                if (next <= 1 && d2 < d) {
                    t = next;
                    d = d2;
                }
                else {
                    interval *= 0.5;
                }
            }
        }
        // t
        if (out) {
            out[0] = cubicAt(x0, x1, x2, x3, t);
            out[1] = cubicAt(y0, y1, y2, y3, t);
        }
        // console.log(interval, i);
        return mathSqrt(d);
    }

    /**
     * 计算二次方贝塞尔值
     * @param  {number} p0
     * @param  {number} p1
     * @param  {number} p2
     * @param  {number} t
     * @return {number}
     */
    function quadraticAt(p0, p1, p2, t) {
        var onet = 1 - t;
        return onet * (onet * p0 + 2 * t * p1) + t * t * p2;
    }

    /**
     * 计算二次方贝塞尔导数值
     * @param  {number} p0
     * @param  {number} p1
     * @param  {number} p2
     * @param  {number} t
     * @return {number}
     */
    function quadraticDerivativeAt(p0, p1, p2, t) {
        return 2 * ((1 - t) * (p1 - p0) + t * (p2 - p1));
    }

    /**
     * 计算二次方贝塞尔方程根
     * @param  {number} p0
     * @param  {number} p1
     * @param  {number} p2
     * @param  {number} t
     * @param  {Array.<number>} roots
     * @return {number} 有效根数目
     */
    function quadraticRootAt(p0, p1, p2, val, roots) {
        var a = p0 - 2 * p1 + p2;
        var b = 2 * (p1 - p0);
        var c = p0 - val;

        var n = 0;
        if (isAroundZero(a)) {
            if (isNotAroundZero(b)) {
                var t1 = -c / b;
                if (t1 >= 0 && t1 <= 1) {
                    roots[n++] = t1;
                }
            }
        }
        else {
            var disc = b * b - 4 * a * c;
            if (isAroundZero(disc)) {
                var t1 = -b / (2 * a);
                if (t1 >= 0 && t1 <= 1) {
                    roots[n++] = t1;
                }
            }
            else if (disc > 0) {
                var discSqrt = mathSqrt(disc);
                var t1 = (-b + discSqrt) / (2 * a);
                var t2 = (-b - discSqrt) / (2 * a);
                if (t1 >= 0 && t1 <= 1) {
                    roots[n++] = t1;
                }
                if (t2 >= 0 && t2 <= 1) {
                    roots[n++] = t2;
                }
            }
        }
        return n;
    }

    /**
     * 计算二次贝塞尔方程极限值
     * @memberOf module:zrender/core/curve
     * @param  {number} p0
     * @param  {number} p1
     * @param  {number} p2
     * @return {number}
     */
    function quadraticExtremum(p0, p1, p2) {
        var divider = p0 + p2 - 2 * p1;
        if (divider === 0) {
            // p1 is center of p0 and p2
            return 0.5;
        }
        else {
            return (p0 - p1) / divider;
        }
    }

    /**
     * 细分二次贝塞尔曲线
     * @memberOf module:zrender/core/curve
     * @param  {number} p0
     * @param  {number} p1
     * @param  {number} p2
     * @param  {number} t
     * @param  {Array.<number>} out
     */
    function quadraticSubdivide(p0, p1, p2, t, out) {
        var p01 = (p1 - p0) * t + p0;
        var p12 = (p2 - p1) * t + p1;
        var p012 = (p12 - p01) * t + p01;

        // Seg0
        out[0] = p0;
        out[1] = p01;
        out[2] = p012;

        // Seg1
        out[3] = p012;
        out[4] = p12;
        out[5] = p2;
    }

    /**
     * 投射点到二次贝塞尔曲线上，返回投射距离。
     * 投射点有可能会有一个或者多个，这里只返回其中距离最短的一个。
     * @param {number} x0
     * @param {number} y0
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     * @param {number} x
     * @param {number} y
     * @param {Array.<number>} out 投射点
     * @return {number}
     */
    function quadraticProjectPoint(
        x0, y0, x1, y1, x2, y2,
        x, y, out
    ) {
        // http://pomax.github.io/bezierinfo/#projections
        var t;
        var interval = 0.005;
        var d = Infinity;

        _v0[0] = x;
        _v0[1] = y;

        // 先粗略估计一下可能的最小距离的 t 值
        // PENDING
        for (var _t = 0; _t < 1; _t += 0.05) {
            _v1[0] = quadraticAt(x0, x1, x2, _t);
            _v1[1] = quadraticAt(y0, y1, y2, _t);
            var d1 = v2DistSquare(_v0, _v1);
            if (d1 < d) {
                t = _t;
                d = d1;
            }
        }
        d = Infinity;

        // At most 32 iteration
        for (var i = 0; i < 32; i++) {
            if (interval < EPSILON_NUMERIC) {
                break;
            }
            var prev = t - interval;
            var next = t + interval;
            // t - interval
            _v1[0] = quadraticAt(x0, x1, x2, prev);
            _v1[1] = quadraticAt(y0, y1, y2, prev);

            var d1 = v2DistSquare(_v1, _v0);

            if (prev >= 0 && d1 < d) {
                t = prev;
                d = d1;
            }
            else {
                // t + interval
                _v2[0] = quadraticAt(x0, x1, x2, next);
                _v2[1] = quadraticAt(y0, y1, y2, next);
                var d2 = v2DistSquare(_v2, _v0);
                if (next <= 1 && d2 < d) {
                    t = next;
                    d = d2;
                }
                else {
                    interval *= 0.5;
                }
            }
        }
        // t
        if (out) {
            out[0] = quadraticAt(x0, x1, x2, t);
            out[1] = quadraticAt(y0, y1, y2, t);
        }
        // console.log(interval, i);
        return mathSqrt(d);
    }

    return {

        cubicAt: cubicAt,

        cubicDerivativeAt: cubicDerivativeAt,

        cubicRootAt: cubicRootAt,

        cubicExtrema: cubicExtrema,

        cubicSubdivide: cubicSubdivide,

        cubicProjectPoint: cubicProjectPoint,

        quadraticAt: quadraticAt,

        quadraticDerivativeAt: quadraticDerivativeAt,

        quadraticRootAt: quadraticRootAt,

        quadraticExtremum: quadraticExtremum,

        quadraticSubdivide: quadraticSubdivide,

        quadraticProjectPoint: quadraticProjectPoint
    };
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

},[1026]);