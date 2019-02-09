var app = angular.module('mainApp', ['ui.bootstrap']);

app.controller('mainController', ['$scope', '$uibModal', function ($scope, $uibModal) {

    vm = this;

    vm.categoriesCount = 0;

    vm.items = [

      { id: '0', name: 'icon1', checked: false, description: 'Mail' },
      { id: '1', name: 'icon2', checked: false, description: 'Calendar' },
      { id: '2', name: 'icon3', checked: false, description: 'Photo Album' },
      { id: '3', name: 'icon4', checked: false, description: 'Weather' },
      { id: '4', name: 'icon5', checked: false, description: 'Facebook' },
      { id: '5', name: 'icon6', checked: false, description: 'Instagram' },
      { id: '6', name: 'icon7', checked: false, description: 'Music' },
      { id: '7', name: 'icon8', checked: false, description: 'News' },
      { id: '8', name: 'icon9', checked: false, description: 'Notes' },
      { id: '9', name: 'icon10', checked: false, description: 'Money' }

    ];

    vm.openModal = function () {

        var modalInstance = $uibModal.open({

            templateUrl: 'myTemplate.html',
            controller: 'categoriesController',
            controllerAs: 'catCtrl',
            scope: $scope,
            resolve: {
                items: function () {
                    return vm.items;
                }
            }

        }).result.then(function () { }, function (res) { });

    };

    vm.checkCategories = function(item){

      if(item.checked)
        vm.categoriesCount++;
      else
        vm.categoriesCount--;

      if(vm.categoriesCount > 5)
        console.log('Only 5 categories.');

    };

    vm.openDetails = function(item){

      var modalInstance = $uibModal.open({

        templateUrl: 'details.html',
        controller: 'detailsController',
        controllerAs: 'detCtrl',
        scope: $scope,
        resolve:{
          item: function(){
            return item;
          }
        }

      }).result.then(function(){}, function(res){});

    };

}]);
