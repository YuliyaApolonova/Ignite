// Задача 3

// Создайте декоратор makeLogging(f, log), 
// который принимает в качестве аргумента функцию f и массив log. 
// Он должен возвращать обёртку вокруг f, 
// которая при каждом вызове записывает («логирует») аргументы в log, а затем передает вызов в f. 
// В этой задаче можно считать, что у функции f ровно один аргумент. Работать должно так:

function work(a) { //example of function
  alert(a+1);
}

function makeLogging(f, log) {

  function wrapper(a) {
      log.push(a);
      return f.call(this, a);
    }

  return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1); // 2
work(5); // 6

for (var i = 0; i < log.length; i++) {
  alert( 'Log:' + log[i] ); // "Лог:1", затем "Лог:5"
}