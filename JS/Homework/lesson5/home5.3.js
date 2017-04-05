// Сделайте таймер обратного отсчета, 
// который выполняет обратный отсчет от зданого числа до нуля.
//  Когда доходит до нуля - выводит сообщение о том, что отсчет закончен.
// Например, var timer=10,
//  каждую секунду на странице меняется числа - 10, 9, 8... и так далее до нуля.

function timer(time){
	var i=time;

	function t(){
		var elem = document.getElementById("timer");
		elem.innerHTML = "Late" + i + "s";

		if (i==0){
	       clearInterval(setTime);
	       alert("Time out!");
	    }
		//document.write(i-- + ' ');
		i--;
	}

	var setTime = setInterval(t, 1000);
}

timer(10);
