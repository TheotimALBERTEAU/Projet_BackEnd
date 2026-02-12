const DAOFactory = require("../dao/dao-factory");
const { v4: uuidv4 } = require('uuid');
const {makeService} = require("./service-helper");

module.exports = {
    getAll: async () => {
        //insert game
        // Await car async et faut retourner la réponse json une fois la requête Insert  executée
        const allArticles = await DAOFactory.getDAOArticle().selectAll();

        return makeService("200", "Affichage de tous les jeux", allArticles);
    }
}
