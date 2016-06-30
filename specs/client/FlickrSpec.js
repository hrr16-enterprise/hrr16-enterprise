import { renderComponent, expect } from '../TestHelper';
import FlickrContainer from '../../client/containers/FlickrContainer';

describe('Flickr Component', () => {
  let component;
  
  beforeEach((done) => {
    component = renderComponent(FlickrContainer);
    done();
  });
  
  it('should exist', (done) => {
    expect(component).to.exist;
    done();
  });
  
  it('should have a placeholder div', (done) => {
    expect(component).to.have.class('placeholder');
    done();
  });
  
});
