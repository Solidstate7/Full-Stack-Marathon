const Board = require('./board.entity')
const pool = require('../../promisePool')

exports.findAll = async () => {
  try {
    const sql = `SELECT * FROM boards`
    const [result] = await pool.query(sql)
    return result
  } catch (e) {
    throw new Error('DB Error', e.message)
  }
}

exports.findone = async (id) => {
  try {
    const sql = `SELECT * FROM boards WHERE id=${id}`
    const [result] = await pool.query(sql)
    return result
  } catch (e) {
    throw new Error('Cannot Find one', e.message)
  }
}