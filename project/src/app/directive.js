
// http://stepansuvorov.com/blog/2013/06/start-with-angularjs-part2/
// restrict     задает способ встраивания(смотри выше):
// E – тэг(имя элемента)
// A – атрибут
// C – класс
// M – комментарий
// Директива – это что-то типа вспомогательного элемента для отрисовки представления. Может быть встроена в HTML следующими способами:
// В виде атрибута тега    <div directive=”expression”>



var app = angular.module("superApp", []);


app.controller("SuperHeroCtrl", function($element) {
  var superman = this;
  
  superman.abilities = [];

  superman.addStrength = function() {
    superman.abilities.push("strength");
  };

  superman.addSpeed = function() {
    superman.abilities.push("speed");
  };

  superman.addFlight = function() {
    superman.abilities.push("flight");
  };
  
  $element.addClass("btn");
  $element.bind("mouseenter", function() {
    console.log(superman.abilities);
  });
})

app.directive("superhero", function() {
    return {
        restrict: "E",
        scope: {},

        controller: "SuperHeroCtrl as superhero"
  };
});

app.directive("strength", function() {
    return {
        require: "superhero",
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addStrength();
        }
    };
});

app.directive("speed", function() {
    return {
        require: "superhero",
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addSpeed();
        }
    };
});

app.directive("flight", function() {
    return {
        require: "superhero",
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addFlight();
        }
    };
});


