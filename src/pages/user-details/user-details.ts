import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  ToastController, 
  NavParams,
  LoadingController, 
  Loading,
  AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserProvider, EditorProvider } from '../../providers';
import { IUser, IEditor } from '../../models';
import { EmailValidator } from '../../validators/email';

@IonicPage({
  name: 'user-details',
  segment: 'user/details/:id'
})
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {

  userForm: FormGroup; // = {} as IUser;
  user: IUser;
  loading: Loading;
  editor: IEditor;

  constructor(
    private fb: FormBuilder,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public userService: UserProvider,
    public editorService: EditorProvider,
    public alertCtrl: AlertController,
  ) {}

  ionViewDidLoad() {
    let key = this.navParams.data.id;

    this.userService.fetchById(key)
      .subscribe( data => {
        this.user = data;
        this.loadEditor(this.user.editor_id);
        console.log('Fetched user');
        console.log(data);
        this.fillForm(data);
       })
  }

  ionViewCanEnter(): boolean {
    let user = this.userService.getCurrent();

    return !!user;
  }

  fillForm(user) {
    this.userForm = this.fb.group({
      email: [user.email, Validators.compose([Validators.required, EmailValidator.isValid])],
      displayName: user.displayName ? user.displayName : '',
      firstName: user.firstName ? user.firstName : '',
      lastName: user.lastName ? user.lastName : '',
      cellNumber: user.cellNumber ? user.cellNumber : '',
      landlineNumber: user.landlineNumber ? user.landlineNumber : '',
      role: user.role ? user.role : 'editor',
      editor: this.editor ? {value: this.editor.name, disabled: true} : {value: '', disabled: true}
    });
  }

  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    })

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  updateDisplayName(userForm: FormGroup) {
    let user = userForm.value;
    userForm.value.displayName = user.firstName.concat(" ", user.lastName);
    return userForm;
  }

  updateUser(){
    if (!this.userForm.valid){
      console.log(this.userForm.value);
    } else {
      this.userForm = this.updateDisplayName(this.userForm);
      console.log(this.userForm.value);
      this.userService.update(this.user.$key, this.userForm.value)
      .then(_ => {
        this.presentToast('User updated successfully');
        this.navCtrl.pop();
      })
      .catch(error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      })
      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
    }
  }

  loadEditor(editorId) {
    this.editorService.fetchById(editorId)
      .subscribe( data => {
        this.editor = data;
        console.log(this.editor.name);
      })
  }

  cancel() {
    this.navCtrl.pop();
  }
}
