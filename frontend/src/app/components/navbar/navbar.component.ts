import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() inputNavBar = '';
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
      this.newItemEvent.emit(value);
    } 
  }
