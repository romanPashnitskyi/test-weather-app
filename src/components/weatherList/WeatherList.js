import React, {Component} from 'react';
import './WeatherList.scss';
import Weather from '../weather/Weather';

class WeatherList extends Component {
    render() {

        const weatherElements = this.props.list.map((date, index) =>
            <div key={index} className='weatherList__block'>
                <Weather
                    list={this.props.list[index]}
                    units={this.props.units}
                />
            </div>
        );

        return (
            <div className='weatherList__days-table'>
                {weatherElements}
            </div>
        );
    }
}

export default WeatherList;
