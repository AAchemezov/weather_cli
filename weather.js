#!/usr/bin/env node
import {getArgs} from './helpers/args.js'
import {printError, printSuccess, printHelp, printWeather} from "./services/log.service.js";
import {saveKeyValue, TOKEN_DICTIONARY} from "./services/storage.service.js";
import {getWeather} from "./services/api.service.js";

const saveToken = async (token) => {
    try {
        if (!token.length) {
            printError('Не передан токен')
            return
        }
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess('Токен сохранён')
    } catch (e) {
        printError(e.message)
    }
}

const saveCity = async (city) => {
    try {
        if (!city.length) {
            printError('Не передан город')
            return
        }
        await saveKeyValue(TOKEN_DICTIONARY.city, city)
        printSuccess('Город сохранён')
    } catch (e) {
        printError(e.message)
    }
}

const getForecast = async () => {
    try {
        const weather = await getWeather()
        printWeather(weather)
    } catch (e) {
        if (e?.response?.status === 404) {
            printError('Неверно указан город')
        } else if (e?.response?.status === 401) {
            printError('Неверно указан токен')
        } else {
            printError(e.message)
        }
    }

}

const initCLI = () => {
    const args = getArgs(process.argv)

    if (args.H) {
        printHelp()
    }
    if (args.C) {
        return saveCity(args.C)
    }
    if (args.T) {
        return saveToken(args.T)
    }
    getForecast()
}

initCLI()