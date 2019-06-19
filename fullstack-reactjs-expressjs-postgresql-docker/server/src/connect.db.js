const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_CONNECTION_STRING,
})

module.exports = pool
