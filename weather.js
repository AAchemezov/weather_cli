#!/usr/bin/env node
import {getArgs} from './helpers/args.js'
import {printError, printSuccess, printHelp} from "./services/log.service.js";
import {saveKeyValue, getKeyValue, TOKEN_DICTIONARY} from "./services/storage.service.js";
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

const initCLI = () => {
    const args = getArgs(process.argv)

    if (args.H) {
        printHelp()
    }
    if (args.C) {
// save city
    }
    if (args.T) {
        return saveToken(args.T)
    }
    getWeather('irkutsk')
}

initCLI()