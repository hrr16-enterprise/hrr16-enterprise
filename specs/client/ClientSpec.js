import { expect } from 'chai';
import * as actions from '../../client/actions/index.js';
import * as types from '../../client/constants/ActionTypes.js';

describe('', () => {

  describe('Client Test Suite', () => {
    it('should be functional', (done) => {
      expect(true).to.equal(true);
      done();
    });
  });

  describe('Actions', () => {
    it('should create an action to open a popup', (done) => {
      const content = 'Popup test successful!'
      const expectedAction = {
        type: types.POPUP_OPEN,
        payload: {
          content: content,
          type: 'general',
        }
      };
      expect(actions.popupOpen(content)).to.deep.equal(expectedAction);
      done();
    });
  });
  
});
