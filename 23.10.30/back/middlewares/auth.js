const jwt = require("../lib/jwt");
const { UserData } = require("../lib/sequelize");
exports.auth = async (req, res, next) => {
    try {
        console.log("Authenticating...");
        console.log(req.cookies);
        const { token } = req.cookies;
        console.log(token);
        if (!token) return next();

        const payload = jwt.verify(token, "salt");

        if (payload === null) res.status(401).send("Unauthorized Access.");

        const { dataValues } = await UserData.findOne({
            where: { id: payload.id },
        });

        req.user = dataValues;
        next();
    } catch (e) {
        next(e);
    }
};
