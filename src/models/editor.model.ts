import * as firebase from 'firebase/app';

export interface IEditor {
  $key?: string;
  name: string;
  siret?: number;
  tva?: string;
  address?: string;
  eai?: string; //Extra Address Information
  email?: string;
  zip?: string;
  city?: string;
  rcs?: string;
  notes?: string;
  createdAt: Object;
}

export class Editor implements IEditor {
  name;
  createdAt = firebase.database.ServerValue.TIMESTAMP;

  constructor(name: string) {
    this.name = name;
  }
}