// Задача 1

// Напишите функцию sum, которая будет работать как показано в примере ниже:
// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15 
var a;
var b;
var c;

alert(sum(1)(2));
alert(sum(2)(3)(4));


function sum(a){
	var tempSum = a;

	function sum2(b){
		tempSum+=b;
		return sum2;
	    }
sum2.toString = function(){
	return tempSum;
    };
return sum2;
}