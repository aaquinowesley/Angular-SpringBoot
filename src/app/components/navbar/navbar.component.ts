import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./home.component.scss'],
})
export class NavbarComponent {
  @Input() meuinput = '';
}
