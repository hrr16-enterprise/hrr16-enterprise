//=======================
// Database handlers
//=======================
const knex = require('../db.js');

// Submission to database 'favorites'
// Submits userID, favored picture link, and favored url
const dbSubmit = (userdata, callback) => {
  knex.insert({clientID:userdata.userID, 
              favorite_url:userdata.url, 
              image_url:userdata.imageUrl 
            }).into('favorites')
              .then(function(response){
                    callback(response);
        }
    );
};

// Database lookup function for a given user
// Retrieves a list of favored items for a given user
const dBLookUp = (userID,callback) => {
  knex.select('*')
      .from('favorites')
      .where('clientID',userID)
      .then(function(response){
            callback(response);
    }
  );
};

module.exports = {
  dbSubmit,
  dBLookUp
};
