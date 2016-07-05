
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('favorites', function(table) {
            table.increments('uid').primary();
            table.string('clientID');
            table.string('favorite_url');
            table.string('image_url');
            table.timestamps();
        })
    ])
};

exports.down = function(knex, Promise) {  
    return Promise.all([
        knex.schema.dropTable('favorites')
    ])
};

