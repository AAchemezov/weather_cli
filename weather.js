#!/usr/bin/env node
import {getArgs} from './helpers/args.js'
import {printError, printSuccess, printHelp} from "./services/log.service.js";
import {saveKeyValue, getKeyValue} from "./services/storage.service.js";

const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token)
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
// Output weather
}

initCLI()