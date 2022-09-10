const { readFileSync } = require("fs");
const { join } = require("path");
const connection = require("../connection");

const dbBuild = () => {
  const createQuery = readFileSync(
    join(__dirname, "..", "init.sql"),
    "utf-8"
  );
  connection.query(createQuery);
};
dbBuild();
module.exports = dbBuild;