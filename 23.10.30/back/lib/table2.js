module.exports = (sequelize, DataTypes) => {
    sequelize.define(
        "UserData",
        {
            id: {
                type: DataTypes.STRING(30),
                allowNull: false,
                primaryKey: true,
            },
            pw: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            provider: {
                type: DataTypes.STRING(30),
                allowNull: true,
            },
        },
        {
            freezeTableName: true,
        }
    );
};
