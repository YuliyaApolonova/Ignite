// ###Задача 2

// Перепишите с использованием встроенного метода bind:

// function bind(func, context) {
//   return function() {
//     return func.apply(context, arguments);
//   };
// }

var user = {
  firstName: "Vasya",
  sayHi: function() {
    alert( this.firstName );
  }
}; 

// var f = bind(user.sayHi, user);  
// f(); 

var f = user.sayHi.bind(user); //использование встроенного метода
f();