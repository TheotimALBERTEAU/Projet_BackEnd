const IDAOUser = require('../idaouser')

let USERS = [
    {
        id: '1',
        email: "test@example.com",
        password: "test",
        pseudo: "test",
        cityCode: "44000",
        city: "Nantes",
        phone: "0612345678"
    },
    {
        id: "2",
        email: "alice@test.fr",
        password: "password",
        pseudo: "Alice44",
        cityCode: "44000",
        city: "Nantes",
        phone: "0102030405"
    },
    {
        id: "3",
        email: "bob@test.fr",
        password: "password",
        pseudo: "BobLeBricoleur",
        cityCode: "75001",
        city: "Paris",
        phone: "0607080910"
    }
]

const requiredFields = ["email", "password", "pseudo", "cityCode", "city", "phone"]

class DAOUserMock extends IDAOUser {
    async selectByEmail(email) {
        return USERS.find(user => user.email === email)
    }

    async insert(user){
        return USERS.push(user)
    }
}

module.exports = DAOUserMock;
