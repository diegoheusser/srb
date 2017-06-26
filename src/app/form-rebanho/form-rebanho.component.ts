import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-rebanho',
  templateUrl: './form-rebanho.component.html',
  styleUrls: ['./form-rebanho.component.css']
})
export class FormRebanhoComponent implements OnInit {

  tableHidden: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onClick() {
    this.tableHidden = false;
  }

  onCancel() {
    this.tableHidden = true;
    this.router.navigate(['/']);
  }

}
