import chalk from 'chalk'
import dedent from 'dedent-js'

const printError = (error) => {
    console.log(chalk.bgRed('ERROR') + ' ' + error)
}

const printSuccess = (error) => {
    console.log(chalk.bgGreen('SUCCESS') + ' ' + error)
}

const printHelp = () => {
    console.log(
        dedent(`${chalk.bgCyan('HELP')}
        Без параметров - вывод погоды
        -С [CITY] установить город
        -T [API_KEY] установить токен сервиса погоды
        -H вывод помощи
        `))
}

export {
    printError,
    printSuccess,
    printHelp
}