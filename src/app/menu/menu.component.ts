import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  optionRegisterIsSelected: boolean;
  optionReportIsSelected: boolean;

  constructor() {
    this.optionRegisterIsSelected = false;
    this.optionReportIsSelected = false;
  }

  ngOnInit() {
  }

  onClickRegister() {
    this.optionRegisterIsSelected = !this.optionRegisterIsSelected;
  }

  onClickReport() {
    this.optionReportIsSelected = !this.optionReportIsSelected;
  }

}
