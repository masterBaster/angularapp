import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title = 'templete sytax';
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = true;
  enableAdd: boolean = true;


  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Adams',
        age: 30,
        address: {
          street: '50 Main st.',
          city: 'Boston',
          state: 'MA'
        },
        image:'https://picsum.photos/600/600/?random'
      },
      {
        firstName: 'Paul',
        lastName: 'Mark',
        age: 31,
        address: {
          street: '356 Main st.',
          city: 'Boston',
          state: 'MA'
        },
        image:'https://picsum.photos/600/600/?random'
      },
      {
        firstName: 'Mick',
        lastName: 'Kovnacki',
        age: 34,
        address: {
          street: '10 Main st.',
          city: 'Boston',
          state: 'MA'
        },
        image:'https://picsum.photos/600/600/?random'
      },
    ];
    this.loaded = true;

    // this.addUser({
    //   firstName: 'David',
    //   lastName: 'Malkowski'
    //   })
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
