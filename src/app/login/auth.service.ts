import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../model/user';

@Injectable()
export class AuthService {

  private userIsAuth: boolean;
  public showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  doLogin(user: User) {
    if(user.username == 'root' && user.password == 'root') {
      localStorage.setItem('srb-user', JSON.stringify(user));
      this.userIsAuth = true;
      this.showMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.userIsAuth = false;
      this.showMenuEmitter.emit(false);
    }
  }

}
