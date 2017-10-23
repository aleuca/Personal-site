const express = require("express")
const app = express()
const path = require("path")
const port = 9001

app.use(express.static('views'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/personalsite.html'));
})

app.listen(port, function() {
  console.log("Personal site server is running on port " + port);
});