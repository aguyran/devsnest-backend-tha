const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection established");
  } catch (err) {
    console.log("Unable to connect db");
  }
})();

module.exports = sequelize