import { Component, OnInit } from '@angular/core';
import { Usuario } from './interfaz';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Service Rest';

  constructor(private userService: UsersService) {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.userService.getUsers().subscribe((data: Usuario[]) => {
      console.log(data);
    });
  }

  createUser() {
    const user: Usuario = {
      name: 'string',
      apellido: 'string',
      email: 'string',
      telefono: 123,
      plan: 'string',
    };
    this.userService.createUser(user).subscribe((data: Usuario) => {
      console.log(data);
    });
  }
}
