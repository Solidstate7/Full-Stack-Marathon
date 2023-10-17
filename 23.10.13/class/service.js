class Service {
    constructor() {}

    getMain() {
        console.log('Service getMain invoked')
        return `hello world`
    }
}

module.exports = Service