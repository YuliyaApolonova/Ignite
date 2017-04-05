
function sum(){
	var summ = 0;
	function sum2(){
		for(var i=0; i<arguments.length; i++){

			if (isNaN(parseFloat(arguments[i])) == true){
				arguments[i] = 0;
			}
			else{
				arguments[i] = parseFloat(arguments[i]);
			}

			summ = summ + arguments[i];
		};

		sum2.toString = function(){
			return summ;
    	};

		return sum2;
    }	
	return sum2.apply(null, arguments);
}
alert(sum(3,4)(1,2));
alert(sum("Help", 6, "3")([3,2,1]));
