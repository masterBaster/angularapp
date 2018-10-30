import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[];
  data: Observable<any>;

  constructor() {
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
  }

  getData(){
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next('number 1')
      }, 1000);
      setTimeout(() => {
        observer.next('number 2')
      }, 2000);
      setTimeout(() => {
        observer.next('number 3')
      }, 3000);
      setTimeout(() => {
        observer.next('number 4')
      }, 4000);
    });
    return this.data;
  }

  getUsers(): Observable<User[]>{
    console.log('fetching users from the service...')
    return of(this.users)
  }
  addUser(user: User){
    this.users.unshift(user);
  }
}
