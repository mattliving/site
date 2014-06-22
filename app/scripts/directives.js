/* Directives */
var directives = angular.module('mattlivingDirectives', []);

directives.directive('panel', function() {
    return {
        restrict: 'EA',
        templateUrl: 'partials/panel.html',
        replace: true,
        transclude: true,
        scope: {
            state: '=',
            position: '@',
            height: '=',
            width: '='
        },
        link: function(scope, elem, attrs, ctrl, transclude) {

            scope.$watch('state', function(newVal, oldVal) {
                switch (newVal) {
                    case 'panel':
                        elem.removeClass("two-thirds");
                        // elem.removeClass("three-quarters");
                        break;
                    case 'list':
                        elem.removeClass("two-thirds");
                        // elem.removeClass("three-quarters");
                        break;
                    case 'content':
                        elem.addClass("two-thirds");
                        // elem.addClass("three-quarters");
                        break;
                    default:
                        break;
                }
            });

            // scope.$on('list:li:active', function(event, item, className) {
            // });

            // scope.$on('list:li:inactive', function(event, item, className) {
            // });
        }
    }
})

directives.directive('list', function() {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: '/partials/splitList.html',
        scope: {
            items: '=',
            property: "@",
            height: '='
        },
        link: function(scope, elem, attrs) {

            var $li;
            scope.$watch('height', function(newVal, oldVal) {
                $li = elem.find('li');
                $li.height(newVal/$li.length);
            });

            scope.toggleActive = function(e, item) {
                var $this = $(e.currentTarget);
                $li.not($this).removeClass('active');

                $this.toggleClass('active');
                if ($this.hasClass('active')) {
                    scope.$emit("list:li:active", item, $this.parent().parent().parent().parent().parent().attr("position"));
                }
                else {
                    scope.$emit("list:li:inactive", item, $this.parent().parent().parent().parent().parent().attr("position"));
                }
            }
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
            });
            scope.$watch('width', function(newVal, oldVal) {
                elem.width(newVal);
            });

            var alignChildren = function() {
                _.each(elem.children(), function(child) {
                    var $child = $(child), height, width;
                    switch ($child.attr('position')) {
                        case 'middle':
                            height = scope.height / 3;
                            width  = scope.width / 3;
                            // $child.attr("height", height);
                            // $child.attr("width", width);
                            $child.height(height);
                            $child.width(width);
                            $child.css('margin', -(height/2) + 'px 0 0 ' + -(width/2) + 'px');
                            // $child.children('div').css('line-height', height + 'px');
                            // $child.children('h1').css('line-height', height*0.7 + 'px');
                            // $child.children('h3').css('line-height', height*0.3 + 'px');
                            break;
                        case 'top':
                            height = scope.height / 3;
                            // $child.attr("height", height);
                            // $child.attr("width", width);
                            $child.height(height);
                            $child.width(scope.width);
                            // $child.children('h1').css('line-height', height + 'px');
                            break;
                        case 'left':
                        // $child.attr("height", height);
                        //     $child.attr("width", width);
                            $child.height(scope.height);
                            $child.width(scope.width / 3);
                            // $child.children('h1').css('line-height', scope.height + 'px');
                            // var $li = $child.find('li');
                            // $li.height(scope.height/$li.length);
                            break;
                        case 'bottom':
                            height = scope.height / 3;
                            // $child.attr("height", height);
                            // $child.attr("width", width);
                            $child.height(height);
                            $child.width(scope.width);
                            $child.css('top', (scope.height - height) + 'px');
                            // $child.children('h1').css('line-height', height + 'px');
                            break;
                        case 'right':
                            width = scope.width / 3;
                            // $child.attr("height", height);
                            // $child.attr("width", width);
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
