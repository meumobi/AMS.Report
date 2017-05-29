import { Pipe, PipeTransform } from '@angular/core';

import { Editor} from '../../models'

@Pipe({
  name: 'editorSearch',
})
export class EditorSearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(editors: Editor[], searchString: string): any {
    let matches: Editor[] = [];
    
    if (!searchString) {
      return editors;
    }
    editors.forEach( editor => {
      if (editor.name.match(new RegExp(searchString, 'i'))) {
        matches.push(editor);
      }
    });

    return matches;
  }
}