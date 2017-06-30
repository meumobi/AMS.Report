import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  MenuController,
  LoadingController, 
  Loading, 
  AlertController } from 'ionic-angular';

// import { IUser } from '../../models';
import { AuthProvider } from '../../providers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';

@IonicPage({
    name: 'login',
    segment: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: FormGroup; // = {} as IUser;
  loading: Loading;

  constructor(
    private fb: FormBuilder,
    public navCtrl: NavController,
    public authData: AuthProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public menu : MenuController
  ) {
    this.user = this.fb.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  toggleSplitPane() {
    this.menu.enable(!this.menu.isEnabled());
  }

  ionViewWillLeave(){
    this.menu.enable(true);
  }
  
  ionViewDidEnter(){
    this.menu.enable(false);
  }

  loginUser(){
      if (!this.user.valid){
        console.log(this.user.value);
      } else {
        this.authData.loginUser(this.user.value.email, this.user.value.password)
        .then( authData => {
          this.navCtrl.setRoot('sites-list');
        }, error => {
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
        });

        this.loading = this.loadingCtrl.create({
          dismissOnPageChange: true,
        });
        this.loading.present();
      }
  }
}
