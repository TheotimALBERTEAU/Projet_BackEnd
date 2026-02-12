const { DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Article = sequelize.define(
    'Article',
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imgPath: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }
)

module.exports = Article;
