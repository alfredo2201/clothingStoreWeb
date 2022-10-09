import Sequelize from 'sequelize';

const sequelize = new Sequelize({
  database: "clothingstore",
  host: "127.0.0.1",
  username: "root",
  password: "1602",
  dialect: "mysql",
});

export default sequelize ;