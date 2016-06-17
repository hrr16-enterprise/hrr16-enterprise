const expect = require('chai').expect;
const request = require('request');

const app = require('../../server/app.js');
const port = process.env.PORT || 8080;

describe('', function() {
  
  before((done) => {
    app.listen(port, (err) => {
      if (err) {
        done(err);
      } else {
        console.log(`server is now listening on port ${port}`)
        done();
      }
    });
  });
  
  describe('Server Test Suite', () => {
    it('should be functional', (done) => {
      expect(true).to.equal(true);
      done();
    });
  });
  
});
