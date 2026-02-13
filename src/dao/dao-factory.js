module.exports = {

    getDAOArticle : () => {
        if (process.env.DB_MODE === 'mysql') {
            const DAOArticleSequelize = require("./sequelize/daoarticle-sequelize");
            return new DAOArticleSequelize();
        }
        // MODE : Mock
        else if (process.env.DB_MODE === 'mongodb') {
            const DAOArticleMongoose = require("./mongoose/daoarticle-mongoose")
            return new DAOArticleMongoose();
        }
        // MODE : Mock
        else if (process.env.DB_MODE === "mock") {
            const DAOArticleMock = require("./mock/daoarticle-mock");
            return new DAOArticleMock();
        }

        const DAOArticleMock = require("./mock/daoarticle-mock");
        return new DAOArticleMock();
    },

    getDAOUser : () => {
        // MODE : MySQL
        if (process.env.DB_MODE === 'mysql') {
            const DAOUserSequelize = require("./sequelize/daouser-sequelize");
            return new DAOUserSequelize();
        }
        // MODE : mongodb
        else if (process.env.DB_MODE === 'mongodb') {
            const DAOUserMongoose = require("./mongoose/daouser-mongoose");
            return new DAOUserMongoose();
        }
        // MODE : mock
        else if (process.env.DB_MODE === "mock") {
            const DAOUserMock = require("./mock/daouser-mock");
            return new DAOUserMock();
        }

        const DAOUserMock = require("./mock/daouser-mock");
        return new DAOUserMock();
    }
}