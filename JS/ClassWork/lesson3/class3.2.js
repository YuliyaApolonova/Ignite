// Задача 2

// Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:

// Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
// Метод sum() возвращает сумму двух значений принятых от пользователя.
// Метод mul() возвращает произведение двух значений принятых от пользователя.
// Пример использования:
function Calculator()
{
this.read=function()
{
	this.value1=prompt('Input your value1:', '');
	this.value2=prompt("Input your value2:", '');
}
this.sum=function()
{
	return Number(this.value1)+Number(this.value2);
}
this.mul=function()
{
	return this.value1*this.value2;
}
}

var calculator = new Calculator();
calculator.read();

alert( "Summ=" + calculator.sum() );
alert( "Multiplication=" + calculator.mul() );