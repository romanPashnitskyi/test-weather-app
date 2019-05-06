import React, { Component } from 'react';
import Title from './components/title/Title';
import WeatherList from './components/weatherList/WeatherList';
import './App.scss';

class App extends Component {

    constructor() {
        super();
        this.state = {
            city: null,
            list: null
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
        const API_KEY = "88b02751c8e68dbd9f16f1ec44a95838";
        const units = this.props.history.location.state === undefined
                ? 'metric'
                : this.props.history.location.state.isChecked;
        const { latitude, longitude } = location || {};
        const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${units}&appid=${API_KEY}`;

        fetch(URL)
            .then(response => response.json())
            .then((data) => {
                let processedList = [];
                for (let item of data.list) {
                    const aDate = item.dt_txt.split(' ');
                    if (!processedList[aDate[0]]) {
                        processedList[aDate[0]] = [];
                    }
                    processedList[aDate[0]].push({
                        hour: aDate[1].substr(0, 5),
                        temp: item.main.temp,
                        icon: `https://openweathermap.org/img/w/${item.weather[0].icon}.png`,
                        description: item.weather[0].description,
                        units: units
                    })
                }
                this.setState({
                    list: processedList,
                    city: data.city.name,
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
                    <WeatherList list={this.state.list}/>
                </div>
            )
        )
    }
}

export default App;
