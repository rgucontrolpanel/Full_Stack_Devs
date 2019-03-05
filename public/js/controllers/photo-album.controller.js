angular.module('mainApp').controller('photoAlbumController', ['$uibModalInstance', '$http', 'item', function ($uibModalInstance, $http, item) {

  var vm = this;
  vm.item = item;

  vm.photos = [
      {src: 'http://farm9.staticflickr.com/8042/7918423710_e6dd168d7c_b.jpg', desc: 'Image 01'},
      {src: 'http://farm9.staticflickr.com/8449/7918424278_4835c85e7a_b.jpg', desc: 'Image 02'},
      {src: 'http://farm9.staticflickr.com/8457/7918424412_bb641455c7_b.jpg', desc: 'Image 03'},
      {src: 'http://farm9.staticflickr.com/8179/7918424842_c79f7e345c_b.jpg', desc: 'Image 04'},
      {src: 'http://farm9.staticflickr.com/8315/7918425138_b739f0df53_b.jpg', desc: 'Image 05'},
      {src: 'http://farm9.staticflickr.com/8461/7918425364_fe6753aa75_b.jpg', desc: 'Image 06'}
  ];
  // initial image index
  vm._Index = 0;
  // if a current image is the same as requested image
  vm.isActive = function (index) {
      return vm._Index === index;
  };
  // show prev image
  vm.showPrev = function () {
      vm._Index = (vm._Index > 0) ? --vm._Index : vm.photos.length - 1;
  };
  // show next image
  vm.showNext = function () {
      vm._Index = (vm._Index < vm.photos.length - 1) ? ++vm._Index : 0;
  };
  // show a certain image
  vm.showPhoto = function (index) {
      vm._Index = index;
  };

  vm.ok = function () {
      $uibModalInstance.close();
  };

  vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
  };

}]);
