var app = angular.module("Catering", []);

function SubscribeController($scope)
{
    $scope.data = {
        subscribed : false,
        email : ""
    };

    $scope.OnSubscribe = function(){
        alert("Subscribing:"+$scope.data.email);
        $scope.data.subscribed = true
    };
}

app.controller("SubscribeController", SubscribeController);

