import { Pipe, PipeTransform } from '@angular/core';
import { Post } from 'src/assets/models/post';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Post[], ...args: unknown[]): Post[] {

    return value.sort((a, b) =>{
      const date1 = new Date(a.date);
      const date2 = new Date(b.date);
      return (date1 > date2) ? -1 : 1;
    } )
  }

}
