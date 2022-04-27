import axios from "axios";
import {getKeyValue, TOKEN_DICTIONARY} from "./storage.service.js";

const getWeather = async (q) => {
    const appid = await getKeyValue(TOKEN_DICTIONARY.token)
    if (!appid) {
        throw new Error('Не задан ключ API')
    }
    const params = {q, appid, lang: 'ru', units: 'metric'}
    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {params})

    return data
}

export {getWeather}