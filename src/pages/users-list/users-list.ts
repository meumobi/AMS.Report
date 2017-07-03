import { Component, Input } from '@angular/core';
import { IonicPage, NavController, AlertController, ActionSheetController, ToastController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers';
import { IUser } from '../../models';

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
  @Input() search: string = "";

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams,
    public userService: UserProvider
  ) {
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

  createUser() {
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
            this.userService.create(data.email)
            .then((user) => {
              this.navCtrl.push('user-details', {
                'id': user.key
              })
            })
            .catch(err => console.log(err, 'You do not have access!'));
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

  updateUser($event, user: IUser) {
    $event.stopPropagation();
    this.navCtrl.push('user-details', {
      'id': user.$key
    })
  }
}
