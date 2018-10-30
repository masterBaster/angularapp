import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
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
  @ViewChild('userForm') form: any;// this stuff should match whatever you put inside form
  data: any;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getData().subscribe(data => {
      console.log(data)
    })

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    }); 


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

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid){
      console.log('form is not valid')
    }else {
      value.isActiv = true;
      value.registered = new Date();
      value.hide = true;
      
      this.userService.addUser(value);

      this.form.reset();
    }
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value)
  }
}
