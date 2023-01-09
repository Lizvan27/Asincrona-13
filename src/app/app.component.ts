import { Component } from '@angular/core';
import UsersJson from './users.json';

interface USERS {
  Apellido: String;
  Casado: boolean;
  Direccion: String;
  Nombre: String;
  Telefono: Number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asincrona-13';

  Users: USERS[] = UsersJson;
  constructor(){
    console.log(this.Users)
  }
}
