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

const getIcon = (icon) => {
    switch (icon) {
        case '01':
            return '☀️';
        case '02':
            return '🌤️ ';
        case '03':
            return '☁️';
        case '04':
            return '☁️';
        case '09':
            return '🌧️';
        case '10':
            return '🌦️';
        case '11':
            return '🌩️';
        case '13':
            return '❄️';
        case '50':
            return '🌫️';
    }
};


const printWeather = ({weather: [weather], main, name, wind}) => {
    console.log(
        dedent(`
        
        ${chalk.bgYellow('WEATHER')} Погода в городе ${name} ${getIcon(weather.icon.slice(0, -1))} ${chalk.bgGreen(` ${weather.description} `)} 
        Температура:    ${chalk.bgWhite(` ${main.temp} ºC `)} (ощущается как ${main.feels_like}ºC)
        Влажность:      ${chalk.bgWhite(` ${main.humidity} % `)}
        Скорость ветра: ${chalk.bgWhite(` ${wind.speed} м/с `)}
        Давление:       ${chalk.bgWhite(` ${main.pressure} `)}
        
        `))
}

export {
    printError,
    printSuccess,
    printHelp,
    printWeather
}