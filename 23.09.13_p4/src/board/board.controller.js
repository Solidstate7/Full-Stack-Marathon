const list = (req, res) => {
  res.render('boards/list.html')
}

const write = (req, res) => {
  res.render('boards/write.html')
}

const postWrite = (req, res) => {
  boards.push(req.body)
  const id = boards.length - 1
  res.redirect(`/boards/write.html?id=${id}`)
}

const view = (req, res) => {
  const { id } = req.query
  const row = boards[id]
  res.render('')
} 

