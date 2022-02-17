import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  armaduras = [
    'Mark I',
    'Mark II',
    'Mark III',
    'Mark IV',
    'Mark V',
    'Mark VI',
    'Mark XLII'
  ];
  ironman = 'Tony Stark';
  revelar_identidad = false; // cambiar por true
  usar = this.armaduras[2];
  superhero = 'Ironman';
}