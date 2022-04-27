#!/usr/bin/env node
import {getArgs} from './helpers/args.js'

const initCLI = () => {
    const args = getArgs(process.argv)

    console.log(args)

    if (args.H){
// help
    }
    if (args.C){
// save city
    }
    if (args.T){
// save Token
    }
// Output weather
}

initCLI()