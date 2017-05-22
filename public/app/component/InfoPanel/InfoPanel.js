import React, { PureComponent } from 'react';
import './infoPanel.scss';

export default class InfoPanel extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let cols = Object.keys(this.props.items[0]).length;

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