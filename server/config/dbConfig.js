const mysql2 = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const dbconnection = mysql2.createPool({
  user: process.env.DB_USER,
  database: process.env.DATABASE,
  password: process.env.DB_PASSWORD,
  connectionLimit: process.env.CONNECTION_LIMIT || 10, // Set a default value if env is not set
  host: process.env.HOST,
});

module.exports = dbconnection.promise();
