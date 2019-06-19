const pool = require('./connect.db')

module.exports.findAll = (req, res, next) => {
  const sql = 'SELECT * FROM products'
  pool.query(sql, (err, response) => res.send(response.rows))
}
