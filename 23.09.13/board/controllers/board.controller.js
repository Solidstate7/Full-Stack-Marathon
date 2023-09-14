const list = (req, res) => {
  res.render("boards/list.html")
}

const write = (req, res) => [
  res.render("boards/write.html")
]

module.exports = {
  list,
  write,
}