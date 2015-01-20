var app = angular.module("Catering", []);

app.controller("CateringController", function($scope) {
    $scope.OnSubscribe = function(){
    	alert("check:"+$scope.email);
    };
});
