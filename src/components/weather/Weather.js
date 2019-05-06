import React, {Component} from 'react';
import './Weather.scss';

class Weather extends Component {

    render() {
        const {list, day} = this.props;
        const weekday = { weekday: 'long' };
        const dateDay = { day: 'numeric' };
        const month = { month: 'long' };

        return (
            <div className='weather__days-of-week'>
                <div className='weather__top'>
                    <div className='weather__temp'>
                        {list[0].temp.toFixed(0)}{list[0].units === 'metric' ? '°C' : '°F'}
                    </div>
                    <div className='weather__description'>
                        {list[0].description.charAt(0).toUpperCase() + list[0].description.slice(1)}
                    </div>
                </div>
                <div className='weather__bottom'>
                    <div className='weather__weekday'>
                        {new Date(day).toLocaleDateString("en-US", weekday)}
                    </div>
                    <div className='weather__day-month'>
                        <div className='weather__day'>
                            {new Date(day).toLocaleDateString("en-US", dateDay)}
                        </div>
                        <div className='weather__month'>
                            {new Date(day).toLocaleDateString("en-US", month)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Weather;
