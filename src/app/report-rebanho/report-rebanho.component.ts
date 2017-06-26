import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-rebanho',
  templateUrl: './report-rebanho.component.html',
  styleUrls: ['./report-rebanho.component.css']
})
export class ReportRebanhoComponent implements OnInit {

  tableHidden: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  onClick() {
    this.tableHidden = false;
  }

}
