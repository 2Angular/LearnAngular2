import { IMobile } from './mobile-list-Imobile';
import { ReflectiveInjector, Injectable, Injector } from '@angular/core';
import { Http,Response } from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';

@Injectable()
export class MobileService {
    mobileList : IMobile[];
    url :string ='api/mobiles/mobiles.json';

    constructor(public _http:Http){
       
    }

    getMobileList():Observable<Response>{
        return this._http.get(this.url);
 }
 private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}



