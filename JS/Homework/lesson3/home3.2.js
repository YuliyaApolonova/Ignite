// ###Задача 2
// Напишите функцию runString, которая:

// 1)принимает 2 аргумента:

// arg: аргумент любого типа
// объект со свойствами:
// param: строка.
// func: строка, содержащая код функции.
// 2)выполняет код функции func, переданной ей в качестве аргумента, с параметром arg. Например:

// var arg = 4,                         // аргумент для функции runString
//     obj = {
//       param: 'num',                  // имя параметра для функции в свойстве func
//       func: 'return Math.sqrt(num)'  // функция, которая должна быть вызванв с  агрументом arg
//     };

function runString(arg, obj){

	function getFunc(obj){
		return obj.func;
	}

	function getParam(obj){
		return obj.param;
	}

	var method = getFunc(obj);
	var parametr = getParam(obj);

	var f = new Function(parametr, method);
	
	alert(f(arg));
}

var arg = 4,                         // аргумент для функции runString
    obj = {
      param: 'num',                  // имя параметра для функции в свойстве func
      func: 'return Math.sqrt(num)'  // функция, которая должна быть вызванв с  агрументом arg
    };

var arg2 = 9,
    obj2 = {
      param: 'number',
      func: 'return (number-3)'
    };

runString(arg, obj);
runString(arg2, obj2);
