const { Pool } = require("pg");
require("dotenv").config();

if (process.env.NODE_ENV === "development"){
  DATABASE_URL = process.env.DATABASE_URL;
}else if (process.env.NODE_ENV === "production"){
  DATABASE_URL = process.env.DB_PRODUCTION
}else if (process.env.NODE_ENV === "test"){
  DATABASE_URL = process.env.DB_TESTING;
}else{
  throw new Error("Invalid database environment variables");
}


const connection = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false
});

module.exports = connection;
