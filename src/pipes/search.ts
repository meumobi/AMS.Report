import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], searchString: string, field: string = 'name'): any {
    let matches: any[] = [];
    
    if (!searchString) {
      return items;
    }
    items.forEach( item => {
      if (item.hasOwnProperty(field) && item[field].match(new RegExp(searchString, 'i'))) {
        matches.push(item);
      }
    });

    return matches;
  }
}