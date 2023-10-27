const app = require("./app");
const { sequelize } = require("./entity");
app.listen(4000, async () => {
    await sequelize.sync({ force: true });
    console.log(`DB Connection`);
    console.log("server start");
});
