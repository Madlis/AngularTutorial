$.material.init();
//controller(name,constructor)
// name - {string} - Имя коетроллера. constructor - {Function}.
angular.module('app', [])
        .controller('FirstCtrl', function FirstCtrl($log) {
            var first = this;

            first.greeting = "First";
            $log.log(first);
        })