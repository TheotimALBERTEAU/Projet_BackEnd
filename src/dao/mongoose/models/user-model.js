const mongoose = require('mongoose');

const User = mongoose.model(
    'User',
    {
        id: String,
        email: String,
        password: String,
        pseudo: String,
        cityCode: String,
        city: String,
        phone: String,
    },
    'users'
);

module.exports = User