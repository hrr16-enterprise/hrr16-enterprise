//=============================================
// Configuration for development and production
//=============================================

module.exports = {
  // development setting on local PC
  development: {
    client: 'postgresql',
    connection: {
      database: 'momento'
    }
  },
  // production setting for deployment 
  // Environmental variables stored on Heroku
  production: {
    client: 'postgresql',
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      ssl: true
    }
  }
};
