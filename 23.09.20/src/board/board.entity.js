class Board {
  id
  title
  writer
  content
  created_at
  hit

  constructor(id, title, writer, content) {
    this.id = id
    this.title = title
    this.writer = writer
    this.content = content
    this.created_at = created_at
    this.hit = hit
  }
}

module.exports = Board