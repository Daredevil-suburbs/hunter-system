const db = require("../database/db")

exports.getTasks = (req, res) => {
  db.all("SELECT * FROM tasks", (err, rows) => {
    res.json(rows)
  })
}

exports.addTask = (req, res) => {
  const { title, xp } = req.body

  db.run(
    "INSERT INTO tasks (title, xp, completed) VALUES (?, ?, 0)",
    [title, xp],
    function () {
      res.json({ id: this.lastID })
    }
  )
}

exports.completeTask = (req, res) => {
  const id = req.params.id

  db.run(
    "UPDATE tasks SET completed = 1 WHERE id = ?",
    [id],
    () => res.json({ message: "Quest completed" })
  )
}