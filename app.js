const express = require("express")
const app = express()
const port = 9001
app.set("view engine", "ejs")
app.set("views", "./views")


app.get('/', function (req, res) {
  res.render("personalsite")
})

app.listen(port, function(){
  console.log("Personal site server is running on port " + port);
});