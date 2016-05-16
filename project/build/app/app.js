// $.material.init();
//controller(name,constructor)
// name - {string} - Имя коетроллера. constructor - {Function}.
//config(configFn) - Используйте этот метод для регистрации работы, которую нужно сделать во время загрузки модулю.

// filter(name, filterFactory)


// Параметры
// name – {string} –
// Имя фильтра.

// filterFactory – {Function} –
// Фабричная функция для создания нового экземпляра фильтра.
var myApp = angular.module('myApp',[]);

myApp.controller('FirstCtrl',FirstCtrl)
    .controller('SecondCtrl',SecondCtrl)
    .service('Data', function () {
        return {message: "I'm data from a service"};
    })
    .filter('reverse', function(Data){
        return function(text){
            return text.split("").reverse().join("") + Data.message;
        }
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