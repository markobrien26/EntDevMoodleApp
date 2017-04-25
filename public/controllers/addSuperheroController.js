var addCtrl = angular.module('addSuperheroCtrl', []);
addCtrl.controller('addSuperheroController', function($scope, $http, filepickerService){
    $scope.superhero = {};
    //Send the newly created superhero to the server to store in the db
    $scope.createSuperhero = function(){
        $http.post('/superhero', $scope.superhero)
        .then(function (response) {

            var data = response.data;
            var status = response.status;
            var statusText = response.statusText;
            var headers = response.headers;
            var config = response.config;

            $scope.superhero = {};
            console.log(JSON.stringify(data));
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
            $scope.superhero.picture = Blob;
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
                $scope.superhero.morePictures = Blob;
                $scope.$apply();
            }
            );
    };  
});