import axios from 'axios';
export const API_KEY = 'cde70188e2e41f40cb606e46af70d056';
const lat = '37.785834';
const lon = '-122.406417';
const WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&`;

export const getWeather = async (lat, lon) => {
  const result = await axios.get(`${WEATHER_URL}lat=${lat}&lon=${lon}&`);
  const { data } = result;
  return data;
}