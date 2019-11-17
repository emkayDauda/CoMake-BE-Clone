const auth = require("express").Router();
const db = require("./authModel");
const bodyVal = require("./middlewares").authBodyValidator;

auth.post("/register", bodyVal, (req, res) => {
  db.insert(req.valHasheduser)
    .then(user => {
      res
        .status(200)
        .json({ error: false, message: "Created successfully", data: user });
    })
    .catch(err => res.status(500).json({ error: true, message: err.message,  data: err}));
});

module.exports = auth;
