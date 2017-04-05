// ###Задача 3

// Напишите функцию joinArgs, которая выводит свои аргументы, разделенные символом ‘*’ на экран в виде строки. Используйте прием “одалживания методов”. У вас должно получиться:

// joinArgs(1,2,3) // 1*2*3 
// joinArgs('hello', 'world', '!') // hello*world*!

function joinArgs(){
  arguments.join = [].join;
  
  var str = arguments.join('*');

  alert(str);

}
joinArgs(1,2,3) // 1*2*3 
joinArgs('hello', 'world', '!') // hello*world*!
//arguments, заимствование метода join