var app = angular.module("behaviorApp", [])
// http://stepansuvorov.com/blog/2013/06/start-with-angularjs-part2/
// restrict     задает способ встраивания(смотри выше):
// E – тэг(имя элемента)
// A – атрибут
// C – класс
// M – комментарий
// Директива – это что-то типа вспомогательного элемента для отрисовки представления. Может быть встроена в HTML следующими способами:
// В виде атрибута тега    <div directive=”expression”>

app.directive('enter', function () {
    // directive private methods here
    return function ($scope, element, attrs){
        //directive logic
        element.bind('mouseenter', function(){
            element.addClass(attrs.enter);
        })
    }
})
app.directive('leave', function () {
    return function ($scope, element, attrs){
        element.bind('mouseleave', function(){
            element.removeClass(attrs.enter);
        })
    }
})
