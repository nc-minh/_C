const { sHome } = require("./service");

const getHome = async (req, res, next) => {
    const result = await sHome();
    res.sendFile(result);
}

module.exports = { getHome };