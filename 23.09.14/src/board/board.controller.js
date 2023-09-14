const boardService = require('./board.service')

exports.getList = (req, res) => {
  const result = boardService.getFindAll()
  const sample = ['web7722', 'ingoo', 'block', 'chain', '10']
  res.render("board/list.html", {list: result,})
}

exports.getWrite = (req, res) => {
  res.render('board/write.html')
}

exports.getView = (req, res) => {
  const { id } = req.query
  const result = boardService.getFindOne(id)
  res.render('board/view.html', {...result})
}

exports.getModify = (req, res) => {
  res.send('GET MODIFY')
}

exports.postWrite = (req, res) => {
  const result = boardService.create(req.body)
  // res.json(result) // redirect
  res.redirect(`/boards/view?id=${result.id}`)
}

exports.postModify = (req, res) => {
  res.send('POST MODIFY')
}

exports.postDelete = (res, req) => {
  res.send('POST DELETE')
}

