const pool = require('../../pool')

exports.verifyUser = async (uid, upw) => {
  try {
    const sql = `SELECT * FROM users WHERE uid=? AND upw=?`
    const [[result]] = await pool.query(sql, [uid, upw])
    console.log(result);
    return result
  } catch (e) {
    throw new Error('Repo Error' + e.message)
  }
}