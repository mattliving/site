angular.module('mattliving').controller('HomeCtrl', function($scope) {
    $scope.quadrants = [
        {
            position: 'north'
        },
        {
            position: 'east'
        },
        {
            position: 'south'
        },
        {
            position: 'west'
        }
    ];
});