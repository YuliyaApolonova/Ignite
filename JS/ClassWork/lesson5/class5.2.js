// ###Задача 2

// Превратите объект leader из примера ниже в JSON:
// После этого конвертируйте получившуюся строку обратно в объект.

var leader = {
  name: "Василий Иванович",
  age: 35
};

leaderObj = JSON.stringify(leader);
alert(leaderObj);

leaderObjToStr = JSON.parse(leaderObj);
alert(leaderObjToStr.age);