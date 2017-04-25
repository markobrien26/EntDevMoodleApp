var galleryCtrl = angular.module('galleryCtrl', []);
galleryCtrl.controller('galleryController', function($scope, $http){
    $scope.superheroes = [];
    //Retrieve all the superheroes to show the gallery
    $http.get('/superhero')
    .then(function (response) {

        var data = response.data;
        var status = response.status;
        var statusText = response.statusText;
        var headers = response.headers;
        var config = response.config;

        $scope.superhero = data;
        console.log($scope.superhero);
    });

})

//    .success(function(data){
//        console.log(JSON.stringify(data));
//        $scope.superheroes = data;