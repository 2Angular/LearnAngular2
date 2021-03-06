import {Component} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { IMobile } from './mobile-list-IMobile';

@Component({
    templateUrl: 'app/mobiles/mobile-detail.component.html'
})

export class MobileDetailComponent {
    mobileid: string;
    mobile: any;
    mobiles: IMobile[] = [
        {
            "msId": 1,
            "name": "Motorola",
            "model": "MG",
            "releaseDate": "March 19, 2016",
            "description": "Motorola Rocks.",
            "price": 10000,
            "rating": 3.2,
            "image": "motorola-moto-m-.jpeg"
        },
        {
            "msId": 2,
            "name": "Lenovo",
            "model": "K6 Power",
            "releaseDate": "March 18, 2016",
            "description": "Lenova Super",
            "price": 20000,
            "rating": 4.2,
            "image": "lenovo-k6-power.jpeg"
        },
        {
            "msId": 3,
            "name": "Nokia",
            "model": "520",
            "releaseDate": "May 21, 2016",
            "description": "Now Managed by Microsoft",
            "price": 15000,
            "rating": 4.8,
            "image": "nokia.jpg"
        },
        {
            "msId": 4,
            "name": "Letv",
            "model": "max2",
            "releaseDate": "May 15, 2016",
            "description": "Best Economical Phone",
            "price": 7500,
            "rating": 3.7,
            "image": "leeco.jpg"
        }
    ];


    constructor(public route: ActivatedRoute, public router: Router) {
        this.route.params.subscribe(params => { this.mobileid = params['id']; this.mobile = this.mobiles.find(this.findMobile,[this.mobileid]) });
        
    }

    navigateBack(): void {
        this.router.navigate(['./mobilelist']);
    }

    private findMobile(element: IMobile) {
        return element.msId == +this[0];
    }
}