var galleryCtrl = angular.module('galleryCtrl', []);
galleryCtrl.controller('galleryController', function($scope, $http){
    $scope.moodleFiles = [];
    //Retrieve all the files to show the gallery
    $http.get('/moodleFile')
    .then(function (response) {

        var data = response.data;
        var status = response.status;
        var statusText = response.statusText;
        var headers = response.headers;
        var config = response.config;

        $scope.moodleFile = data;
        console.log($scope.moodleFile);
    });

})

//    .success(function(data){
//        console.log(JSON.stringify(data));
//        $scope.files = data;