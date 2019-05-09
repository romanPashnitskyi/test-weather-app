import React, {Component} from 'react';
import './Weather.scss';

class Weather extends Component {

    render() {
        const {list, units} = this.props;
        const weekday = { weekday: 'long' };
        const dateDay = { day: 'numeric' };
        const month = { month: 'long' };

        return (
            <div className='weather__days-of-week'>
                <div className='weather__top'>
                    <div className='weather__temp'>
                        {list.temp.day.toFixed(0)}{units === false ? '°C' : '°F'}
                    </div>
                    <div className='weather__description'>
                        {list.weather[0].description.charAt(0).toUpperCase() + list.weather[0].description.slice(1)}
                    </div>
                </div>
                <div className='weather__bottom'>
                    <div className='weather__weekday'>
                        {new Date(list.dt * 1000).toLocaleDateString("en-US", weekday)}
                    </div>
                    <div className='weather__day-month'>
                        <div className='weather__day'>
                            {new Date(list.dt * 1000).toLocaleDateString("en-US", dateDay)}
                        </div>
                        <div className='weather__month'>
                            {new Date(list.dt * 1000).toLocaleDateString("en-US", month)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Weather;
