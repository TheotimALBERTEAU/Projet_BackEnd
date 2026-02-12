const Article = require(`./models/article-model`);
const IDAOArticle = require('../idaoarticle');

class DaoArticleMongoose {

    async insert(article) {
        const newArticle = new Article({
            uid : article.uid,
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
}

module.exports = DaoArticleMongoose;
