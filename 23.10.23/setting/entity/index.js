// Connection
const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
// const user = require("./user.entity");

const db = {
    database: "test_db2",
    username: "eunjae",
    password: "Qualia123!",
    host: "127.0.0.1",
    port: "3306",
    dialect: "mysql",
};

const sequelize = new Sequelize(db.database, db.username, db.password, db);

// table info, 테이블 개수 만큼
require("./user.entity")(sequelize, DataTypes);

// create
// findOne
// findAll
// update
// delete

// sequelize.models.user.method

sequelize.sync({ force: true }).then(async () => {
    const { User } = sequelize.models;
    await User.create({ id: "cuckoo", name: "eunjae", pw: "123" });
    await User.create({ id: "cuckoobird", name: "eunjae2", pw: "1234" });
    await User.create({ id: "cuckoobirdie", name: "eunjae3", pw: "12345" });

    const list = await User.findAll({
        raw: true,
        where: {
            id: "cuckoo",
        },
    });

    const user1 = await User.findOne({
        raw: true,
        where: {
            id: "cuckoobird",
        },
    });

    const updated = await User.update(
        {
            id: "cuckold",
        },
        {
            where: {
                id: "cuckoo",
            },
        }
    );

    const deleted = await User.destroy({
        where: {
            id: "cuckold",
        },
    });
    // console.log("This is the list: ", list);
    // const [{ dataValues }] = list;
    // console.log("findOne: ", user1);
    // console.log("update: ", updated);
    console.log("destroyed: ", deleted);
    console.log("connected.");
});
