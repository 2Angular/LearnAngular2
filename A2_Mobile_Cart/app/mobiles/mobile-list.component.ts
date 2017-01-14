import { Component,OnInit } from '@angular/core';
import { IMobile } from './mobile-list-IMobile';
import { MobileService } from './mobile-list.mobileservice'
import { Http,Response } from '@angular/http';


@Component({
    selector:'mob-mobiles',
    templateUrl:'app/mobiles/mobile-list.component.html',
    styles:['img[src]{height:75px;width:75px;}'],
    styleUrls:['app/mobiles/mobile-list.component.css'],
     
})

export class MobileListComponent implements OnInit{
    pageTitle:string = "Mobiles you should not miss";
    imageUrl:string ="app/assets/images/";
    showImages:boolean=true;
    refineMobile:string ="";
    mobiles: IMobile [];


    constructor(public _mobileService: MobileService){

    }


    displayMobiles():void{
        console.log('control the visibility of the images here');
        (this.showImages == true) ? this.showImages = false : this.showImages = true;
    }

    ngOnInit():void{
        console.log('inside the component initialization');
         this._mobileService.getMobileList().subscribe(response=> {this.mobiles = <IMobile[]>response.json()});
    }

    mobileRatingClicked(message:string):void{
        console.log(message);
    }
}
