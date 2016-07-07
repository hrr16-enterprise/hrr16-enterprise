//=======================
// Database Schema 
//
// Table: Favorites
//
// Column 1: UID
// Column 2: ClientID
// Column 3: Favorite URL
// Column 4: Image URL
// Column 5: Timestamp
//=======================

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
