angular.module('mainApp').controller('categoriesController', ['$uibModalInstance', 'items', function ($uibModalInstance, items) {

    var catCtrl = this;
    catCtrl.items = items;

    catCtrl.ok = function () {

        angular.forEach(catCtrl.items, function (value, key) {

          if (catCtrl.items[key].checked)
            $('#icon' + parseInt(key + 1)).draggable({});
          else
            if ($('#icon' + parseInt(key + 1)).hasClass('ui-draggable'))
              $('#icon' + parseInt(key + 1)).draggable('destroy');

        });

        $uibModalInstance.close();

    };

    catCtrl.cancel = function () {

        $uibModalInstance.dismiss('cancel');

    };

}]);
