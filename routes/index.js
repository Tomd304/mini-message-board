var express = require("express");
var router = express.Router();

let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
});

router.post("/new", (req, res) => {
  const authorName = req.body.authorsNameInput;
  const msg = req.body.msgInput;
  messages.push({ text: msg, user: authorName, added: new Date() });
  res.redirect("/");
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

module.exports = router;
