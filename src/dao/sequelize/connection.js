const sequelize = require('./config/database');

module.exports = {
    connect_sequelize : () => {
        sequelize.authenticate()
            .then(() => {
                console.log('✨ Successfully authenticated!')

                const Article = require('./models/article_model');

                sequelize.sync()
                    .then(() => console.log('🧱 Tables Synchronised!'))
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log('❌ Erreur MySQL', err));

    }
}