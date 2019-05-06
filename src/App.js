import React, { Component } from 'react';
import Title from './components/title/Title';
import WeatherList from './components/weatherList/WeatherList';
import './App.scss';

class App extends Component {

    constructor() {
        super();
        this.state = {
            city: null,
            list: null,
            units: null
        };
    }

    componentDidMount() {
        const detectLocation = new Promise((resolve, reject) => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    resolve(position.coords);
                }, (error) => {
                    if (error.code === error.PERMISSION_DENIED) {
                        console.error("Error detecting location.");
                    }
                });
            }
        });

        detectLocation.then((location) => {
            this.weatherApiRequest(location)
        }).catch(() => {
            this.weatherApiRequest("london")
        });
    }

    weatherApiRequest = (location) => {
        const API_KEY = "bd2ae3f21976f0f86cc5e88e358b72bd";
        const units = this.props.history.location.state === undefined
            ? 'metric'
            : this.props.history.location.state.isChecked;
        const { latitude, longitude } = location || {};
        const URL = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&units=${units}&cnt=16&APPID=${API_KEY}`;

        fetch(URL)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    list: data.list,
                    city: data.city.name,
                    units: units
                });
            })
    };

    render() {
        return (
            this.state.list === null ? '' : (
                <div className='app'>
                    <div className='app__title'>
                        <Title city={this.state.city}/>
                    </div>
                    <WeatherList
                        list={this.state.list}
                        units={this.state.units}
                    />
                </div>
            )
        )
    }
}

export default App;
