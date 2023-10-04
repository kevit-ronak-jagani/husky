const winston = require('winston')
const logConfiguration = {
    transports: [
        new winston.transports.Console({
            level: 'http',
        }),
        new winston.transports.File({
            level: 'error',
            filename: 'logs/example.log',
        }),
    ],
    format: winston.format.combine(
        winston.format.label({
            label: 'SOME LABEL',
        }),
        winston.format.timestamp({
            format: 'MMM-DD-YYYY HH:mm:ss',
        }),
        winston.format.printf(
            (info) =>
                `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message
                }`
        )
    ),
}
const logger = winston.createLogger(logConfiguration)
// logger.log({
//     message: "Hello World",
//     level: "info"
// })
logger.error('First error!')
// logger.error("First error!");
logger.error('Second error!')
logger.info('some info!')
logger.warn('warning')
