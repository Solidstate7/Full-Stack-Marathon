class Component {
    target
    state

    constructor() {
        this.render()
    }
    template() {}
    render() {
        this.target.innerHTML = this.template()
    }
}

class App extends Component {
    constructor() {
        super()
    }

    template() {
        return 'hello world'
    }
}

const app = new App()