'use strict';

let Person = class {
   constructor(firstName="John", lastName='Doe', age=0, gender='Male') {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
   }

   // геттер
   get fullName() {
      return `${this.firstName} ${this.lastName}`;
   }
   sayHi() {
      alert(`Hello, my name is ${this.fullName}`);
   }

};

var user_1 = new Person('Василий', 'Иванов', 55);

user_1.sayHi();