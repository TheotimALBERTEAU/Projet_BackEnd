const mongoose = require('mongoose');

const Article = mongoose.model(
    'Article',
    {
        id: String,
        title: String,
        desc: String,
        author: String,
        imgPath: String,
    },
    'articles'
);

module.exports = Article