const { Pool } = require("pg");
let pool;

if (process.env.NODE_ENV === "production") {
  pool = new Pool({
    ssl: { rejectUnauthorized: false },
    connectionString: process.env.DATABASE_URL,
    max: 10,
    connectionTimeoutMillis: 0,
  });
} else {
  pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    max: 10,
    connectionTimeoutMillis: 0,
  });
}

module.exports = pool;
