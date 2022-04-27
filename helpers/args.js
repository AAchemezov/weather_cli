/**
 * Получить агрументы
 */
const getArgs = (args) => {
    const [, , ...rest] = args
    const res = {}
    let next = null
    rest.forEach((value) => {
        if (value.charAt(0) === '-') {
            res[value.slice(1)] = true
            next = value.slice(1)
        } else {
            if (next) {
                res[next] = value
                next = null
            }
        }
    })
    return res
}

export {getArgs}