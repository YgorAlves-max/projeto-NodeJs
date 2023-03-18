const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("celke", "root", "123456", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
    .then(() => {
        console.log("Sucesso entrei no banco de dados ");

    }).catch(() => {
        console.log("erro connection ");
    })

module.exports = sequelize;