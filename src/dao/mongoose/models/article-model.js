const mongoose = require('mongoose');

const Article = mongoose.model(
    'Article',
    {
        uid: String,
        title: String,
        desc: String,
        author: String,
        imgPath: String,
    },
    'articles'
);

module.exports = Article