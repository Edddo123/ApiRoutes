const { Pool } = require("pg");

const pool = new Pool({
  ssl: { rejectUnauthorized: false },
  connectionString:process.env.DATABASE_URL,
  max: 10,
  connectionTimeoutMillis: 0,
});

module.exports = pool;
