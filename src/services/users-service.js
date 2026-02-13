const DAOFactory = require("../dao/dao-factory");
const { v4: uuidv4 } = require('uuid');
const {makeService, makeError} = require("./service-helper");
const jwt = require("jsonwebtoken");

const jwtSecret = "AZERTY"

module.exports = {
    connectUser: async (reqBody) => {
        try {
            const foundUser = await DAOFactory.getDAOUser().selectByEmail(reqBody);

            if (!foundUser || foundUser.password !== reqBody.password) {
                return makeError("601", "Email/password Mismatch", null);
            }

            const token = jwt.sign(
                { email : foundUser.email},
                jwtSecret,
                {expiresIn: "1h"}
            );

            return makeService("200", "Succesfully logged in", {token, pseudo: foundUser.pseudo});
        } catch (err) {
            return makeError("600", "Error while connecting user", err);
        }
    },

    signupUser: async (reqBody) => {
        try {
            const foundUser = await DAOFactory.getDAOUser().selectByEmail(reqBody);
            if (foundUser) {
                return makeError("602", "Email already taken by another account", null);
            }
            if (reqBody.password !== reqBody.passwordConfirm) {
                return makeError("603", "Password mismatch", null);
            }
            const successedFields = DAOFactory.getDAOUser().checkFields(reqBody);
            if (!successedFields) {
                return makeError("604", "Some of fields are incomplete", null);
            }
            const fields = ["email", "password", "passwordConfirm", "pseudo", "cityCode", "city", "phone"]
            let newUser = { id : uuidv4() };
            fields.forEach(field => {
                if (field in reqBody) {
                    newUser[field] = reqBody[field];
                }
            });
            const createdUser = DAOFactory.getDAOUser().insert(newUser);
            return makeService("200", "Signup succesfully achieved", newUser);

        } catch (err) {
            return makeError("600", "Error while creating user", err);
        }
    }
}
