import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../model/user';

@Injectable()
export class AuthService {

  public showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { 

  }

  doLogin(user: User): boolean {
    if(user.username == 'root' && user.password == 'root') {
      localStorage.setItem('srb-user', JSON.stringify(user));
      this.showMenuEmitter.emit(true);
      this.router.navigate(['/']);
      return true;
    } else {
      this.showMenuEmitter.emit(false);
      return false;
    }
  }

  doLogout() {
    localStorage.removeItem('srb-user');
    this.showMenuEmitter.emit(false);
    this.router.navigate(['/login']);
  }

  userIsAuth(): boolean {
    let user = JSON.parse(localStorage.getItem('srb-user'));
    if(user != null) {
      if(user.username == 'root' && user.password == 'root') {
        this.showMenuEmitter.emit(true);
        return true;
      } else {
        this.showMenuEmitter.emit(false);
        return false;
      }
    } else {
      this.showMenuEmitter.emit(false);
      return false;
    }
  }

}
