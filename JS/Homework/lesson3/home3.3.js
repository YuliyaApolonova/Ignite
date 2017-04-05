// Задача 3.

// Дан объект ladder
// Сейчас, для последовательного вызова нескольких методов объекта, нужно вызывать каждый из них отдельно:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1 
// Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой:

var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
    return this;
  },
  down: function() { // вниз по лестнице
    this.step--;
    return this;
  },
  showStep: function() { // вывести текущую ступеньку
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().up().down().showStep(); // 1

