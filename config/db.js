const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.HOST,
  port: 5432,
  database: process.env.DB_NAME,
  max: 10,
  connectionTimeoutMillis: 0,
});

module.exports = pool;
