import axios from "axios";
import {getKeyValue, TOKEN_DICTIONARY} from "./storage.service.js";

const getWeather = async () => {
    const appid = await getKeyValue(TOKEN_DICTIONARY.token)
    const q = await getKeyValue(TOKEN_DICTIONARY.city)
    if (!appid) {
        throw new Error('Не задан ключ API')
    }
    if (!q) {
        throw new Error('Не задан город')
    }
    const params = {q, appid, lang: 'ru', units: 'metric'}
    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {params})

    return data
}

export {getWeather}