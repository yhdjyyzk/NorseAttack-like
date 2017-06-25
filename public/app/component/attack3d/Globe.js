import $ from 'jquery';
import echarts from 'echarts';
import gl from 'echarts-gl';
import React, { PureComponent } from 'react';
import './globe.scss';

export default class Globe extends PureComponent {
    constructor(props) {
        super(props);

        // this.state={
        //     width: null,
        //     height: null
        // };

        // this._fullScreenClick = this._fullScreenClick.bind(this);
    }

    componentDidMount() {
        echarts - gl
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

            data: [
                [
                    [117, 39], // 起点的经纬度坐标
                    [117, 10]
                ]  // 终点的经纬度坐标
            ]
        };

        var chart = echarts.init(this.refs.globe);

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

    render() {
        return (
            <div>
                <div ref='globe' className='globe'>
                </div>
                {/*<div className='btn' onClick={this._fullScreenClick}>全屏</div>*/}
            </div>
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
}