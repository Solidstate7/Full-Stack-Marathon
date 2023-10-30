module.exports = (sequelize, DataTypes) => {
    sequelize.define(
        "Upload",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
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
            image: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            original_filename: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
        },
        {
            freezeTableName: true,
        }
    );
};
