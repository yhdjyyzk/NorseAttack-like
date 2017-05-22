import React, { PureComponent } from 'react';
import './infoContainer.scss';

export default class InfoContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                {this.props.children}
            </div>
        )
    }
}