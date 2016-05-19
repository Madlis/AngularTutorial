
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
// https://habrahabr.ru/post/179755/

var app = angular.module("phoneApp", []);

app.controller("AppCtrl", function($scope) {
    var appctrl = this;
});

app.directive('panel', [function () {
    return {
        restrict: 'E',
         transclude: true, //Передача содержимого из директивы шаблону включается очень просто. Чтобы это сделать, просто установите transclude: true:
        template: '<div class="panel" ng-transclude>This is a panel companent</div>'
    };
}])







