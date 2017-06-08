import * as firebase from 'firebase/app';

export interface ISite {
  $key?: string; 
  title: string;
  editor_id: string;
  createdAt: Object;
  url?: string;
}

export class Site implements ISite {
  title;
  editor_id;
  createdAt = firebase.database.ServerValue.TIMESTAMP;

  constructor(title: string, editorId: string) {
    this.title = title;
    this.editor_id = editorId;
  }
}