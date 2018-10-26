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
  currentClasses = {};
  currentStyle = {};


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
        image: 'https://picsum.photos/600/600/?random',
        isActiv: true,
        country: 'PL',
        balance: 100,
        registered: new Date('01/02/2018 08:30:00')
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
        image: 'https://picsum.photos/600/600/?gravity=west',
        isActiv: false,
        country: 'USA',
        balance: 90,
        registered: new Date('05/12/2018 08:38:00')
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
        image: 'https://picsum.photos/600/600/?gravity=east',
        isActiv: true,
        country: 'BR',
        balance: 80,
        registered: new Date('08/19/2018 08:33:00')
      },
    ];
    this.loaded = true;

    // this.addUser({
    //   firstName: 'David',
    //   lastName: 'Malkowski'
    //   })
    this.setCurrentClasses();
    this.setCurrentStyle();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyle() {
    this.currentStyle = {
      'padding-top': this.showExtended ? '0' : '60px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }

  getColor(country) {
    switch (country) {
      case 'UK':
        return 'red';
      case 'USA':
        return 'blue';
      case 'PL':
        return 'red';
      case 'BR':
        return 'green';
    }
  }
}
