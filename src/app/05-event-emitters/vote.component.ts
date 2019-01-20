
import { EventEmitter } from '@angular/core'; 

export class VoteComponent { 
  totalVotes = 0;
  // often used as @Output if have template 
  voteChanged = new EventEmitter();

  upVote() { 
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }
}