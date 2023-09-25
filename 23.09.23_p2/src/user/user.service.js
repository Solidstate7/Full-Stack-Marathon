const userRepository = require('./user.repository')

exports.postLogin = async () => {
  try{
    const result = await userRepository.searchSingleUser('eunjae', '5905')
    if (!result) return {isLogin: false, data: null,}
    return {isLogin: true, data: {...result}}
  } catch (e) {
    throw new Error('Service Error' + e.message)
  } 
}