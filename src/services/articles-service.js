const DAOFactory = require("../dao/dao-factory");
const { v4: uuidv4 } = require('uuid');
const {makeService, makeError} = require("./service-helper");

module.exports = {
    createArticle: async (reqBody) => {
        try {
            const existingArticle = await DAOFactory.getDAOArticle().selectByTitle(reqBody.title);

            if (existingArticle) {
                return makeError("400", "Error : Article already exists", null);
            }

            // L'article à insérer
            const generatedId = uuidv4(); // id générer
            let article = {
                id: generatedId,
                title: reqBody.title,
                desc: reqBody.desc,
                author: reqBody.author,
                imgPath: reqBody.imgPath
            };

            //insert article
            // Await car async et faut retourner la réponse json une fois la requête Insert executée
            const newArticle = await DAOFactory.getDAOArticle().insert(article);

            return makeService("200", "Ajout d'un article", newArticle);
        } catch (err) {
            return makeError("500", "Error while adding article", err);
        }
    },

    modifyArticle: async (reqBody) => {
        try {
            let foundArticle = await DAOFactory.getDAOArticle().selectById(reqBody.id);
            if (!foundArticle) {
                return makeError("400", "Error : Article not found", null);
            }

            const duplicateArticle = await DAOFactory.getDAOArticle().selectByTitle(reqBody.title);

            if (duplicateArticle && duplicateArticle.id !== reqBody.id) {
                return makeError("400", "Error : An article already got this title", null);
            }

            foundArticle.title = reqBody.title;
            foundArticle.desc = reqBody.desc;
            foundArticle.author = reqBody.author;
            foundArticle.imgPath = reqBody.imgPath;

            await DAOFactory.getDAOArticle().saveArticle(foundArticle);

            return makeService("200", "Modification de l'article", foundArticle);
        } catch (err) {
            return makeError("500", "Error while modifying article", err);
        }
    },

    getArticleById: async (id) => {
        try {
            const article = await DAOFactory.getDAOArticle().selectById(id);
            return makeService("200", "Ajout d'un article", article);
        } catch (err) {
            return makeError("500", "Error while getting article", err);
        }
    },

    getAll: async () => {
        //insert article
        // Await car async et faut retourner la réponse json une fois la requête Insert executée
        try {
            const allArticles = await DAOFactory.getDAOArticle().selectAll();
            return makeService("200", "Affichage de tous les articles", allArticles);
        } catch (err) {
            return makeError("500", "Error while getting articles", err);
        }
    },

    deleteArticle: async (id) => {
        try {
            let foundArticle = await DAOFactory.getDAOArticle().selectById(id);
            await DAOFactory.getDAOArticle().deleteArticle(foundArticle);
            return makeService("200", "Article supprimé", foundArticle);
        } catch (err) {
            return makeError("500", "Error while deleting article", err);
        }
    }
}
