/* Directives */
var directives = angular.module('mattlivingDirectives', []);

directives.directive('trapezium', function() {
    return {
      restrict: 'EA',
      templateUrl: '/partials/trapezium.html',
      scope: {
        quadrant: '@', // north, west, south, east
        width: '=',
        height: '='
      },
      link: function($scope, $elem, $attrs) {
        console.log($scope);
        switch ($scope.quadrant) {
          case 'north':
            $scope.first  = 'ne';
            $scope.second = 'nw';
            break;
          case 'south':
            $scope.first  = 'se';
            $scope.second = 'sw';
            break;
          case 'east':
            $scope.first  = 'se';
            $scope.second = 'ne';
            break;
          case 'west':
            $scope.first  = 'sw';
            $scope.second = 'nw';
            break;
          default:
            break;
        }
      }
    };
  });
