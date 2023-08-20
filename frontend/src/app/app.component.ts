import { Component, Input } from '@angular/core';
import { ApiService } from './services/api.service';
// import { HttpClient } from '@angular/common/http';
// private http: HttpClient

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() title = 'frontend';
  enviandoDadoDaAppComponenteParaNavbar = 'Recebaaaaaa o Dado!';

  items = ['Wesley'];

  itemsApi!: any[];

  constructor() {
    // private apiService: ApiService
  }

  ngOnInit(): void {
    // this.apiService.get('itemsApi').subscribe(data => {
    //   this.itemsApi = data;
    // });
  }
  
  addItem(newItem: string) {
    if(!newItem.trim()){
      alert('Não é possivel passar um valor vazio!')
    } else{
      this.items.push(newItem);
    }
  }

  clearOneItem(item: any){
    delete this.items[item]
    console.log('peguei o', item, this.items)
  }

  clearItem(){
    this.items = []
  }
}
