//Main file
var app = angular.module('moodleFileApp', ['addMoodleFileCtrl', 'studentCtrl', 'ngRoute', 'angular-filepicker'])
    .config(function($routeProvider, filepickerProvider){
        //The route provider handles the client request to switch route
        $routeProvider.when('/addMoodleFile', {          
            templateUrl: 'partials/addMoodleFile.html',
            controller: 'addMoodleFileController'            
        })
        .when('/student', {
            templateUrl: 'partials/student.html',
            controller: 'studentController'
        })
        //Redirect to addFile in all the other cases.
        .otherwise({redirectTo:'/addMoodleFile'});
        //Add the API key to use filestack service
        filepickerProvider.setKey('AynkfxksOQNSa83fviAQKz');
});