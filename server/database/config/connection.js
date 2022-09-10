const { Pool } = require("pg");
require("dotenv").config();

const { DATABASE_URL } = process.env

if(!DATABASE_URL) {
  throw new Error("Invalid database environment variables");
}

const connection = new Pool({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});


module.exports = connection;
