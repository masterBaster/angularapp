import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/services/data.service';

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

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.users = this.dataService.getUsers(); 

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

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid){
      console.log('form is not valid')
    }else {
      value.isActiv = true;
      value.registered = new Date();
      value.hide = true;
      
      this.dataService.addUser(value);

      this.form.reset();
    }
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value)
  }
}
