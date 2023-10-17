class Controller {
    constructor(instance) {
        this.instance = instance
    }

    getMain(req, res, next) {

        try {
            console.log('Controller getMain invoked')
            this.instance.getMain()
        } catch(e) {
                next(e)
          }
    };
}



module.exports = Controller