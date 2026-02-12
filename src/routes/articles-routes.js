const express = require('express');
const router = express.Router();
const ArticleService = require("../services/articles-service");

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const serviceResponse = await ArticleService.getArticleById(id)
    return res.json(serviceResponse)
})

router.get('/', async (req, res) => {
    const serviceResponse = await ArticleService.getAll();
    return res.json(serviceResponse);
});

router.post('/save', async (req, res) => {
    const article = req.body;
    console.log(article.id);
    if (article.id !== undefined || article.id) {
        const serviceResponse = await ArticleService.modifyArticle(article)
    } else {
        const serviceResponse = await ArticleService.createArticle(article);
    }

    return res.json(serviceResponse);
});

router.delete('/:id', async (req, res) => {
    console.log(req.params.id);
    const serviceResponse = await ArticleService.deleteArticle(req.params.id);
    return res.json(serviceResponse);
})

module.exports = router;
