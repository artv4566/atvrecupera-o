import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Estoque', url: '/estoques', icon: 'clipboard' },
    { title: 'Cadastrar Peças', url: '/cadastros', icon: 'add' },
    { title: 'Novo Gerente', url: '/login', icon: 'add' },

    //{ title: 'Usuario', url: '/usuario', icon: 'people' },
    // { title: 'Promoção', url: '/estoque-filtros', icon: 'cash' },
  ];
  //ublic labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
