const data = Array.from(require("./dist/main.json"));
data.load = () => data;
data.default = data;

module.exports = data;
