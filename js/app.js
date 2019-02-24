var app = angular.module('mainApp', ['ui.bootstrap', 'ds.clock', 'ngMaterial']);

app.controller('mainController', ['$scope', '$uibModal', '$http', function ($scope, $uibModal, $http) {

    vm = this;

    vm.$onInit = function(){
      angular.forEach(vm.items, function(value, key){
        //$('#' + value.name).style.left = localStorage.getItem(value.name.id + '-X') + 'px';
        //$('#' + value.name).style.top = localStorage.getItem(value.name.id + '-Y') + 'px';
      });
    }

    $('#clock').draggable();

    setInterval( function(){
      //console.clear();
      //console.log(new Date().toLocaleTimeString('en-GB', { hour: 'numeric', minute: 'numeric', second: 'numeric' }))
    }, 1000);

    vm.categoriesCount = 0;

    vm.items = [

      { id: '0', name: 'icon1', checked: false, description: 'Instagram' },
      { id: '1', name: 'icon2', checked: false, description: 'Twitter' },
      { id: '2', name: 'icon3', checked: false, description: 'Calendar' },
      { id: '3', name: 'icon4', checked: true, description: 'Cookbook' },
      { id: '4', name: 'icon5', checked: false, description: 'Photo Album' },
      { id: '5', name: 'icon6', checked: false, description: 'Pig' },
      { id: '6', name: 'icon7', checked: false, description: 'Sport' },
      { id: '7', name: 'icon8', checked: false, description: 'Radio' },
      { id: '8', name: 'icon9', checked: false, description: 'Horoscope' },
      { id: '9', name: 'icon10', checked: false, description: 'Facebook' },
      // { id: '10', name: 'icon11', checked: false, description: 'Horoscope' }

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

    };

    vm.openDetails = function(item){

      var modalInstance = $uibModal.open({

        templateUrl: 'details.html',
        controller: 'detailsController',
        controllerAs: 'detCtrl',
        windowClass: item === 'Cookbook' ? 'modal-cookbook' : 'modal-dialog',
        scope: $scope,
        resolve:{
          item: function(){
            return item;
          }
        }

      }).result.then(function(){}, function(res){});

    };

}]);
