// ###Задача 1

// Напишите функцию printNumber, которая последовательно выводит в консоль числа от 1 до 20, 
// с интервалом между числами 100мс. То есть, весь вывод должен занимать 2000мс, 
// в течение которых каждые 100мс в консоли появляется очередное число.

function printNumber(){
    var i=1;

    function f(){
    	console.log(i++);
    	if (i==21){
    		clearInterval(timer);
    	};
    }

	var timer = setInterval(f, 100);
}
printNumber();