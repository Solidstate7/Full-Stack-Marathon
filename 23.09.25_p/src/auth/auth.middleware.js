const JWT = require('../../lib/jwt')
const userService = require('../user/user.service')
const jwt = new JWT()

exports.auth = async (req, res, next) => {
  try {
    const {token} = req.cookies
    console.log(token)
    if(!token) return next()

    const payload = jwt.verify(token, 'salt')
    console.log('authmiddleware payload : ', payload);

    const user = await userService.findOneByUserId(payload.id)
    req.user = user
    next()

  } catch (e) {
    next(e)
  }
}