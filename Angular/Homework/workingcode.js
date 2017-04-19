<!DOCTYPE html>
<html lang="en" ng-app = "toDoList">
   <head>
   <meta charset="UTF-8">
   <title>home11.2</title>
<link href="Libraries/bootstrap.css" rel="stylesheet" />
   <link href="Libraries/bootstrap-theme.css" rel="stylesheet" />
   <script src = 'angular.js'></script>
   <script>
var model = { //создаем модель - массив объектов с определенными свойствами
   list:[
      {name: 'by milk', description: 'go to the market and by milk', date: '2/08/2015', completed: true},
      {name: 'watch angular video', description: 'Open the internet and watch', date: 'now', completed: false}
   ]
}

var toDoList = angular.module('toDoList', []);

toDoList.controller('toDoCtrl', function($scope){
   $scope.data = model;
   $scope.addTask = function(){
      $scope.data.list.push({
         name: $scope.name,
         date: $scope.date,
         description: $scope.description,
         completed: $scope.completed
      })
   }
//         $scope.showText = function (completed) {
//            return completed ? "Да" : "Нет";
//         }
//
//         $scope.setStyle = function (completed) {
//            return completed ? "color:green" : "color:red; font-weight: bold";
//         }

   $scope.editTask = function(){ // Как сделать привязку конкретно к выбранному пункту в списке тасков?

   }
})

</script>
</head>
<body ng-controller  = "toDoCtrl">

   <div class="container">

   <h3>ToDo List</h3>

<table class="table">
   <thead>
   <tr>
   <th>Name</th>
   <th>Description</th>
   <th>Date</th>
   <th>Completed</th>
   </tr>
   </thead>
   <tr ng-repeat="point in data.list">
   <td>{{point.name}}</td>
<td>{{point.description}}</td>
<td>{{point.date}}</td>
<!--<td><input type="checkbox" ng-model="point.completed" /></td>-->
   <td>{{point.completed}}</td>
<td>
<span style="{{setStyle(point.completed)}}">
   {{showText(point.completed)}}
</span>
</td>
<td>
<span class="input-group-btn">
   <button class="btn btn-default" ng-click = 'editTask()'>Edit</button>
   </span>
   </td>
   </tr>
   </table>

   <div>
   <!-- Форма для добавления новых задач -->
<div class="panel">
   <label for="Name">Name: </label>
<input class="form-control" type="text" name = 'Name' placeholder = 'Name' ng-model = 'name'>
   <label for ="Description">Describe your task:</label>
<input class="form-control" type = "text" name="Description" placeholder = 'about' ng-model = 'date'>
   <label for="Date">Due Date</label>
<input class="form-control" type = 'text' name = 'Date' placeholder ='date' ng-model = 'description'>
   <label for="Completed">Completed:</label>
<input class=form-control" type="checkbox" name="Completed" ng-model="completed" />
<span class="input-group-btn">
   <button class="btn btn-default" ng-click = "addTask()">Add new</button>
</span>
</div>
</div>
</div>
</body>
</html>/**
 * Created by jull on 19.04.2017.
 */
