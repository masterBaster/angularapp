import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = true;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Adams',
        email: 'Adams@gmail.com',
        isActiv: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true,
      },
      {
        firstName: 'Paul',
        lastName: 'Mark',
        email: 'mark@gmail.com',
        isActiv: false,
        registered: new Date('05/12/2018 08:38:00'),
        hide: true
      },
      {
        firstName: 'Mick',
        lastName: 'Kovnacki',
        email: 'Kovnacki@gmail.com',
        isActiv: true,
        registered: new Date('08/19/2018 08:33:00'),
        hide: true
      },
    ];
    this.loaded = true;

    // this.addUser({
    //   firstName: 'David',
    //   lastName: 'Malkowski'
    //   })
  }

  // addUser() {
  //   this.user.isActiv = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);

  //   // clear up our form after added user
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //   }
  // }

  toggleHide(user: User) {
    user.hide = !user.hide
  }

  onSubmit(e) {
    console.log('submitting form...')
    e.preventDefault();
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value)
  }
}
