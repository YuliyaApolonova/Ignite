
// ###Задача 1

// Представьте, что в JavaScript нет метода call, есть только метод apply.
// Используя apply, напишите метод call.
//apply+ извлечение каждого элемента массива в отдельный аргумент
// function calls(context){
// 	var argArray = [];
//     for (var i=0; i<arguments.length; i++){
//     	argArray.push(arguments[i]);
//     }
//    return apply(context, argArray);

// }

var user = {
	name: 'Kate', 
	age: 2
}

function getName(obj){
	alert (this.name);
}
                                                                                                                                                                    
function summ(a,b){
	var summ = a+b;
	alert (summ);
}

Function.prototype.calls = function(context){ 
	var argArray = [];
    for (var i=1; i<arguments.length; i++){
    	argArray.push(arguments[i]);
    }
   
   return this.apply(context, argArray);
}

getName.calls(user);
summ.calls(null, 6, 7);