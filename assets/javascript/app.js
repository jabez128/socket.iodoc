var app = angular.module('doc',['ngRoute'])
			     .config(function($routeProvider,$locationProvider){
					$routeProvider.when('/',{
						templateUrl : './assets/partials/index.html',
					}).when('/serverapi',{
						templateUrl : './assets/partials/serverapi.html',
						});
					$locationProvider.html5mode(true);
			     }).controller('main',function($scope){

			     });