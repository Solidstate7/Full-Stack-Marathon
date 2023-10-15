class Service {
    static aa() {
        console.log("Static Method");
    }

    constructor() {}

    hello() {
        console.log('hello world')
    }

    
}

class AuthService {
    constructor() {
    }

    auth() {
        console.log('huh');
    }
}


class Controller {
    constructor(instance, inst) {
        this.instance = instance
        this.inst = inst
    }

    start() {
        this.instance.hello()
        this.inst.auth()
    }
}

const service = new Service()
const authService = new AuthService()
const controller = new Controller(service, authService)


controller.start();