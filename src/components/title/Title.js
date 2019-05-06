import React, {Component} from 'react';
import './Title.scss';

class Title extends Component {
    render() {
        return (
            <div className='title'>
                <h1>Weather At <span>{this.props.city}</span></h1>
            </div>
        );
    }
}

export default Title;
