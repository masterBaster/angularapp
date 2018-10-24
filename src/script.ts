class Greeting {
  greeting: string;
    constructor(message: string) {
      this.greeting = message
    }
    greet(){
      return "Hello " + this.greeting;
    }
}
let greeter = new Greeting("world");

import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  // Properties
  firstName:string;
  lastName:string;
  age:number;
  address;

  foo:any;
  hasKids:boolean;
  numberArray: number[];
  stringArray: string[];
  anyArray: any[];
  myTuple: [string, number, boolean];
  unusable: void;
  u: undefined;
  n: null;

  // Methods
  constructor() {
    this.firstName = 'John',
    this.lastName = 'Doe',
    this.age = 30,
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    }
    this.foo = false,
    this.hasKids = true,
    this.numberArray = [1,2,3],
    this.stringArray = ['hello', 'world'],
    this.anyArray = [1,2,'hello','master',undefined,true],
    this.myTuple = ['hello', 12, true],
    this.unusable = undefined,
    this.u = undefined,
    this.n = null,
    

    console.log(this.age)
    this.hasBirthday();
    console.log(this.age)
    console.log(this.concatStirng('hello', 'world'));
  }

  sayHello(){
    console.log(`Hello ${this.firstName}`)
  }

  hasBirthday(){
    this.age += 1;
  }

  showAge(){
    return this.age;
  }

  concatStirng(str1: string, str2: string): string{
    return str1 + str2;
  }

}
