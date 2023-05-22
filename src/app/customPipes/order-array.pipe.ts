import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderArray'
})
export class OrderArrayPipe implements PipeTransform {

  transform(array: string[]): string[] {
    for (let i = 0; i <= array.length; i++) {
      let temp = array[i];
      if (array[i] > array[i + 1]) {
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
    return array;
  }

}
