import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';
import { CarDetailsDto } from '../models/carDetailsDto';

@Pipe({
  name: 'filterBrandPipe'
})
export class FilterBrandPipePipe implements PipeTransform {

  transform(value:Brand[] , filterBrandName:string): Brand[] {
    filterBrandName=filterBrandName?filterBrandName.toLocaleLowerCase():null
    return filterBrandName?value.
    filter((c:Brand)=>c.name.toLocaleLowerCase().indexOf(filterBrandName)!==-1):value;
  }

}
