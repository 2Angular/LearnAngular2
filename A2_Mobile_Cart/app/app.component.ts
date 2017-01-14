import { Component } from '@angular/core';
import {MobileListComponent} from './mobiles/mobile-list.component';
import {MobileService} from './mobiles/mobile-list.mobileservice';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';


@Component({
    selector: 'mob-app',
    template: `
    <div>
    <h2>{{cartTitle}}</h2>
        <h1>Welcome to Angular2</h1>
            <nav>
        <a routerLink="/home" routerLinkAction="active"> Home</a>
        <a routerLink="/mobilelist" routerLinkAction="active"> Mobile List</a>
    </nav>    
        <router-outlet></router-outlet>
        </div>`,
     providers:[MobileService]
})
export class AppComponent {
    cartTitle : string = 'BigB Mobiles'
 }

