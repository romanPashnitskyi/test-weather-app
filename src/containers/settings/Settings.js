import React, { Component } from 'react';
import {connect} from 'react-redux';

import {checkboxHandler} from './../../actions/settingsAction';
import './Settings.scss';

class Settings extends Component {

    unitsConvertor = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <div className='settings'>
                <h2 className='settings__subtitle'>Units</h2>
                <label className='toggle-label'>
                    <input type='checkbox'
                           checked={ this.props.settings.isChecked }
                           onChange={ () => this.props.checkboxHandler(this.props.settings.isChecked)}
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

}

const mapStateToProps = (state) => {
    return {
        settings: state.settings
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkboxHandler: (isChecked) => {
            dispatch(checkboxHandler(isChecked))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
