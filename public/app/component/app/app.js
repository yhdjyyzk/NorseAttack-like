import Attack from '../attack2d/Attack';
import Detector from '../../util/Detector';
import Globe from '../attack3d/Globe';
import InfoContainer from '../InfoContainer/InfoContainer';
import InfoPanel from '../InfoPanel/InfoPanel';
import io from 'socket.io-client';
import React, { PureComponent } from 'react';
import 'normalize.css';
import './app.scss';

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            nodes: {},
            edges: [],
            flight: [],
            origins: [],//攻击源
            types: [],//攻击类型
            targets: [], //攻击目标
            attacks: [], //实时信息
        };
    }

    componentWillMount() {
        let nodes = {
            Beijing: {
                lng: 116.5,
                lat: 39.8,
                count: 100
            },
            Hangzhou: {
                lng: 120,
                lat: 30.2,
                count: 80
            },
            Guangzhou: {
                lng: 113,
                lat: 23,
                count: 60
            },
            Xian: {
                lng: 109,
                lat: 34.5,
                count: 70
            },
            Kunming: {
                lng: 105,
                lat: 23,
                count: 50
            }
        };

        let edges = [
            {
                from: nodes['Beijing'],
                to: nodes['Kunming']
            },
            {
                from: nodes['Xian'],
                to: nodes['Hangzhou']
            }
        ];

        this.setState({
            nodes: nodes,
            edges: edges,
            flight: [
                [
                    [120, 66], // 起点的经纬度坐标
                    [122, 67]  // 终点的经纬度坐标
                ]
            ]
        });
    }

    componentDidMount() {
        let socket = io('http://localhost:4000');

        socket.on('connect', (c) => {
            console.log("连接成功..." + new Date().getTime());
            socket.emit('hello', 'hello world!');
        });

        socket.on('disconnect', () => {
            console.log('you have been disconnected.')
        });

        socket.on('reconnect', () => {
            console.log('you have been reconnected');
        });

        socket.on('reconnect_error', () => {
            console.log('attempt to reconnect has failed');
        });
    }

    render() {
        let origins = new Array(5).fill(0).map((d, i) => {
            return {
                N: '1',
                COUNTRY: 'China',
            }
        });

        let types = new Array(3).fill(0).map((d, i) => {
            return {
                N: 1,
                PORT: 222,
                ' SERVICE TYPE': 'smtp'
            }
        });

        let targets = new Array(5).fill(0).map((d, i) => {
            return {
                N: '11',
                COUNTRY: 'America',
            }
        });

        let attacks = new Array(2).fill(0).map((d, i) => {
            return {
                TIMESTAMP: '2017.1.2.17:27:12',
                ATTACKER: 'TOM'
            }
        });

        return (
            <div className='app'>
                <Attack nodes={this.state.nodes} edges={this.state.edges} />
                <InfoContainer>
                    <InfoPanel items={origins} title='ATTACK ORIGINS' />
                    <InfoPanel items={types} title='ATTACK TYPES' />
                    <InfoPanel items={targets} title='ATTACK TARGETS' />
                    <InfoPanel items={attacks} title='LIVE ATTACKS' />
                    {Detector.webgl ? <Globe data={this.state.flight} /> : null}
                </InfoContainer>
            </div>
        );
    }
}