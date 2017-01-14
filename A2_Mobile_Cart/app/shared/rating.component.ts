import {Component,OnChanges,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'mob-rate',
    templateUrl:'app/shared/rating.component.html',
    styleUrls :['app/shared/rating.component.css']
    
})

export class RatingComponent implements OnChanges {

  @Input() rating : number;
    ratingWidth : number;
  @Output() ratingClicked = new EventEmitter();  
    
    ngOnChanges():void{
        this.ratingWidth = this.rating * 82/5;
    }
    onClick():void{
        console.log('you have clicked on the star');
        this.ratingClicked.emit('you clicked on the ratings');
    }
}