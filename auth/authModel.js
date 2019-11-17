const db = require("../database/dbConfig");

function get(id) {
  let query = db("users as u");

  if (id) query.where("u.users_id", id).first();

  return query;
}

function insert(user) {
  db("users")
    .insert(user)
    .then(([id]) => this.get(id));
}

module.exports = {
  get,
  insert
};