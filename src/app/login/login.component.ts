import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service'

import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User();
  public field: string = '';
  public login: boolean = true;
  public forget: boolean = false;
  public message: boolean = false;
  public userEmail: string = '';
  public emailValid: boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onChange() {
    this.field = '';
  }

  doLogin() {
    this.field = this.authService.doLogin(this.user)?'':'invalid';
  }

  doForget() {
    this.login = false;
    this.forget = true;
    this.message = false;

  }

  doMessage() {
    let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    console.log(regex.test(this.userEmail));
    if(regex.test(this.userEmail)) {
      this.login = false;
      this.forget = false;
      this.message = true;
      this.emailValid = true;
    } else {
      this.emailValid = false;
    }  
  }  

  doBack() {
    this.login = true;
    this.forget = false;
    this.message = false;
    this.emailValid = true;
    this.userEmail = '';
  }  

}
