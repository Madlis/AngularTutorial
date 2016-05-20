
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

// angular.element - Оборачивает родной DOM элемент или HTML строку в элемент jQuery.

// $templateCache - Кэш используемый для хранения html шаблонов.

// run - Используйте этот метод для регистрации работы, которую нужно сделать когда инжектор загрузит все модули.
var app = angular.module("app", ["ngRoute"]);
// Используется для внешнего связывания URL с контроллерами и представлениями (HTML частичками). Он отслеживает изменения $location.url() и пытается по карте путей найти для него существующее определение.
app.config(function($routeProvider) {
    $routeProvider.when('/map/:country/:state/:city',//Добавляет новое определение маршрута в сервис $route.
      {
        templateUrl: "../app/app.html",
        controller: "AppCtrl"
      })

})

app.controller("AppCtrl", function($scope, $q) {

    var defer  = $q.defer();

    defer.promise
        .then(function( weapon ){
            alert("You can have my " + weapon)
            return 'bow'
        })
        .then(function( weapon ){
            alert('And my ' + weapon)
            return 'axe'
        })
        .then(function (weapon) {
            alert("And my " + weapon)
        });

    defer.resolve('sword');
    $scope.model = {
        message: "This is my app!!"
    }
})







