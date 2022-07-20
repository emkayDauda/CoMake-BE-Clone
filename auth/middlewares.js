const bcrypt = require("bcrypt");

function authBodyValidator(req, res, next) {
  const { username, name, password, phone } = req.body;

  if (!Object.keys(req.body).length) {
    res.status(400).json({ error: true, message: "Missing request body" });
  } else if (!username || !name || !password) {
    res.status(400).json({ error: true, message: "Missing required param(s)" });
  } else {
    const hashedPassword = bcrypt.hashSync(password, 10);

    req.valUser = { username, name, password, phone };
    req.valHashedUser = { username, name, password: hashedPassword, phone };
    next()
  }
}

function loginValidator(req, res, next){
  const { username, password } = req.body;

  if (!Object.keys(req.body).length) {
    res.status(400).json({ error: true, message: "Missing request body" });
  } else if (!username || !password) {
    res.status(400).json({ error: true, message: "Missing required param(s)" });
  } else {
    req.valUser = { username, password };

    next()
  }
}

module.exports = {
  authBodyValidator,
  loginValidator,
};
