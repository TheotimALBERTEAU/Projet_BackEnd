const Article = require("./models/article_model");
const IDAOArticle = require("../idaoarticle");

class DAOArticleSequelize extends IDAOArticle {
    /**
     * Override explicitement si la methode existe dans le parent
     */
    async insert(article) {
        return await Article.create(article);
    }

    /**
     * Override explicitement si la methode existe dans le parent
     */
    async selectAll() {
        return await Article.findAll();
    }
}

module.exports = DAOArticleSequelize;
