// entity
// const { Model, DataTypes, Sequelize } = require("sequelize");
// module.exports = (sequelize) => {
//     class User extends Model {}
//     // 인자 2개 - 1. 필드 내용 정의 2. 테이블 정보
//     User.init(
//         {
//             id: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 // autoIncrement: true,
//                 primaryKey: true,
//             },
//             pw: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//             },
//             name: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//             },
//         },
//         {
//             sequelize,
//             modelName: "Users",
//         }
//     );
//     return User;
// };

module.exports = (sequelize, DataTypes) => {
    sequelize.define(
        "User",
        {
            id: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
            },
            pw: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: "test2",
        }
    );
};
