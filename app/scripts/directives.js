/* Directives */
var directives = angular.module('mattlivingDirectives', []);

directives.directive('splitList', function() {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: '/partials/splitList.html',
        scope: {
            items: '=',
            height: '='
        },
        link: function(scope, elem, attrs) {

            scope.$watch('height', function(newVal, oldVal) {
                var $li = elem.find('li');
                console.log($li);
                console.log($(elem).parent().height());
                $li.height($(elem).parent().height()/$li.length);
            });
        }
    }
});

directives.directive('container', function() {
    return {
        restrict: 'EA',
        templateUrl: '/partials/container.html',
        link: function(scope, elem, attrs) {

            scope.$watch('height', function(newVal, oldVal) {
                elem.height(newVal);
                elem.css('margin-top', (-newVal/2 + 'px'));
                alignChildren();
            });
            scope.$watch('width', function(newVal, oldVal) {
                elem.width(newVal);
                elem.css('margin-left', (-newVal/2 + 'px'));
                alignChildren();
            });

            var alignChildren = function() {
                _.each(elem.children(), function(child) {
                    var $child = $(child), height, width;
                    switch ($child.attr('class')) {
                        case 'middle':
                            height = scope.height / 3;
                            width  = scope.width / 3;
                            $child.height(height);
                            $child.width(width);
                            $child.css('margin', -(height/2) + 'px 0 0 ' + -(width/2) + 'px');
                            // $child.children('div').css('line-height', height + 'px');
                            // $child.children('h1').css('line-height', height*0.7 + 'px');
                            // $child.children('h3').css('line-height', height*0.3 + 'px');
                            break;
                        case 'top':
                            height = scope.height / 3;
                            $child.height(height);
                            $child.width(scope.width);
                            // $child.children('h1').css('line-height', height + 'px');
                            break;
                        case 'left':
                            $child.height(scope.height);
                            $child.width(scope.width / 3);
                            // $child.children('h1').css('line-height', scope.height + 'px');
                            // var $li = $child.find('li');
                            // $li.height(scope.height/$li.length);
                            break;
                        case 'bottom':
                            height = scope.height / 3;
                            $child.height(height);
                            $child.width(scope.width);
                            $child.css('top', (scope.height - height) + 'px');
                            // $child.children('h1').css('line-height', height + 'px');
                            break;
                        case 'right':
                            width = scope.width / 3;
                            $child.height(scope.height);
                            $child.width(width);
                            $child.css('left', (scope.width - width) + 'px');
                            // $child.children('h1').css('line-height', scope.height + 'px');
                            // var $li = $child.find('li');
                            // $li.height(scope.height/$li.length);
                            break;
                        default:
                            break;
                    }
                });
            }
        }
    };
});

directives.directive('resize', function($window, $rootScope) {
    return function($scope) {
        $scope.width  = $window.innerWidth;
        $scope.height = $window.innerHeight;
        angular.element($window).bind('resize', function() {
            $scope.$apply(function() {
                $scope.width  = $window.innerWidth;
                $scope.height = $window.innerHeight;
                $rootScope.$broadcast('windowResizeEventFired');
            });
        });
    };
});

directives.directive('trapezium', function() {
    return {
        restrict: 'EA',
        templateUrl: '/partials/trapezium.html',
        scope: {
            quadrant: '@', // north, west, south, east
            width: '=',
            height: '='
        },
        link: function(scope, elem, attrs) {
            switch (scope.quadrant) {
                case 'north':
                    scope.first  = 'ne';
                    scope.second = 'nw';
                    break;
                case 'south':
                    scope.first  = 'se';
                    scope.second = 'sw';
                    break;
                case 'east':
                    scope.first  = 'se';
                    scope.second = 'ne';
                    break;
                case 'west':
                    scope.first  = 'sw';
                    scope.second = 'nw';
                    break;
                default:
                    break;
            }
        }
    };
});
