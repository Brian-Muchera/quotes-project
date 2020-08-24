import { VotesComponent } from './../vote/vote.component';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quotes } from '../quotes'


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {


  @Input()uvote : VotesComponent;
  @Input() quote:Quotes;
  
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);

  }

  constructor() { }

  ngOnInit() {
  }

}
