const boardService = require('./board.service')

exports.getList = async (req, res) => {
  try {
    const result = await boardService.getFindAll()

    res.render('board/list.html', {
      list: result,
    })
  } catch (e) {
    next(e)
  }
}

exports.getView = async (req, res) => {
  try {
    const {id} = req.query
    const [result] = await boardService.getFindOne(id)
    if (!result) res.send("You cannot fetch nonexistent data")
    res.render('board/view.html', {...result})
  } catch (e) {
    next(e)
  }
}

