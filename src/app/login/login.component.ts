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

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  doLogin() {
    this.authService.doLogin(this.user);
  }

}
