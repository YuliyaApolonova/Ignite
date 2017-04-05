// ###Задача 1

// Напишите функцию sumArgs, которая суммирует все свои аргументы.
// При решении задачи используйте метод call или apply.


function sumArgs(){
	//arguments.reduce = [].reduce; //одалживание метода
	//var result = arguments.reduce(addArgs, 0);
	var reduce = [].reduce;
	var result = reduce.call(arguments, addArgs, 0); //this=arguments, вызов через call
	function addArgs(sum, current){
		return sum+current;
	}
	alert (result);
}
sumArgs(3,6,7);
sumArgs(5,7);