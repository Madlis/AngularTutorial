
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

// Используя $watch можно добавить в scope “наблюдателя”. Наблюдатель — это то, что будет получать уведомление, когда в соответствующем scope произойдет изменение.

// $compile - Эта функция превращает любое допустимое выражение AngularJS в функцию. Эту функцию затем можно вызвать, передав в неё 1 или 2 параметра, но для Html.
var app = angular.module("app", []);

app.directive("dumbPassword", function() {
    var validElement = angular.element("<div>{{model.input}}</div>");

    var link = function(scope) {
        scope.$watch("model.input", function(value) {
            if (value === "password") {
                validElement.toggleClass("alert-danger alert");
            }
        });
    };

    return {
        restrict: "E",
        replace: true,
        template: "<div><input type=\"text\" ng-model=\"model.input\"><div>",
        compile: function(tElem) {
            tElem.append(validElement);

            return link;
        }
    };
});







