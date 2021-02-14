const { Pool } = require("pg");

const pool = new Pool({
  ssl: this.on,
  connectionString:process.env.DATABASE_URL,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  max: 10,
  connectionTimeoutMillis: 0,
});

module.exports = pool;
