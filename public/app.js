//Main file
var app = angular.module('moodleFileApp', ['addMoodleFileCtrl', 'galleryCtrl','detailCtrl', 'ngRoute', 'angular-filepicker'])
    .config(function($routeProvider, filepickerProvider){
        //The route provider handles the client request to switch route
        $routeProvider.when('/addMoodleFile', {          
            templateUrl: 'partials/addMoodleFile.html',
            controller: 'addMoodleFileController'            
        })
        .when('/gallery', {
            templateUrl: 'partials/gallery.html',
            controller: 'galleryController'
        })
        .when('/detail/:id', {
            templateUrl: 'partials/detail.html',
            controller: 'detailController'
        })
        //Redirect to addFile in all the other cases.
        .otherwise({redirectTo:'/addMoodleFile'});
        //Add the API key to use filestack service
        filepickerProvider.setKey('AynkfxksOQNSa83fviAQKz');
});