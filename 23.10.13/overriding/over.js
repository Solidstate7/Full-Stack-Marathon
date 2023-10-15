const num = 10
const str = 'hello world'

const obj = { name: 'ingoo' }
const obj2 = { name: 'ingoo' }

// instanceof
// typeof

class Controller {
    name
    constructor(name) {
        this.name = name
    }
    print() {
        throw new Error('자식 클래스에서 구현하고 써라')
    }
}

class AuthController extends Controller {
    constructor() {
        super()
    }
    
    use(...args) {
        if (args.length === 0) throw new Error('인자가 없다')
        if (args.length === 1 && typeof args[0] !== 'string') {
            console.log('인자 하나에 스트링 아님');
        } else {
            throw new Error('인자 하나에 스트링')
        }

        // 인자 개수와 타입 검증
        console.log(args)
    } 
}

class UserController extends Controller {
    constructor() {
        super()
    }
}


const authController = new AuthController()
const userController = new UserController()
const controller1 = new Controller('ingoo')
const controller2 = new Controller('web7722')

const bool1 = controller1 instanceof Controller
const bool2 = controller2 instanceof Controller

authController.use((req, res) => {

})

// console.log(bool1 && bool2)

