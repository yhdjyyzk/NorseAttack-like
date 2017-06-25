import React, { Component } from 'react';
import './infoPanel.scss';

export default class InfoPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let cols = (this.props.items && this.props.items.length > 0)
        //     ? Object.keys(this.props.items[0]).length : 0;

        return (
            <div className='infoPanel' style={{ width: this.props.width, height: this.props.height }}>
                <div className='title'>{this.props.title}</div>
                <div className='items'>
                    {
                        this.props.items.map((d, i) => {
                            return (
                                <div key={`${i}`} className='row'>
                                    {
                                        Object.keys(this.props.items[0]).map((k, i) => {
                                            return (
                                                <div key={`${i}`} className='item'>{d[k]}</div>
                                            );
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}