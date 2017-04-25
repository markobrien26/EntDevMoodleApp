var detailCtrl = angular.module('detailCtrl', []);
detailCtrl.controller('detailController', function($scope, $http, $routeParams){
    $scope.superhero = {};
    //get the id to query the db and retrieve the correct superhero
    var id = $routeParams.id;
    $http.get('/superhero/' + id)
    .then(function (response) {
        
        var data = response.data;
        var status = response.status;
        var statusText = response.statusText;
        var headers = response.headers;
        var config = response.config;

        $scope.superhero = data;
        console.log($scope.superhero);
    });
    
});