import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private _login: LoginService
  ) { }

}
