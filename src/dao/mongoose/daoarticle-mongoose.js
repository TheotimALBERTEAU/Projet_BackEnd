const Article = require(`./models/article-model`);
const IDAOArticle = require('../idaoarticle');

class DaoArticleMongoose {
    async selectAll() {
        return await Article.find();
    }
}

module.exports = DaoArticleMongoose;
