const pool = require('../../pool')

exports.findOneByUserInfo = async (user_id, user_pw) => {
  try {
    const sql = `SELECT * FROM users WHERE userid=? AND userpw=?`

    const [[result]] = await pool.query(sql, [user_id, user_pw])
    return result
  } catch (e) {
    throw new Error('Repo Error ' + e.message)
  }
}

exports.findOne = async (field, value) => {
  try {
    const sql = `SELECT * FROM users WHERE ${field}=?`
    const [[result]] = await pool.query(sql, [value])
  } catch (e) {
    throw new Error('Repo Error ' + e.message )
  }
}