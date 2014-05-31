var app = angular.module('doc',['ngRoute'])
			     .config(function($routeProvider){
					$routeProvider.when('/',{
						templateUrl : '../partials/index.html',
					}).when('/serverapi',{
						templateUrl : '../partials/serverapi.html',
						});
			     }).controller('main',function($scope){

			     });