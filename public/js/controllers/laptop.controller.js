angular.module('mainApp').controller('laptopController', ['$uibModalInstance', '$http', 'item', function ($uibModalInstance, $http, item) {

  var vm = this;
  vm.item = item;

  vm.ok = function () {
      $uibModalInstance.close();
  };

  vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
  };

}]);
