
// http://stepansuvorov.com/blog/2013/06/start-with-angularjs-part2/
// restrict     задает способ встраивания(смотри выше):
// E – тэг(имя элемента)
// A – атрибут
// C – класс
// M – комментарий
// Директива – это что-то типа вспомогательного элемента для отрисовки представления. Может быть встроена в HTML следующими способами:
// В виде атрибута тега    <div directive=”expression”>



// Изолированный scope может влючать в себе ссылки на элементы родительского scope при использовании нетривиального синтаксиса(специальный префикс символ (@, =, & )перед имеем метода/переменой):

// @ – переменную локального scope со значением DOM аттрибута
// = – двустороннее связывание значения атрибута и переменной
// & – позволяет выполнять выражения из аттрибута в рамках родительского scope

var app = angular.module("phoneApp", []);

app.controller("AppCtrl", function() {
    var appctrl = this;
    appctrl.callHome = function(message) {
        alert(message);
    };
})

app.directive("phone", function() {
    return {
        scope: {
            dial: "&"
        },
        template: '<input type="text" ng-model="value">' +
          '<div class="button" ng-click="dial({message:value})">Call home!</div>'
    };
})





