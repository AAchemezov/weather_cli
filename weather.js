#!/usr/bin/env node
import {getArgs} from './helpers/args.js'
import {printError, printSuccess, printHelp} from "./services/log.service.js";

const initCLI = () => {
    const args = getArgs(process.argv)

    if (args.H) {
        printHelp()
    }
    if (args.C) {
// save city
    }
    if (args.T) {
// save Token
    }
// Output weather
}

initCLI()