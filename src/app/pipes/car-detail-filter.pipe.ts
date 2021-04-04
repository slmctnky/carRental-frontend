import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailsDto } from '../models/carDetailsDto';

@Pipe({
  name: 'carDetailFilter'
})
export class CarDetailFilterPipe implements PipeTransform {

  transform(value: CarDetailsDto[], filterBrandName:string): CarDetailsDto[] {
    filterBrandName=filterBrandName?filterBrandName.toLocaleLowerCase():null
    return filterBrandName?value.
    filter((c:CarDetailsDto)=>c.carName.toLocaleLowerCase().indexOf(filterBrandName)!==-1):value;
  }

}
