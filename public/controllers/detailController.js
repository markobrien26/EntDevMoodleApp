var detailCtrl = angular.module('detailCtrl', []);
detailCtrl.controller('detailController', function($scope, $http, $routeParams){
    $scope.moodleFile = {};
    //get the id to query the db and retrieve the correct file
    var id = $routeParams.id;
    $http.get('/moodleFile/' + id)
    .then(function (response) {
        
        var data = response.data;
        var status = response.status;
        var statusText = response.statusText;
        var headers = response.headers;
        var config = response.config;

        $scope.moodleFile = data;
        console.log($scope.moodleFile);
    });
    
});