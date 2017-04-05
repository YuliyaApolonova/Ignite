// ###Задача 1

// Напишите программу, которая принимает математическое выражение
//  (используйте prompt) и результат его получает через eval. 
//  При ошибке нужно выводить сообщение и просить изменить некорректный ввод.
//   Ошибкой считается не только некорректное выражение, 
// такое как 2+, но и выражение, возвращающее NaN, например 0/0.

function calculator(){
	
	while(true){
	    try{
	  	  var expression;
	      expression = prompt("Input your expression, please:\nEnter 'end' to break;", 0);

	      if(expression == 'end'){
	    	  break;
	      }
	      
	      var result = eval(expression);
	      if (isNaN(result)){
	      	throw new Error();
	      }

		  alert(result);
	    }
	    
	    catch(err){
		   alert("Incorrect data! Please, enter valid values:");
	    }
    }

}
calculator();