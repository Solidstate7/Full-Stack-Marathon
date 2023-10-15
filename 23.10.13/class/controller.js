class Controller {
    constructor(instance) {
        this.instance = instance
    }

    getMain(req, res, next) {

        try {
            this.instance.getMain()
        } catch(e) {
                next(e)
          }
    };
}

module.exports = Controller