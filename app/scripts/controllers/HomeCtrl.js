angular.module('mattliving').controller('HomeCtrl', function($scope) {
  $scope.quadrants = [
    {
      position: 'north',
      width: 60,
      height: 60
    },
    {
      position: 'south',
      width: 60,
      height: 60
    },
    {
      position: 'east',
      width: 60,
      height: 60
    },
    {
      position: 'west',
      width: 60,
      height: 60
    }
  ];
  console.log($scope.quadrants);
});