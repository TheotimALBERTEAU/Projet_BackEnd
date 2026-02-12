module.exports = {

    getDAOArticle : () => {
        if (process.env.DB_MODE === 'mongodb') {
            const DAOArticleMongoose = require("./mongoose/daoarticle-mongoose")
            return new DAOArticleMongoose();
        }
        // MODE : Mock
        else if (process.env.DB_MODE === "mock") {
            const DAOGameMock = require("./mock/daogame-mock");
            return new DAOGameMock();
        }

        const DAOGameMock = require("./mock/daogame-mock");
        return new DAOGameMock();
    }
}