// ###Задача 3 Напишите функцию, которая принимает один аргумент и возвращает его тип данных. 
// Выполните обработку исключений в случае передачи двух и больше аргументов.

//function 

function getType(arg){
	try{
		if (arguments.length > 1){
			throw new Error();
		}

		var type = typeof(arg);
		alert(type);

		
	}
	catch(e){
		alert("Too much arguments!");
	}
}

var user = {
	name: "Kate",
	age: 14
}

getType("Hello"); //string
getType(user); //object
getType(13); //number
getType(null); //object
getType(NaN); //number
getType(undefined); // indefined
getType(5,6); //Too much arguments!
getType("Hi", 67); //Too much arguments!