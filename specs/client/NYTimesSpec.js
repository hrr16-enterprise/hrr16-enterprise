import { renderComponent, expect } from '../TestHelper';
import NYTimesContainer from '../../client/containers/NYTimesContainer';

describe('NYTimes Component', () => {
  let component;
  
  beforeEach((done) => {
    component = renderComponent(NYTimesContainer);
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
