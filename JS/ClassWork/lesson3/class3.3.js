// Задача 3

// Напишите функцию-конструктор Summator, которая создает объект с двумя методами.

// Метод sum(a,b) возвращает сумму двух значений;
// Метод run() запрашивает два значения при помощи prompt и выводит их сумму, используя метод sum. 
// В итоге вызов new Summator().run() должен спрашивать два значения и выводить их сумму.

function Summator()
{
	this.run=function()
	{
		var value1=prompt("Input value1:",'');
		var value2=prompt("Input value2",'');
		alert(this.sum(value1, value2));

	}
	this.sum=function(a,b)
	{
         return Number(a)+Number(b);
	}
}
new Summator().run();