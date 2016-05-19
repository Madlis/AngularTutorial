// $.material.init();
//controller(name,constructor)
// name - {string} - Имя коетроллера. constructor - {Function}.
//config(configFn) - Используйте этот метод для регистрации работы, которую нужно сделать во время загрузки модулю.

// filter(name, filterFactory)


// Параметры
// name – {string} –
// Имя фильтра.

// filterFactory – {Function} –
// Фабричная функция для создания нового экземпляра фильтра.
var myApp = angular.module('myApp',[]);

myApp.factory('Avengers', function () {
  var Avengers = {};
      Avengers.cast = [
      {
        name: "Robert Downey Jr.",
        character: "Tony Stark / Iron Man"
      },
      {
        name: "Chris Evans",
        character: "Steve Rogers / Captain America"
      },
      {
        name: "Mark Ruffalo",
        character: "Bruce Banner / The Hulk"
      },
      {
        name: "Chris Hemsworth",
        character: "Thor"
      },
      {
        name: "Scarlett Johansson",
        character: "Natasha Romanoff / Black Widow"
      },
      {
        name: "Jeremy Renner",
        character: "Clint Barton / Hawkeye"
      },
      {
        name: "Tom Hiddleston",
        character: "Loki"
      },
      {
        name: "Clark Gregg",
        character: "Agent Phil Coulson"
      },
      {
        name: "Cobie Smulders",
        character: "Agent Maria Hill"
      },
      {
        name: "Stellan Skarsgard",
        character: "Selvig"
      },
      {
        name: "Samuel L. Jackson",
        character: "Nick Fury"
      },
      {
        name: "Gwyneth Paltrow",
        character: "Pepper Potts"
      },
      {
        name: "Paul Bettany",
        character: "Jarvis (voice)"
      },
      {
        name: "Alexis Denisof",
        character: "The Other"
      },
      {
        name: "Tina Benko",
        character: "NASA Scientist"
      }
    ];
    return Avengers;
})
.controller('AvengersCtrl', AvengersCtrl);

function AvengersCtrl(Avengers) {
  var avengersCtrl = this;
    avengersCtrl.avengers = Avengers;
}


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


