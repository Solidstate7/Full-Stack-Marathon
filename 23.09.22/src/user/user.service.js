const userRepository = require('./user.repository')
const JWT = require('../../lib/jwt')
const jwt = new JWT()

exports.postLogin = async (userid, userpw) => {
  try {
  const result = await userRepository.findOneByUserInfo(userid, userpw)
  if (!result) return {isLogin: false, data: null,}
  const token = jwt.sign({id: result.userid, pw: result.userpw,})
  return { isLogin: true, data: token, }
  } catch (e) {
    throw new Error('Service Error' + e.message)
  }
}