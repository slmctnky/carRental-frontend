import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color';

@Pipe({
  name: 'filterColorPipe'
})
export class FilterColorPipePipe implements PipeTransform {

  transform(value: Color [],colorFilterText:string): Color[] {
    colorFilterText=colorFilterText?colorFilterText.toLocaleLowerCase():null
    return colorFilterText?value.
    filter((c:Color)=>c.name.toLocaleLowerCase().indexOf(colorFilterText)!==-1):value;
  }

}
