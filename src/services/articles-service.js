const DAOFactory = require("../dao/dao-factory");
const { v4: uuidv4 } = require('uuid');
const {makeService} = require("./service-helper");

module.exports = {
    createArticle: async (reqBody) => {
        // L'objet jeu a insérer
        const generatedId = uuidv4(); // id générer
        let article = { uid: generatedId, title: reqBody.title, desc: reqBody.desc, author: reqBody.author, imgPath: reqBody.imgPath };

        //insert article
        // Await car async et faut retourner la réponse json une fois la requête Insert  executée
        const myArticle = await DAOFactory.getDAOArticle().insert(article);

        return makeService("200", "Ajout d'un article", myArticle);
    },

    getAll: async () => {
        //insert game
        // Await car async et faut retourner la réponse json une fois la requête Insert  executée
        const allArticles = await DAOFactory.getDAOArticle().selectAll();

        return makeService("200", "Affichage de tous les articles", allArticles);
    }
}
