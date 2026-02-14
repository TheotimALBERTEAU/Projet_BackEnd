const Article = require("./models/article-model");
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

    async selectById(id) {
        return await Article.findByPk(id)
    }

    async selectByTitle(title) {
        return await Article.findOne({
            where : {title : title}
        });
    }

    async saveArticle(article) {
        return await article.save()
    }

    async deleteArticle(article) {
        return await article.destroy()
    }
}

module.exports = DAOArticleSequelize;
