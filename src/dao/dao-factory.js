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
    }
}