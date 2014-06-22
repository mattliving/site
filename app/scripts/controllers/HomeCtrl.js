angular.module('mattliving').controller('HomeCtrl', function($scope) {

    // each view can be in one of three states - panel, list or content
    $scope.views = {
        middle: "panel",
        top: "panel",
        bottom: "panel",
        left: "panel",
        right: "panel"
    };

    $scope.projects = [
        {
            name: 'Climbr',
            src: 'https://github.com/mattliving/Climbr'
        },
        {
            name: 'pathD3',
            src: 'https://github.com/mattliving/pathD3'
        },
        {
            name: 'Membattles',
            src: 'https://github.com/mattliving/membattles'
        },
        {
            name: 'ngDashboard',
            src: 'https://github.com/mattliving/ngdashboard'
        }
    ];

    $scope.photoSets = [
        'Birds',
        'Rock Climbing',
        'Skiing',
        'Travel'
    ];

    // reset all views to base state
    $scope.resetViews = function() {
        _.forIn($scope.views, function(value, key) {
            $scope.views[key] = "panel";
        });
    }

    // switch a view into a new state
    $scope.switchView = function(view, state) {
        if (typeof state !== "undefined") {
            $scope.views[view] = state;
        }
        else {
            if ($scope.views[view] === "panel") {
                $scope.views[view] = "list";
            }
        }
        // $scope.currentView[view] = ($scope.currentView[view] === "false" ? "true" : "false");
    }

    $scope.$on("list:li:active", function(event, item, position) {
        if (position === "left") {
            $scope.switchView("right", "content");
        }
        else if (position === "right") {
            $scope.switchView("left", "content");
        }
        event.stopPropagation();
    });

    $scope.$on("list:li:inactive", function(event, item) {
        event.stopPropagation();
    });
});