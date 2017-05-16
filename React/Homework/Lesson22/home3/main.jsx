'use strict';
var React = require('react');
var ReactDOM = require('react-dom');

let Person = class {
   constructor(firstName = "John", lastName = 'Doe', age = 0, gender = 'Male') {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
   }
   fullName() {
      return `${this.firstName} ${this.lastName}`;
   }
   sayHi() {
      alert(`Hello, my name is ${this.fullName()}`);
   }
}
class User extends Person {
   constructor( firstName, lastName, age, gender, date = '0', id) {
      super(firstName, lastName, age, gender);
      this.date = date;
      this.id = id;
   }
   sayHi(){
      super.sayHi();
   }
   fullName(){
      super.fullName();
   }
}

var user_1 = new User('Vasya', 'Surname', 45, 'Male', '05.08.17', 1);
var user_2 = new User('Vasya2', 'Surname2', 35, 'Male', '05.09.17', 2);
var user_3 = new User('Vasya3', 'Surname3', 4, 'Male', '05.10.17', 3);
var user_4 = new User('Vasya4', 'Surname4', 5, 'Male', '06.08.17', 4);
let users = [user_1, user_2, user_3, user_4];

class App extends React.Component {
   constructor(props) {
      super(props);
   }
sayHi(user){
      user.sayHi();
}
   render() {

      return (
            <table>
               <tbody>{users.map((user,index)=>{
                  return <tr key={index}>
                     <td onClick={this.sayHi(user)}>{user.firstName}</td>
                     <td>{user.lastName}</td>
                     <td>{user.age}</td>
                     <td>{user.gender}</td>
                     <td>{user.signUpToDate}</td>
                     <td>{user.id}</td>
                  </tr>})
               }
               </tbody>
            </table>
      )
   }
}

var container = document.getElementById('example');

ReactDOM.render(<App/>, container);