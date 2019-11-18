const db = require("../database/dbConfig");

function get(id) {
  let query = db("users as u");

  if (id) query.where("u.user_id", id).first();

  return query;
}

function insert(user) {
  return db("users")
    .insert(user)
    .then(([id]) => this.get(id));
}

function findBy(filter){
  return db('users')
  .where(filter)
  .first()
}

module.exports = {
  get,
  insert,
  findBy,
};
