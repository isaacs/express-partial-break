var express = require("express")
  , app = express.createServer()
  , messages = {}

app.dynamicHelpers({
  dh: function (req, res) {
    return function () {
      return res.partial("partial.ejs", {
        object: messages,
        as: "messages",
        locals: { hasMessages: Object.keys(messages).length },
        dynamicHelpers: false
      })
    }
  }
})

app.get("/messages", function (req, res, next) {
  res.render("view.ejs", { layout: "layout.ejs" })
})

app.put("/messages", function (req, res, next) {
  messages[Math.random()] = new Date().toUTCString()
  console.error(messages)
  res.render("putted.ejs", { layout: "layout.ejs" })
})

app.listen(1337, "localhost")
