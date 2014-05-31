var app = angular.module('doc',['ngRoute'])
			     .config(function($routeProvider){
					$routeProvider.when('/',{
						templateUrl : './assets/partials/index.html',
					}).when('/serverapi',{
						templateUrl : './assets/partials/serverapi.html',
						});
			     }).controller('main',function($scope){

			     });