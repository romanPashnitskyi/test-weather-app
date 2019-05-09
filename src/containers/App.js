import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchData} from '../actions/appAction';
import Title from './../components/title/Title';
import WeatherList from '../components/weatherList/WeatherList';
import './App.scss';

class App extends Component {

    componentDidMount() {
        const detectLocation = new Promise((resolve, reject) => {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    resolve(position.coords);
                }, (error) => {
                    if (error.code === error.PERMISSION_DENIED) {
                        console.error('Error detecting location.');
                    }
                });
            }
        });

        detectLocation.then((location) => {
            this.props.fetchData(location, this.props.settings.isChecked)
        }).catch(() => {
            this.props.fetchData('london', this.props.settings.isChecked)
        });
    }

    render() {
        return (
            this.props.app.data === null ? '' : (
                <div className='app'>
                    <div className='app__title'>
                        <Title city={this.props.app.data.city.name} />
                    </div>
                    <WeatherList
                        list={this.props.app.data.list}
                        units={this.props.settings.isChecked}
                    />
                </div>
            )
        );
    }
}

const mapStateToProps = (state) => {
    return {
        app: state.app,
        settings: state.settings
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (location, units) => {
            dispatch(fetchData(location, units))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
