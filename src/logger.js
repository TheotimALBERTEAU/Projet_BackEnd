const winston = require("winston");

module.exports = {
    // -- configuer le logger
    logger: winston.createLogger({
        level: "info",
        format: winston.format.combine(
            winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            winston.format.printf((info) =>
                // La condition est évaluée et le résultat est DIRECTEMENT retourné aux transports
                info.level === 'error'
                    ? `❌ [${info.timestamp}] ${info.level.toUpperCase()} : ${info.message}\n---------------------------------------------------------`
                    : `✅ [${info.timestamp}] ${info.level.toUpperCase()}  : ${info.message}`
            )
        ),
        // Log to the console and a file
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: "logs/app.log" }),
        ],
    })
}