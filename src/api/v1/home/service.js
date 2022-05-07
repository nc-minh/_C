const path = require("path");
const sHome = async () => {
    const url = path.join(__dirname, '../../../resources/views/index.html');
    return url;
};

module.exports = { sHome };