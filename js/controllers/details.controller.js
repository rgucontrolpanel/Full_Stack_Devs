angular.module('mainApp').controller('detailsController', ['$uibModalInstance', 'item', function ($uibModalInstance, item) {

  detCtrl = this;

  detCtrl.item = item;

  detCtrl.ok = function () {

      $uibModalInstance.close();

  };

  detCtrl.cancel = function () {

      $uibModalInstance.dismiss('cancel');

  };


}]);
