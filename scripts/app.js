var app = angular.module('mainApp', ['ui.bootstrap']);

app.controller('mainController', ['$scope', '$uibModal', function ($scope, $uibModal) {

    vm = this;

    vm.items = {

        icon1: false,
        icon2: false,
        icon3: false

    };

    vm.openModal = function () {
        
        var modalInstance = $uibModal.open({
            
            templateUrl: 'myTemplate.html',
            controller: 'modalController', 
            controllerAs: 'modCtrl',
            scope: $scope,
            resolve: {
                items: function () {
                    return vm.items;
                }
            }

        }).result.then(function () { }, function (res) { });

    }

}]);

app.controller('modalController', ['$uibModalInstance', 'items', function ($uibModalInstance, items) {

    modCtrl = this;
    modCtrl.items = items;
    
    
    modCtrl.ok = function () {

        angular.forEach(modCtrl.items, function (value, key) {

            if (value === true)
                $('#' + key).draggable();
            else
                if ($('#' + key).hasClass('ui-draggable'))
                    $('#' + key).draggable('destroy');
           
        });

        $uibModalInstance.close();

    };

    modCtrl.cancel = function () {
        
        $uibModalInstance.dismiss('cancel');

    };

}]);

//$('#icon1').draggable();
//$('#icon2').draggable();
//$('#icon3').draggable();
