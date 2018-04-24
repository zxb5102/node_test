var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'xm'
    },
    useNullAsDefault: true
});
knex.schema.createTable('users', function (table) {
    table.increments('id');
    table.string('user_name');
}).then(function () {
    return knex.insert({ user_name: 'Tim' }).into('users');
})

// knex('coords').insert([{x: 20}, {y: 30}, {x: 10, y: 20}])