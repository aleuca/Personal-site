const express = require("express")
const app = express()
const path = require("path")
const port = 9001

app.use(express.static('public'))


app.get('/resume', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/views/resume.html'))
})

app.get('/projects', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/views/projects.html'))
})

app.get('/mystory', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/views/mystory.html'))
})

app.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/views/contact.html'))
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/views/personalsite.html'))
})

app.listen(port, function() {
  console.log("Personal site server is running on port " + port)
})