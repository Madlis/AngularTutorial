
// http://stepansuvorov.com/blog/2013/06/start-with-angularjs-part2/
// restrict     задает способ встраивания(смотри выше):
// E – тэг(имя элемента)
// A – атрибут
// C – класс
// M – комментарий
// Директива – это что-то типа вспомогательного элемента для отрисовки представления. Может быть встроена в HTML следующими способами:
// В виде атрибута тега    <div directive=”expression”>



var app = angular.module("drinkApp", []);

app.controller("AppCtrl", function() {
    var appctrl = this; 
    appctrl.ctrlFlavor = "blackberry";
})

app.directive("drink", function() {
    return {
        scope: {
            flavor: "@"
        },
        template: '<div>{{flavor}}</div>'
    };
})




