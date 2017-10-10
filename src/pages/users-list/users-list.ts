import { Component, Input } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  AlertController, 
  ActionSheetController, 
  ToastController, 
  LoadingController,
  NavParams } from 'ionic-angular';

import { UserProvider, EditorProvider } from './../../providers';
import { IUser, IEditor } from './../../models';

@IonicPage({
    name: 'users-list',
    segment: 'users'
})
@Component({
  selector: 'page-users-list',
  templateUrl: 'users-list.html',
})
export class UsersListPage {
  users: IUser[];
  editor: IEditor;

  @Input() search: string = "";

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams,
    public userService: UserProvider,
    public editorService: EditorProvider,
  ) {
    let editorId = this.navParams.data.editor_id;

    if (editorId) {
      this.loadEditor(editorId);
      this.loadUsers(editorId);
    } else {
    this.userService.fetchAll()
    .subscribe(
      data => {
        this.users = data;
        console.log(this.users);
      },
      err => {
        console.log('error');
      });
    }  
  }

  ionViewCanEnter(): boolean {
    let user = this.userService.getCurrent();

    return !!user;
  }

  loadUsers(editorId: string) {
    this.userService.fetchByEditorId(editorId)
    .subscribe(data => {
      this.users = data;
    })
  }

  loadEditor(editorId) {
    this.editorService.fetchById(editorId)
        .subscribe( data => {
          this.editor = data;          
        })
  }

  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
 
  createUser(editorId: string) {
    let prompt = this.alertCtrl.create({
      title: 'User Email',
      message: "Enter an email for this new user you're so keen on adding",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            let loading = this.loadingCtrl.create({
              dismissOnPageChange: true,
            });
            loading.present();
            this.userService.create(data.email, editorId)
            .then((user) => {
              loading.dismiss().then( () => {
                this.navCtrl.push('user-details', {
                  'id': user.key
                })
              });
            })
            .catch(err => {
              console.log(err.message);
              loading.dismiss().then( () => {
                let alert = this.alertCtrl.create({
                  message: err.message,
                  buttons: [
                    {
                      text: "Ok",
                      role: 'cancel'
                    }
                  ]
                });
                alert.present();
              })
            })
          }
        }
      ]
    });
    prompt.present();
  }

  deleteUser($event, user: IUser) {
    $event.stopPropagation();
    let alert = this.alertCtrl.create({
      title: 'Confirm deletion',
      message: 'Do you want to remove this user?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Remove',
          handler: () => {
            this.userService.delete(user.$key)
              .then(_ => {
                this.presentToast('User removed successfully');
              })
              .catch(err => console.log(err, 'You do not have access!'));
          }
        }
      ]
    });
    alert.present();
  }

  resetUserPassword($event, user: IUser) {
    $event.stopPropagation();
    this.userService.resetPassword(user.email)
    .then( () => {
      this.presentToast('Email sent successfully');
    }, error => {
      console.log(error.message);
    });
  }

  updateUser($event, user: IUser) {
    $event.stopPropagation();
    this.navCtrl.push('user-details', {
      'id': user.$key
    })
  }
}
