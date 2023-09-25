const pool = require('../../pool')

exports.findOneByUserInfo = async (user_id, user_pw) => {
  try {
  const sql = `SELECT * FROM users WHERE userid=? AND userpw=?`
  const [[result]] = await pool.query(sql, [user_id, user_pw])
  console.log(result);
  return result
  } catch (e) {
    throw new Error('repo Error' + e.message)
  }
}