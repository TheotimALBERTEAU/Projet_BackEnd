const express = require('express');
const router = express.Router();
const ArticleService = require("../services/articles-service");

router.post('/save', async (req, res) => {
    const serviceResponse = await ArticleService.createArticle(req.body);

    return res.json(serviceResponse);
});

router.get('/', async (req, res) => {
    const serviceResponse = await ArticleService.getAll();
    return res.json(serviceResponse);
});

module.exports = router;
