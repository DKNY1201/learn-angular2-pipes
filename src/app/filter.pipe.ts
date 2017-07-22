import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, filterBy: string): any {
    if (value.length === 0 || filterString === undefined || filterString === '') {
      return value;
    }

    let items = [];

    for (const item of value) {
      if (item[filterBy] === filterString) {
        items.push(item);
      }
    }

    return items;
  }

}
