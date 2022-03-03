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
            
            $scope.$watch('onceCounter', function (newValue, oldValue){
                console.log("old value : ",oldValue);
                console.log("new value : ",newValue);
            });
            // $scope.$watch('onceCounter', function (newValue, oldValue) {
  //   console.log("onceCounter old value: ", oldValue);
  //   console.log("onceCounter new value: ", newValue);
  // });
  //
  // $scope.$watch('counter', function (newValue, oldValue) {
  //   console.log("counter old value: ", oldValue);
  //   console.log("counter new value: ", newValue);
  // });
        }


})();