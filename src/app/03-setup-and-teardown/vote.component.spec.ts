import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
    // Arrange -- initialize system under test
    let component : VoteComponent;
    // puting initialization in the suite can save on code, but might also cause
    // side effects as one test may change expected values for another.
    beforeEach(() => {
      // set up
      // instead put initialization here
      component = new VoteComponent();
    })

    afterEach(() => {}) // available for any cleanup needed
    beforeAll(()=> {}) // executed once before ALL tests
    afterAll(()=>{}) // executed once after ALL tests

  it('should increment totalVotes when upvoted', () => {
    // Act -- call method or function
    component.upVote();
    // Assert
    expect (component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    component.downVote();

    expect (component.totalVotes).toBe(-1);
  });

});