const express = require('express');
const router = express.Router();
const ArticleService = require("../services/articles-service");

router.get('/articles', async (req, res) => {
    const serviceResponse = await ArticleService.getAll();
    return res.json(serviceResponse);
});

module.exports = router;
