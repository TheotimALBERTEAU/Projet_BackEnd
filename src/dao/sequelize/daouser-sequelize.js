const User = require('./models/user-model');
const IDAOUser = require('../idaouser')

class DAOUserSequelize extends IDAOUser {
    async selectByEmail(email) {
        return await User.findOne({
            where: {email: email},
        })
    }

    async insert(user) {
        return await User.create(user);
    }
}

module.exports = DAOUserSequelize;
