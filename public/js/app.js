var app = angular.module('mainApp', ['ui.bootstrap', 'ds.clock', 'ui.calendar', 'chart.js', 'ui.bootstrap.contextMenu']);

app.controller('mainController', ['$scope', '$uibModal', '$http', function ($scope, $uibModal, $http) {

    var vm = this;


    $http.get('/usersserver').then(function(response){
      console.log(response);
    });

    $http.get('/userslocal').then(function(response){
      console.log(response)
    });


    //$('#clock').draggable();

    vm.categoriesCount = 0;

    vm.items = [

      { id: '0', name: 'icon1', checked: false, description: 'Insta',
      src: "img/accessories/insta.png", templateUrl: 'insta-modal.html' },
      { id: '1', name: 'icon2', checked: false, description: 'Calendar',
      src: "img/accessories/calendar.png", templateUrl: 'calendar-modal.html' },
      { id: '2', name: 'icon3', checked: true, description: 'Cookbook',
      src: "img/accessories/cookbook.png", templateUrl: 'cookbook-modal.html' },
      { id: '3', name: 'icon4', checked: false, description: 'Photo Album',
      src: "img/accessories/frame.png", templateUrl: 'photo-album-modal.html' },
      { id: '4', name: 'icon5', checked: false, description: 'Market Stock',
      src: "img/accessories/pig.png", templateUrl: 'market-stock-modal.html' },
      { id: '5', name: 'icon6', checked: false, description: 'Sport',
      src: "img/accessories/poster.png", templateUrl: 'sports-modal.html' },
      { id: '6', name: 'icon7', checked: false, description: 'Radio',
      src: "img/accessories/radio.png", templateUrl: 'radio-modal.html' },
      { id: '7', name: 'icon8', checked: false, description: 'Horoscope',
      src: "img/accessories/starball.png", templateUrl: 'horoscope-modal.html' },
      { id: '8', name: 'icon9', checked: false, description: 'Laptop',
      src: "img/accessories/laptop.png", templateUrl: 'face-modal.html' },

    ];

    angular.forEach(vm.items, function(value, key){

      if(vm.items[key].checked)
        $('#icon' + parseInt(key + 1)).draggable({});

    });

    vm.openModal = function () {

      var modalInstance = $uibModal.open({

        templateUrl: 'partials/config-modal.html',
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

    var getModal = function(item){
      return 'partials/' + item.templateUrl;
    }

    var getModalClass = function(item){
      return item.templateUrl.substring(0, item.templateUrl.indexOf('.'));
    }

    var getController = function(item){

      if(item.description !== 'Market Stock' && item.description !== 'Photo Album'){
        return item.description.toLowerCase() + 'Controller';
      }
      else{

        var parts = item.description.split(' ');
        parts[0] = parts[0].toLowerCase();
        return parts[0] + '' + parts[1] + 'Controller';

      }
    }

    vm.openDetails = function(item){

      var modalInstance = $uibModal.open({

        templateUrl: getModal(item),
        controller: getController(item),
        controllerAs: 'vm',
        windowClass: getModalClass(item),
        scope: $scope,
        resolve:{
          item: function(){
            return item.description;
          }
        }

      }).result.then(function(){}, function(res){});

    };

}]);
