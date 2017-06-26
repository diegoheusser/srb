import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-inseminador',
  templateUrl: './form-inseminador.component.html',
  styleUrls: ['./form-inseminador.component.css']
})
export class FormInseminadorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  onSave() {
    this.router.navigate(['/cadastrado']);
  }

}
