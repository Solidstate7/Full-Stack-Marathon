const userService = require('./user.service')

exports.getLogin = (req, res) => {
  res.render('login.html')
}

exports.postLogin = async (req, res, next) => {
  try {
    const result = await userService.postLogin()
    if (result.isLogin) return res.redirect('/')
    res.redirect('/')
  } catch (e) {
    next()
  }
}