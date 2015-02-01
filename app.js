var app = angular.module("Catering", []);

function SubscribeController($scope)
{
    $scope.data = {
        email : ""
    };

    $scope.OnSubscribe = function(){
        alert("Subscribing:"+$scope.data.email);
    };
}

app.controller("SubscribeController", SubscribeController);

