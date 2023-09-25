const userService = require('./user.service')

exports.getLogin = (req, res) => {
  res.render('login.html')
}

exports.getLogout = (req, res) => {
  res.clearCookie('token')
  res.redirect('/')
}

exports.postLogin = async (req, res, next) => {
  try {
    const {user_id, user_pw} = req.body
    const result = await userService.postLogin(user_id, user_pw)
    console.log(result);
    if (!result.isLogin) return res.redirect('/')
    // Login Success Logic goes here
    res.cookie('token', result.data)
    res.redirect('/')
} catch (err) {
    next()
  }
} 