const mongoose = require('mongoose');

const User = mongoose.model(
    'User',
    {
        id: String,
        email: {
                type: String,
                required: true,
                unique: true,
                trim: true,
                lowercase: true
        },
        password: {
                type: String,
                required: true
        },
        pseudo: {
                type: String,
                required: true
        },
        cityCode: {
                type: String,
                required: true
        },
        city: {
                type: String,
                required: true
        },
        phone: {
                type: String,
                required: true
        },
    },
    'users'
);

module.exports = User