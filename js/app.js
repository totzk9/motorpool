angular.module('motorApp',['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider

  .when('/', {
    templateUrl: 'view/login.html',
    controller: 'signUpCtrl',
    css: 'style/login.css'
  })

  .when('/home', {
    templateUrl: 'view/about.html'
  })
}]);
