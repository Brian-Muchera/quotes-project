import { Component, OnInit, Input } from '@angular/core';
import { Quotes} from '../quotes'
import { QuoteFormComponent } from '../quote-form/quote-form.component';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuoteComponent implements OnInit {

@Input() name : QuoteFormComponent;
// @Input() description: any;
// @Input() submittedBy : any;


  quotes:Quotes [] =[
    new Quotes(1,
     'Life is what happens when you are busy making other plans',
    'Ann Ken',
     'Muchera Brian', new Date(2020,4,2), ),
   new Quotes (2,
     'Be happy for this moment. This Moment is your life',
     'Unknown',
     'Crazy Mindz', new Date(2020,4,2)),
new Quotes(3,
     'I think being in love with life is a key to eternal youth',
     'Peter Gonzales',
     'Jibril', new Date(2020,4,2)),
   new Quotes (4,
       'My mission in life is not merely to survive, but to thrive; and to do so with some passion,some compassion, some humor and some style',
     'Jane Martins',
     'penny calebs', new Date(2020,4,2))
  ]

  public show:boolean = false;
  public details: any = 'Show';

  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete the  Quote?`)

      if(toDelete){
        this.quotes.splice(index,1)
      }
     
    }
  }

  // addNewQuote(newQuote){
  //   let quoteLength = this.quotes.length;
  //   newQuote.id = quoteLength+1
  //   newQuote.name = newQuote
  //   newQuote.description =newQuote
  //   newQuote.submittedBy = newQuote
  //   newQuote.completeDate = new Date(newQuote.completeDate)
  //   this.quotes.push(newQuote)
  // }

  

  addNewQuote(newQuote){
let quoteLength = this.quotes.length;
newQuote.id = quoteLength+1;
newQuote.name = newQuote.name;
newQuote.decription = newQuote.description;
newQuote.submittedBy = newQuote.submittedBy;

newQuote.completeDate = new Date(newQuote.completeDate)
  this.quotes.push(newQuote)
}

  

  constructor() { 

  }

  ngOnInit() {
  }

  toggle(){
    this.show = !this.show;

    if(this.show)
    this.details= "Hide details";
    else
    this.details = "Show details"
  }

}
