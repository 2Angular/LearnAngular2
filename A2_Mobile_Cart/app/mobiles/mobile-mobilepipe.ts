import {Pipe,PipeTransform} from '@angular/core';
import { IMobile } from './mobile-list-Imobile';

@Pipe({
    name:'MobileFilter'
})

export class MobileFilterPipe implements PipeTransform{
    transform(value:IMobile[],args:string[]):IMobile[]{
        let filterString = args[0];
        if(filterString ==undefined ||  filterString==""){
            return value;
        }
        var filteredArray : IMobile[] = new Array();
        value.forEach(element=>{
            if(element.name.indexOf(filterString)>=0){
                filteredArray.push(element)
            }
        })
        return filteredArray;
    }
}