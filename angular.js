angular.module('<module-name>', ['<dependencies in terms of other angular modules>'])
  .controller('<controller-name>', function($scope, <factoryName>) {
    // scope variable example:
    $scope.angularVariable = true;

    // scope function example
    $scope.func = function() {
      // code ...
    }

    // example of using factory method
    $scope.funcB = function() {
      factoryName.factoryMethod();
    }

    // example of making initial call
    $scope.func();
  });



// For module which exports factory
angular.module('<module-name>', ['<dependencies in terms of other angular modules>'])
  .factory('<factory-name>', function(<function-signature>){
    var methods = {};

    methods.funcA = function() {
      // code ...
    };

    methods.funcB = function() {
      // code ...
    }

    return methods;
  });



// For module which exports service
// TODO: write service boilerplate code