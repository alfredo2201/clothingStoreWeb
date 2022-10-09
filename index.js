import sequelize  from "./data/connection.js";
await sequelize.sync();
console.log("All models were synchronized successfully.");