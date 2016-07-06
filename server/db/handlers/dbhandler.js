const knex = require('../db.js');

const dbSubmit = (userdata, callback) => {
  knex.insert({clientID:userdata.userID, 
              favorite_url:userdata.imageUrl, 
              image_url:userdata.url
            }).into('favorites').then(function(response){callback(response);});
};

const dBLookUp = (userID,callback) => {
  knex.select('*').from('favorites').where('clientID',userID).then(function(response){
    callback(response);
  });
};

module.exports = {
  dbSubmit,
  dBLookUp
};
