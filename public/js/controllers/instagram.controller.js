angular.module('mainApp').controller('instaController', ['$uibModalInstance', '$http', 'item', function ($uibModalInstance, $http, item) {

  var vm = this;
  vm.item = item;

  vm.date = new Date();

  vm.images = [
    { src: 'img/insta/river.jpg', alt: 'River', description: 'River Flow'},
    { src: 'img/insta/lake.jpg', alt: 'Lake', description: 'Lake'},
    { src: 'img/insta/pig.jpg', alt: 'Northern Lights', description: 'Pigs-Animals-PF'},
    { src: 'img/insta/mountain.jpg', alt: 'Mountain', description: 'Forrest'},
    { src: 'img/insta/avocado.jpg', alt: 'avocado', description: 'Breakfast!'},
    { src: 'img/insta/mountain2.jpg', alt: 'Northern Lights', description: 'Sky is Dark'}
  ];

  vm.ok = function () {
      $uibModalInstance.close();
  };

  vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
  };

}]);
