
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Maaruf Dauda', username: 'emkay', password: 'aLongPassword', phone:'aPhone'},
        { name: 'Maaruf Dauda', username: 'emkay1', password: 'aLongPassword', phone:'aPhone'},
        { name: 'Maaruf Dauda', username: 'emkay2', password: 'aLongPassword', phone:'aPhone'}
      ]);
    });
};
