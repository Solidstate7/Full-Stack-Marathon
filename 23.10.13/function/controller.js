const service = require('./service.js')

exports.main = (req, res, next) => {
    try {
        service.main()
    } catch (e) {
        next (e)
    }
}