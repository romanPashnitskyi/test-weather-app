import axios from 'axios';

export const fetchData = (location, isChecked) => (dispatch) => {

    const API_KEY = 'bd2ae3f21976f0f86cc5e88e358b72bd';
    const units = isChecked === false ? 'metric' : 'imperial';
    const { latitude, longitude } = location || {};
    const URL = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&units=${units}&cnt=16&APPID=${API_KEY}`;

    return axios.get(URL)
        .then((response) => {
            dispatch({type: 'FETCH_DATA_FULFILLED', payload: response.data});
        })
};


