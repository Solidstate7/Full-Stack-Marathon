class BoardController {
  constructor(data) {
    this.data = data
  }

  list(req, res) {
    console.log(data);
    res.send('list')
  }
}

module.exports = BoardController