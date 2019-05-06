import React, { Component } from 'react';
import './Settings.scss';

class Settings extends Component {

    state = {
        isChecked: false
    };

    render() {
        return (
            <div className='settings'>
                <h2 className='settings__subtitle'>Units</h2>
                <label className='toggle-label'>
                    <input type='checkbox'
                           checked={ this.state.isChecked}
                           onChange={ this.checkboxHandler.bind(this)}
                           className='inp-check'
                           />
                    <span className='back'>
                    <span className='toggle'></span>
                        <span className='label on'>C</span>
                        <span className='label off'>F</span>
                    </span>
                </label>
                <h2 className='settings__subtitle'>System Settings</h2>
                <button
                    className='settings__button'
                    onClick={this.unitsConvertor.bind(this)}>
                    Reset Cache
                </button>
            </div>
        );
    }

    unitsConvertor = () => {
        this.props.history.push('/', {
            isChecked : this.state.isChecked === false ? 'metric' : 'imperial'
        });
    };

    checkboxHandler() {
        this.setState({
            isChecked: !this.state.isChecked
        });
    }
}

export default Settings;
