const IDAOArticle = require("../idaoarticle");

let ARTICLES = [
    { id: '1', title: 'Premier article', desc: 'Contenu du premier article', author: 'Isaac', imgPath: 'https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-653001154-e1691965000531.jpg' },
    { id: '2', title: 'Deuxième article', desc: 'Contenu du deuxième article', author: 'Sanchez', imgPath: 'https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-653001154-e1691965000531.jpg' },
    { id: '3', title: 'Troisième article', desc: 'Contenu du troisième article', author: 'Toto', imgPath: 'https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-653001154-e1691965000531.jpg' }
];

class DAOArticleMock extends IDAOArticle {


    /**
     * Override explicitement si la methode existe dans le parent
     */
    async insert(article) {
        ARTICLES.push(article);
        return article;
    }

    /**
     * Override explicitement si la methode existe dans le parent
     */
    async selectAll() {
        return ARTICLES;
    }

    async selectById(id) {
        return ARTICLES.find(item => item.id === id);
    }

    async selectByTitle(title) {
        return ARTICLES.find(item => item.title === title);
    }

    async saveArticle(article) {
        const index = ARTICLES.findIndex(a => a.id === article.id);
        if (index !== -1) {
            ARTICLES[index] = article;
        } else {
            ARTICLES.push(article);
        }
        return article;
    }

    async deleteArticle(id) {
        const index = ARTICLES.findIndex(a => a.id === id);
        if (index !== undefined) {
            ARTICLES.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = DAOArticleMock;