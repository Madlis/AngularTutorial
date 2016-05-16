var app = angular.module("behaviorApp", [])
// http://stepansuvorov.com/blog/2013/06/start-with-angularjs-part2/
// restrict     задает способ встраивания(смотри выше):
// E – тэг(имя элемента)
// A – атрибут
// C – класс
// M – комментарий
app.directive('enter', function () {
    return function (scope, element){
        element.bind('mouseenter', function(){
            console.log("I'm inside of you!");
        })
    }
})
app.directive('leave', function () {
    return function (scope, element){
        element.bind('mouseleave', function(){
            console.log("I'm leaving on a jet plane");
        })
    }
})
