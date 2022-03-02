(function(){
'use strict';
    angular.module('CounterApp',[])
        .controller('CounterController',CounterController);

        CounterController.$inject=['$scope'];
        function CounterController($scope){
            $scope.onceCounter = 0;

            $scope.showNumberOfWatchers = function(){
                console.log('# of Watchers : ',$scope.$$watchersCount);

            };

            $scope.countOnce = function(){
                $scope.onceCounter = 1;
                console.log($scope.onceCounter);

            };
            
            $scope.$watch('oneCounter', function (newValue, oldValue){
                console.log("old value : ",oldValue);
                console.log("new value : ",newValue);
            });
        }


})();