import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ActionSheetController, ToastController, NavParams } from 'ionic-angular';
import { IUser } from '../../models';
import { UserProvider } from '../../providers';

@IonicPage({
    name: 'users-list',
    segment: 'users'
})
@Component({
  selector: 'page-users-list',
  templateUrl: 'users-list.html',
})
export class UsersListPage {

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams,
    public userService: UserProvider
    ) {}

  addUser(editorId: string) {
    let prompt = this.alertCtrl.create({
      title: 'Site Name',
      message: "Enter a name for this new site you're so keen on adding",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
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
            this.userService.create()
            /*
            .then((site) => {
              this.navCtrl.push('user-details', {
                'id': site.key
              })
            })
            .catch(err => console.log(err, 'Can\'t create Site!'));            
            */
          }
        }
      ]
    });
    prompt.present();
  }

  async register(user: IUser) {
    try {
      //const result = await this.authService.registerUser(user);
      //console.log(result);
    }
    catch(e) {
      console.error(e);
    }
  }

}
