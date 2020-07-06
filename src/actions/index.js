import axios from 'axios';

const API_KEY = '2a6d7df0cace692f42e1ea5a963d2502';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${URL}&q=${city},us`;
    const request = axios.get(url);


    return {
        type: FETCH_WEATHER,
        payload: request
    };
}