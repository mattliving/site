angular.module('mattliving').controller('HomeCtrl', function($scope) {

    $scope.currentView = {
        // middle: "",
        // top: "",
        // bottom: "",
        left: "false",
        right: "false"
    };

    $scope.projects = [
        'Climbr',
        'pathD3',
        'Membattles',
        'ngDashboard'
    ];

    $scope.photoSets = [
        'Birds',
        'Rock Climbing',
        'Skiing',
        'Travel'
    ];

    $scope.switchView = function(view) {
        $scope.currentView[view] = ($scope.currentView[view] === "false" ? "true" : "false");
    }
});