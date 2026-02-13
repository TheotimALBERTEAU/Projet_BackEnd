const Article = require(`./models/article-model`);
const IDAOArticle = require(`./models/article-model`);

class DaoArticleMongoose extends IDAOArticle {

    async insert(article) {
        const newArticle = new Article({
            id : article.id,
            "title" : article.title,
            "desc": article.desc,
            "author": article.author,
            "imgPath": article.imgPath
        });

        return await newArticle.save()
    };

    async selectAll() {
        return await Article.find();
    }

    async selectById(id) {
        return await Article.findOne({id : id});
    }

    async selectByTitle(title) {
        return await Article.findOne({title : title});
    }

    async saveArticle(article) {
        return await article.save();
    }

    async deleteArticle(article) {
        return await article.deleteOne()
    }
}

module.exports = DaoArticleMongoose;
