import * as firebase from 'firebase/app';

export interface IUser {
  $key?: string; 
  displayName: string;
  firstName?: string;
  lastName?: string;
  password: string;
  editor_id: string;
  createdAt: Object;
  email: string;
  cellNumber?: string;
  landlineNumber?: string;
  preferredLanguage?: string;
  role: string;
}

export class User implements IUser {
  email;
  editor_id;
  displayName;
  createdAt = firebase.database.ServerValue.TIMESTAMP;
  role = "editor";
  password;

  constructor(email: string, editorId: string, password: string) {
    this.email = email;
    this.displayName = email;
    this.editor_id = editorId;
    this.password = password;
  }
}