
// http://stepansuvorov.com/blog/2013/06/start-with-angularjs-part2/
// restrict     задает способ встраивания(смотри выше):
// E – тэг(имя элемента)
// A – атрибут
// C – класс
// M – комментарий
// Директива – это что-то типа вспомогательного элемента для отрисовки представления. Может быть встроена в HTML следующими способами:
// В виде атрибута тега    <div directive=”expression”>



var app = angular.module("choreApp", []);

app.controller("ChoreCtrl", function() {
    var choreCtrl = this; 
    choreCtrl.logChore = function(chore) {
        alert(chore + " is done!");
    };
});

app.directive("kid", function() {
    return {
        restrict: "E",
        scope: {
            done: "&"
        },
        template: '<input type="text" ng-model="chore">' +
          ' {{chore}}' +
          ' <div class="button" ng-click="done({chore:chore})">I\'m done!</div>'
    };
});



