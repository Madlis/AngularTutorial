// $.material.init();
//controller(name,constructor)
// name - {string} - Имя коетроллера. constructor - {Function}.
//config(configFn) - Используйте этот метод для регистрации работы, которую нужно сделать во время загрузки модулю.
var myApp = angular.module('myApp',[]);

myApp.controller('FirstCtrl',FirstCtrl)
    .controller('SecondCtrl',SecondCtrl)
    .service('Data', function () {
        return {message: "I'm data from a service"};
    });

function FirstCtrl($scope, Data){
  $scope.data = Data;
}

function SecondCtrl($scope, Data){
  $scope.data = Data;

  $scope.reversedMessage = function(message) {
    return message.split("").reverse().join("");
  };
}