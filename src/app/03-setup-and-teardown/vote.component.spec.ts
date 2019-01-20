import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  it('should increment totalVotes when upvoted', () => {
    // Arrange -- initialize system under test
    let component = new VoteComponent();
    // Act -- call method or function
    component.upVote();
    // Assert
    expect (component.totalVotes).toBe(1);
  });
  it('should decrement totalVotes when downvoted', () => {
    let component = new VoteComponent();

    component.downVote();

    expect (component.totalVotes).toBe(-1);
  });

});