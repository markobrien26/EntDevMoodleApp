var studentCtrl = angular.module('studentCtrl', []);
studentCtrl.controller('studentController', function($scope, $http){
    $scope.moodleFiles = [];
    //Retrieve all the files to show student view
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
