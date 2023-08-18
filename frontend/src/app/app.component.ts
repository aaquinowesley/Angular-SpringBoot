import { Component, Input } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// private http: HttpClient

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  @Input() title = 'frontend';
  recebendoMeuInput = 'Meu input Recebido';

  constructor(){

  }
}
