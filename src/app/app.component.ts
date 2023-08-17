import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  @Input() title = 'frontend';
  recebendoMeuInput = 'Meu input Recebido';

  constructor(private http: HttpClient){

  }
}
