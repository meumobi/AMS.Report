import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import { Editor } from '../models';

@Injectable()
export class EditorService {

  constructor(private http: Http) {}

  getEditors(): Observable<Editor[]> {
    return this.http
      .get('assets/editors.json')
      .delay(2000)
      .map((res: Response) => res.json());
  }

  getEditor(id): Observable<Editor> {
    return this.http
      .get('assets/editors.json')
      .map((res: Response) => res.json())
      .map((editors: Editor[]) => {
        for (let editor of editors) {
          if (editor.$key === id) {
            return editor;
          }
        }
      });
  }
}