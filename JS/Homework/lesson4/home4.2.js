// ###Задача 2

// Напишите функцию compose, которая принимает значение в качестве основного параметра и произвольное количество функций в качестве дополнительных параметров. 
//Функция должна вернуть значение, полученное путем использования основного параметра 
//как аргумента для функций, переданных ей в качестве дополнительных аргументов. Например:

// var doubleTheValue = function(val) { return val * 2; }
// var addOneToTheValue = function(val) { return val + 1; }
// compose(5, doubleTheValue) //должно вернуться значение 10
// compose(5, doubleTheValue, addOneToTheValue) // должно вернуться значение  11
// Если функции передан только один параметр, она должна вернуть его значение.

function compose(baseValue){
	var result = baseValue;
	  if (arguments.length ==0){ 
		alert(baseValue);
	  }

	  for(var i=1; i<arguments.length; i++){
       result = arguments[i](result);
	  }

   alert(result);
}

var doubleTheValue = function(val) { return val * 2; }
var addOneToTheValue = function(val) { return val + 1; }
compose(5, doubleTheValue) //должно вернуться значение 10
compose(5, doubleTheValue, addOneToTheValue) // должно вернуться значение  11
compose(7);
