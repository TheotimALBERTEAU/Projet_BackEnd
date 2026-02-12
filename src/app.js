require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors())

const articleRouter = require('./routes/articles-routes.js');
app.use('/articles', articleRouter);

if (process.env.DB_MODE === 'mysql') {
    require('./dao/sequelize/connection').connect_sequelize();
}

else if (process.env.DB_MODE === 'mongodb') {
    require('./dao/mongoose/connection').connect_mongoose();
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`);
})
