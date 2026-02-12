module.exports = {

    getDAOArticle : () => {
        if (process.env.DB_MODE === 'mongodb') {
            const DAOArticleMongoose = require("./mongoose/daoarticle-mongoose")
            return new DAOArticleMongoose();
        }
    }
}