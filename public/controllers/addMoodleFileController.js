var addCtrl = angular.module('addMoodleFileCtrl', []);
addCtrl.controller('addMoodleFileController', function($scope, $http, filepickerService){
    $scope.moodleFile = {};
    $scope.moodleFiles = [];
    //Send the newly created file to the server to store in the db
    $scope.createMoodleFile = function(){
        $http.post('/moodleFile', $scope.moodleFile)
        .then(function (response) {

            var data = response.data;
            var status = response.status;
            var statusText = response.statusText;
            var headers = response.headers;
            var config = response.config;

            $scope.moodleFile = {};
            //console.log(JSON.stringify(data));
        });
    };
    $scope.displayMoodleFile = function(){
        $http.get('/moodleFile')
        .then(function (response) {

            var data = response.data;
            var status = response.status;
            var statusText = response.statusText;
            var headers = response.headers;
            var config = response.config;

            $scope.moodleFiles = data;
            console.log($scope.moodleFiles);
        });
    };
    //Single file upload, you can take a look at the options
    $scope.upload = function(){
        filepickerService.pick(
        {
            mimetype: ['image/*', 'application/*'],
            language: 'en',
            services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE','IMAGE_SEARCH'],
            openTo: 'COMPUTER'
        },
        function(Blob){
            console.log(JSON.stringify(Blob));
            $scope.moodleFile.moodleFile = Blob;
            $scope.$apply();
        }
        );
    };
    //Multiple files upload set to 3 as max number
    $scope.uploadMultiple = function(){
        filepickerService.pickMultiple(
        {
            mimetype: 'image/*',
            language: 'en',
                maxFiles: 3, //pickMultiple has one more option
                services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE','IMAGE_SEARCH'],
                openTo: 'COMPUTER'
            },
            function(Blob){
                console.log(JSON.stringify(Blob));
                $scope.moodleFile.moreMoodleFiles = Blob;
                $scope.$apply();
            }
            );
    };  
});