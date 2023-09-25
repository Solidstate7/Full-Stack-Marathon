const pool = require('../../poolPromise')

exports.searchSingleUser = async (uid, upw) => {
  try {
    const sql = `SELECT * FROM users WHERE uid=? AND upw=?`
    const [[result]] = await pool.query(sql, [uid, upw])
    return result
  } catch (e) {
    throw new Error('Repo Error' + e.message)
  }
}