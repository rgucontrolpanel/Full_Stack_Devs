angular.module('mainApp').controller('laptopController', ['$uibModalInstance', '$http', function ($uibModalInstance, $http) {

  var vm = this;

  vm.ok = function () {
      $uibModalInstance.close();
  };

  vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
  };

}]);
