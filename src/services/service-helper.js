const {logger} = require("../logger");
module.exports = {

    makeService : (code, message, data) => {
        logger.info(`Code: ${code} | Message: ${message}`);

        return { code: code, message: message, data: data };
    },

    makeError : (code, message, data) => {
        logger.error(`Code: ${code} | Message: ${message}`);

        return { code: code, message: message, data: data };
    }
}