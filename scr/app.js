(function(){
'use strict';
    angular.module('CounterApp',[])
        .controller('CounterController',CounterController);

        CounterController.$inject=['$scope'];
        function CounterController($scope){
            $scope.onceCounter = 0;
            $scope.counter = 0;
            $scope.name="Patrockanite";
            

            $scope.showNumberOfWatchers = function(){
                console.log('# of Watchers : ',$scope.$$watchersCount);

            };

            $scope.countOnce = function(){
                $scope.onceCounter = 1;
                //console.log($scope.onceCounter);

            };
            $scope.upCounter = function(){
                $scope.counter ++;
                //console.log($scope.onceCounter);

            };

            $scope.$watch(function(){
                console.log("Digest Loop Fired !")
            })
            
           /*  $scope.$watch('onceCounter', function (newValue,ancienne_Value){
                console.log("ancienne value : ",ancienne_Value);
                console.log("new value : ",newValue);
            }); */

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