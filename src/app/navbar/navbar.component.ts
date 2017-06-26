import { Component, OnInit } from '@angular/core';

import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isDropdown: boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.isDropdown = true;
    this.authService.doLogout();
  }

  onDropdown() {
    this.isDropdown = !this.isDropdown;
  }

}
