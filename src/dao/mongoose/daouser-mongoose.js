const User = require('./models/user-model');
const IDAOUser = require('../idaouser')

class DAOUserMongoose extends IDAOUser {
    async selectByEmail(email) {
        return await User.findOne({ email: email })
    }

    async insert(user){
        const newUser = new User({
            id: user.id,
            email: user.email,
            password: user.password,
            pseudo: user.pseudo,
            cityCode: user.cityCode,
            city: user.city,
            phone: user.phone,
        })
        return await newUser.save()
    }

}

module.exports = DAOUserMongoose;
