const Controller = require('./controller')
const Acontroller = require('./a.controller')
const Bcontroller = require('./b.controller')
const Service = require('./service')

const service = new Service()
const controller = new Controller(service)
const acontroller = new Acontroller(service)
const bcontroller = new Bcontroller(service)

module.exports.controller = controller