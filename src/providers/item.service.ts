import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class ItemService {

    constructor(public translateService: TranslateService) { }

    translateField(item: Object, field: string): Object {
        this.translateService.get(item[field]).subscribe((res: string) => {
            item[field] = res;
        });

        return item;
    }

}