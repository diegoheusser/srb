import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-inseminacao',
  templateUrl: './report-inseminacao.component.html',
  styleUrls: ['./report-inseminacao.component.css']
})
export class ReportInseminacaoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['/']);
  }

}
