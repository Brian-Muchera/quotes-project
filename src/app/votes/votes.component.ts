import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  @Output() isComplete = new EventEmitter<boolean>();

  uvote = 0;
  dvote = 0;

  upVote(){
    this.uvote = this.uvote +1;
  }

  downVote(){
    this.dvote = this.dvote +1;
  }

  constructor() { }

  ngOnInit() {
  }

}
