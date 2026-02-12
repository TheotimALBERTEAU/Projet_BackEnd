const DAOFactory = require("../dao/dao-factory");
const { v4: uuidv4 } = require('uuid');
const {makeService} = require("./service-helper");
const newArticle = require("../dao/sequelize/models/article_model");
const reqBody = require("../dao/sequelize/models/article_model");

module.exports = {
    createArticle: async (reqBody) => {
        // L'objet jeu a insérer
        const generatedId = uuidv4(); // id générer
        let article = { id: generatedId, title: reqBody.title, desc: reqBody.desc, author: reqBody.author, imgPath: reqBody.imgPath };

        //insert article
        // Await car async et faut retourner la réponse json une fois la requête Insert executée
        const newArticle = await DAOFactory.getDAOArticle().insert(article);

        return makeService("200", "Ajout d'un article", newArticle);
    },

    modifyArticle: async (reqBody) => {
        let foundArticle = await DAOFactory.getDAOArticle().selectById(reqBody.id);

        foundArticle.title = reqBody.title;
        foundArticle.desc = reqBody.desc;
        foundArticle.author = reqBody.author;
        foundArticle.imgPath = reqBody.imgPath;

        await DAOFactory.getDAOArticle().saveArticle(foundArticle);

        return makeService("200", "Modification de l'article", foundArticle);
    },

    getArticleById: async (id) => {
        const article = await DAOFactory.getDAOArticle().selectById(id);
        return makeService("200", "Ajout d'un article", article);
    },

    getAll: async () => {
        //insert article
        // Await car async et faut retourner la réponse json une fois la requête Insert executée
        const allArticles = await DAOFactory.getDAOArticle().selectAll();

        return makeService("200", "Affichage de tous les articles", allArticles);
    },

    deleteArticle: async (id) => {
        let foundArticle = await DAOFactory.getDAOArticle().selectById(id);

        await DAOFactory.getDAOArticle().deleteArticle(foundArticle);

        return makeService("200", "Article supprimé", foundArticle);
    }
}
