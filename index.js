const app = require('./server/app.js');

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is now listening on port ${port}`);
});
