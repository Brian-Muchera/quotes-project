import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Input() quotes: Quotes;

  @Output() addQuote = new EventEmitter<Quotes>();

  newQuote = new Quotes(0,'', '', '', new Date());

  submitQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quotes(0,'', '', '', new Date());
  }



  constructor() { }

  ngOnInit() {
  }

}
