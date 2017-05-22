import Migrate from '../migrate/migrate';
import React, { Component } from 'react';
import 'normalize.css';
import './app.scss';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nodes: {},
            edges: []
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
            edges: edges
        });
    }

    render() {
        return (
            <div className='app'>
                <Migrate nodes={this.state.nodes} edges={this.state.edges} />
            </div>
        );
    }
}