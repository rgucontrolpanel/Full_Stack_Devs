var app = angular.module('mainApp', ['ui.bootstrap', 'ds.clock', 'ngMaterial']);

app.controller('mainController', ['$scope', '$uibModal', '$http', function ($scope, $uibModal, $http) {

    vm = this;

    vm.$onInit = function(){
      angular.forEach(vm.items, function(value, key){
        //$('#' + value.name).style.left = localStorage.getItem(value.name.id + '-X') + 'px';
        //$('#' + value.name).style.top = localStorage.getItem(value.name.id + '-Y') + 'px';
      });
    }

    //$('#clock').draggable();

    //setInterval( function(){
      //console.clear();
      //}, 1000);
      //console.log(new Date().toLocaleTimeString('en-GB', { hour: 'numeric', minute: 'numeric', second: 'numeric' }))

    vm.categoriesCount = 0;

    vm.items = [

      { id: '0', name: 'icon1', checked: true, description: 'Instagram',
      src: "img/accessories/instagram.png" },
      { id: '1', name: 'icon2', checked: true, description: 'Twitter',
      src: "img/accessories/twitter.png"  },
      { id: '2', name: 'icon3', checked: true, description: 'Calendar',
      src: "img/accessories/calendar.png"  },
      { id: '3', name: 'icon4', checked: true, description: 'Cookbook',
      src: "img/accessories/cookbook.png"  },
      { id: '4', name: 'icon5', checked: true, description: 'Photo Album',
      src: "img/accessories/frame.png"  },
      { id: '5', name: 'icon6', checked: false, description: 'Pig',
      src: "img/accessories/pig.png"  },
      { id: '6', name: 'icon7', checked: false, description: 'Sport',
      src: "img/accessories/poster.png"  },
      { id: '7', name: 'icon8', checked: false, description: 'Radio',
      src: "img/accessories/radio.png"  },
      { id: '8', name: 'icon9', checked: false, description: 'Horoscope',
      src: "img/accessories/starball.png"  },
      { id: '9', name: 'icon10', checked: false, description: 'Facebook',
      src: "img/accessories/facebook.png"  },
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
