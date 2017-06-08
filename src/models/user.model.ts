import * as firebase from 'firebase/app';

export interface IUser {
  $key?: string; 
  firstName?: string;
  lastName?: string;
  password?: string;
  editor_id: string;
  createdAt: Object;
  email: string;
  cellNumber?: string;
  landlineNumber?: string;

}

export class User implements IUser {
  email;
  editor_id;
  createdAt = firebase.database.ServerValue.TIMESTAMP;

  constructor(private fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (let f in fields) {
      this[f] = fields[f];
    }
  }
}